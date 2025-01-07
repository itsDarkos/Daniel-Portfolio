import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  try {
    // Lanzar Puppeteer con los argumentos para evitar problemas de sandbox
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'] // Solo en producción o entornos con restricciones
    });

    const page = await browser.newPage();

    // Asegúrate de que la URL es correcta en producción
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' }); // Espera hasta que la red esté inactiva

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
