const {MEILER_PASS}= process.env
const nodemailer = require("nodemailer");

const createTrans = async () =>{
    var transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure:true,
        auth: {
          user: "ramirosanchezsolano@gmail.com",
          pass: 'nvcbwryvuiiarixw'
        },
      });
      return transport
}

const message = async (email, name) => {
  // Verificar que el correo electrónico y el nombre sean válidos
  if (!email || typeof email !== 'string' || !name || typeof name !== 'string') {
    throw new Error('Email o nombre inválido');
  }

  try {
    const transporter = await createTrans();

    const info = await transporter.sendMail({
      from: `"Bienvenido a CoderGame" <ramirosanchezsolano@gmail.com>`,
      to: email,
      subject: '¡Bienvenido a CoderGame!',
      html: `
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            font-size: 14px;
            color: #black;
          }
          .header {
            background: #d80000;
            padding: 20px;
            text-align: center;
            color: #black;
            border-radius: 5px;
          }
          .header h1 {
            font-size: 28px;
            color: #ffffff;
            margin: 0;
          }
          .content {
            padding: 20px;
          }
          .button {
            background-color: #d80000;
            color: #ffffff;
            display: inline-block;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Bienvenido a CoderGame</h1>
        </div>
        <div class="content">
          <p>Hola.</p>
          <p>¡Gracias por unirte a CoderGame! Esperamos que disfrutes de nuestra plataforma.</p>
          <p>No dudes en contactarnos si necesitas ayuda o tienes alguna pregunta.</p>
          <a href="https://coder-game.vercel.app/" class="button">Inicia sesión ahora</a>
        </div>
      </body>
    </html>
      `,
    });

    console.log(`Correo electrónico enviado a ${email}: ${info.messageId}`);
  } catch (error) {
    console.error(`Error al enviar el correo electrónico de bienvenida a ${email}:`, error);
  }
}

module.exports = {message, createTrans}