import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET() {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Lista de URLs que deseas incluir en el PDF
    const urls = [
      "/",
      "/services",
      "/resume",
      "/contact", // Agrega más URLs según sea necesario
    ];

    // Cambiar esta URL por la de tu sitio en producción o localhost
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const pdfPages = [];

    for (const url of urls) {
      await page.goto(`${baseUrl}${url}`, { waitUntil: "networkidle0" });
      const pdf = await page.pdf({
        format: "A4",
        printBackground: true,
      });
      pdfPages.push(pdf);
    }

    await browser.close();

    // Combina los PDFs de cada página
    const finalPdf = await mergePdfs(pdfPages);

    // Crear la respuesta con el PDF combinado
    return new NextResponse(finalPdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=MiPortafolio.pdf",
      },
    });
  } catch (error) {
    console.error("Error al generar el PDF:", error);
    return new NextResponse(
      JSON.stringify({ message: "Error al generar el PDF" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// Función para combinar los PDFs en uno solo
async function mergePdfs(pdfs) {
  const { PDFDocument } = require('pdf-lib');
  const mergedPdf = await PDFDocument.create();

  for (const pdf of pdfs) {
    const pdfDoc = await PDFDocument.load(pdf);
    const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
    copiedPages.forEach(page => mergedPdf.addPage(page));
  }

  return await mergedPdf.save();
}
