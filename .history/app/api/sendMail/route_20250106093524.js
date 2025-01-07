// /app/api/sendMail/route.js
import emailjs from 'emailjs-com';

export async function POST(req) {
  const { firstname, lastname, email, phone, service, message } = await req.json();

  const templateParams = {
    firstname,
    lastname,
    email,
    phone,
    service,
    message,
  };
//npm warn deprecated emailjs-com@3.2.0: The SDK name changed to @emailjs/browser
  try {
    await emailjs.send(
      'your_service_id',  // Tu Service ID de EmailJS
      'your_template_id', // Tu Template ID de EmailJS
      templateParams,
      'your_user_id'      // Tu User ID de EmailJS
    );
    return new Response(JSON.stringify({ success: true, message: 'Correo enviado correctamente' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, message: 'Hubo un error al enviar el correo', error: error.message }), { status: 500 });
  }
}
