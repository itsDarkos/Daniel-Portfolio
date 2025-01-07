// /app/api/sendMail/route.js
import emailjs from "emailjs-com";

export async function POST(req) {
  // Recibe los datos del formulario
  const { firstname, lastname, email, phone, service, message } = await req.json();

  // Validar los campos obligatorios
  if (!firstname || !lastname || !email || !phone || !service || !message) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Todos los campos son obligatorios",
      }),
      { status: 400 }
    );
  }

  const templateParams = {
    firstname,
    lastname,
    email,
    phone,
    service,
    message,
  };

  try {
    // Enviar el correo utilizando EmailJS
    await emailjs.send(
      "service_lr6junh", // Tu Service ID de EmailJS
      "template_4qin74q", // Tu Template ID de EmailJS
      templateParams,
      "vIWwVeEDLb7szgYin" // Tu User ID de EmailJS
    );
    return new Response(
      JSON.stringify({ success: true, message: "Correo enviado correctamente" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Hubo un error al enviar el correo",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
