// /pages/api/sendMail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstname, lastname, email, phone, service, message } = req.body;

    // Configuración del transportador de Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // O utiliza SMTP de tu proveedor de correo
      auth: {
        user: "TU_CORREO@gmail.com", // Cambia a tu correo
        pass: "TU_CONTRASEÑA", // Cambia a tu contraseña o usa un App Password
      },
    });

    try {
      await transporter.sendMail({
        from: `${firstname} ${lastname} <${email}>`,
        to: "daniellazaro20@gmail.com", // Tu correo donde recibirás los mensajes
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

      return res.status(200).json({ success: true, message: "Correo enviado" });
    } catch (error) {
      console.error("Error al enviar correo:", error);
      return res.status(500).json({ success: false, message: "Error al enviar correo" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ success: false, message: "Método no permitido" });
  }
}
