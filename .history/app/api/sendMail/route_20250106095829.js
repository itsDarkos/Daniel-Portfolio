import nodemailer from 'nodemailer';

export async function POST(req) {
  const { firstname, lastname, email, phone, service, message } = await req.json();

  // Configuración del transporte de nodemailer (usando un servicio SMTP, por ejemplo, Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail', // O tu proveedor de SMTP (por ejemplo, Gmail)
    auth: {
      user: 'daniellazaro20@gmail.com', // Tu correo
      pass: 'kgea woev siwc xyhp', // Tu contraseña o la contraseña de aplicación si usas Gmail
    },
  });

  // Opciones del correo
  const mailOptions = {
    from: 'tucorreo@gmail.com', // Correo desde el que se enviará el mensaje
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
