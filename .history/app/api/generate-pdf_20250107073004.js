import puppeteer from "puppeteer";

export default async function handler(req, res) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // URLs de las páginas que quieres incluir en el PDF
  const urls = [
    `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}`,
    `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/services`,
    `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/resume`,
    `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/work`,
  ];

  const pdfBuffers = [];

  for (const url of urls) {
    await page.goto(url, { waitUntil: "networkidle0" });
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });
    pdfBuffers.push(pdfBuffer);
  }

  await browser.close();

  // Combina los PDF en uno solo
  const finalPDF = Buffer.concat(pdfBuffers);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", 'attachment; filename="portafolio.pdf"');
  res.send(finalPDF);
}
