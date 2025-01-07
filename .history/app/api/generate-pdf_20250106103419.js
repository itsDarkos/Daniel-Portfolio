import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  try {
    console.log("Iniciando la generación de PDF...");
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

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

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=portfolio.pdf');
    res.send(pdf);

  } catch (error) {
    console.error('Error al generar el PDF:', error);
    res.status(500).json({ error: 'Error generando el PDF', details: error.message });
  }
}
