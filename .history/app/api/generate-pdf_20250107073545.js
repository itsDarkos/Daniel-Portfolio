import puppeteer from "puppeteer";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // URL base de tu aplicación
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    // Generar el PDF de la página principal
    await page.goto(`${baseUrl}/`, { waitUntil: "networkidle0" });
    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    // Configurar encabezados de la respuesta
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=MiPortafolio.pdf");
    res.status(200).send(pdf);
  } catch (error) {
    console.error("Error al generar el PDF:", error);
    res.status(500).json({ message: "Error al generar el PDF" });
  }
}
