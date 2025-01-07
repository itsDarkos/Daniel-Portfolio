import nodemailer from 'nodemailer';

export async function POST(req) {
  const { firstname, lastname, email, phone, service, message } = await req.json();

  // Configuración del transporte de nodemailer (usando un servicio SMTP, por ejemplo, Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail', // O tu proveedor de SMTP (por ejemplo, Gmail)
    auth: {
      user: process.env.EMAIL_USER, // Usar la variable de entorno
      pass: process.env.EMAIL_PASS, // Usar la variable de entorno
    },
  });

  // Opciones del correo
  const mailOptions = {
    from: process.env.EMAIL_USER, // Usar la variable de entorno
    to: 'destinatario@dominio.com', // Tu correo o el correo donde deseas recibir los mensajes
    subject: `Nuevo mensaje de ${firstname} ${lastname} - ${service}`,
    text: `
      Nombre: ${firstname} ${lastname}
      Correo: ${email}
      Teléfono: ${phone}
      Servicio: ${service}
      Mensaje: ${message}
    `,
  };

  try {
    // Enviar el correo
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true, message: 'Correo enviado correctamente' }), { status: 200 });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return new Response(JSON.stringify({ success: false, message: 'Hubo un error al enviar el correo', error: error.message }), { status: 500 });
  }
}
