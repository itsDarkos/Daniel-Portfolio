import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Asegúrate de usar la URL correcta. Usa 'localhost' en desarrollo y la URL completa en producción.
    await page.goto('http://localhost:3000'); // Cambia esto si es producción

    // Genera el PDF
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20mm',
        bottom: '20mm',
        left: '20mm',
        right: '20mm',
      },
    });

    await browser.close();

    // Enviar PDF como respuesta
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=portfolio.pdf');
    res.send(pdf);

  } catch (error) {
    console.error('Error al generar el PDF:', error);
    res.status(500).json({ error: 'Error generando el PDF', details: error.message });
  }
}
