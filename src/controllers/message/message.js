const {MEILER_PASS}= process.env
const nodemailer = require("nodemailer");

const createTrans = async () =>{
    var transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure:true,
        auth: {
          user: "codergame2023@gmail.com",
          pass: MEILER_PASS
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
      from: `"Bienvenido a CoderGame" <codergame2023@gmail.com>`,
      to: email,
      subject: '¡Welcome to CoderGame!',
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
          <h1>Welcome to CoderGame</h1>
        </div>
        <div class="content">
          <p>Hola ${email}.</p>
          <p>¡Thanks for joining CoderGame! We hope you enjoy our platform.</p>
          <p>Feel free to contact us if you need help or have any questions.</p>
          <a href="https://coder-game.vercel.app/" class="button">Login Now</a>
        </div>
      </body>
    </html>
      `,
    });

    console.log(`E-mail send ${email}: ${info.messageId}`);
  } catch (error) {
    console.error(`Failed to send welcome email to ${email}:`, error);
  }
}

module.exports = {message, createTrans}