import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET() {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Cambiar esta URL por la de tu sitio en producción o localhost
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    await page.goto(`${baseUrl}/`, { waitUntil: "networkidle0" });

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    // Crear la respuesta con el PDF
    return new NextResponse(pdf, {
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
