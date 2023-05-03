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

const message = async (email, name) =>{
    try {
        let transporte = await createTrans()
    let info = await transporte.sendMail({
        from: `Bienvenido a CoderGame" <ramirosanchezsolano@gmail.com>`, // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: `<b>hola ${name} te damos la bienvenida a CoderGame</b>`, // html body
      });
    } catch (error) {
        
    }
}

module.exports = {message, createTrans}