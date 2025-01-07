import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  try {
    // Lanza Puppeteer y abre una nueva página
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Aquí es donde le indicas a Puppeteer qué página renderizar. Puedes usar tu URL de desarrollo local
    await page.goto('http://localhost:3000'); // Cambia esto si tu app está en producción

    // Genera el PDF a partir de la página
    const pdf = await page.pdf({
      format: 'A4',               // Tamaño de página
      printBackground: true,      // Incluir fondo
      margin: {                   // Márgenes personalizados
        top: '20mm',
        bottom: '20mm',
        left: '20mm',
        right: '20mm',
      },
    });

    await browser.close();

    // Establece los encabezados de la respuesta para enviar el archivo PDF
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=danielportfolio.pdf');
    
    // Envia el archivo PDF como respuesta
    res.send(pdf);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error generando el PDF' });
  }
}
