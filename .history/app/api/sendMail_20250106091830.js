import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstname, lastname, email, phone, service, message } = req.body;

    // Configuración del transportador de Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // Cambia si usas otro proveedor
      auth: {
        user: process.env.EMAIL, // Tu correo de Gmail
        pass: process.env.EMAIL_APP_PASSWORD, // La contraseña de aplicación
      },
    });

    try {
      // Configuración del correo
      await transporter.sendMail({
        from: `${firstname} ${lastname} <${email}>`,
        to: process.env.EMAIL, // Correo que recibirá el mensaje
        subject: `Nuevo mensaje sobre: ${service}`,
        text: message,
        html: `
          <p><strong>Nombre:</strong> ${firstname} ${lastname}</p>
          <p><strong>Correo:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${phone}</p>
          <p><strong>Servicio:</strong> ${service}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message}</p>
        `,
      });

      res.status(200).json({ success: true, message: "Correo enviado correctamente." });
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      res.status(500).json({ success: false, message: "Error al enviar el correo." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ success: false, message: "Método no permitido." });
  }
}
