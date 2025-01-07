// /app/api/sendMail/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { firstname, lastname, email, phone, service, message } = await req.json();

  // Configuración de Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',  // Puedes usar otro proveedor de correo si lo prefieres
    auth: {
      user: 'tucorreo@gmail.com',  // Tu correo
      pass: 'tucontraseña',  // Tu contraseña de aplicación o la normal
    },
  });

  const mailOptions = {
    from: email,
    to: 'tucorreo@gmail.com',  // El correo al que se enviará el mensaje
    subject: `Nuevo mensaje de ${firstname} ${lastname}`,
    text: `
      Nombre: ${firstname} ${lastname}
      Correo: ${email}
      Teléfono: ${phone}
      Servicio: ${service}
      
      Mensaje: ${message}
    `,
  };

  try {
    // Enviar correo
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true, message: 'Correo enviado correctamente' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: 'Hubo un error al enviar el correo', error }), { status: 500 });
  }
}
