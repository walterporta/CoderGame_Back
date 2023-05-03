const {createTrans} = require('./message')
const { Videogames, Users} = require('../../db')

const emailNewGame = async (txt, userEmail)=>{
    
    try {
        let transporte = await createTrans()
        let info = await transporte.sendMail({
        from: `New Game" <ramirosanchezsolano@gmail.com>`, // sender address
        to: userEmail, // list of receivers
        subject: `NEW GAME`, // Subject line
        text: "NEW GAME", // plain text body
        html: txt, // html body
      });
      return info
    } catch (error) {
        return error.message
    }


}

const emailAllClient = async (game) =>{

    const allUser = await Users.findAll({where:{rol:'client'}})
    const text = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Game</title>
      <style>
        /* Estilos para el contenido principal */
        body {
          background-color: #f2f2f2;
          font-family: Arial, sans-serif;
          font-size: 16px;
          line-height: 1.5;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
        h1, h3 {
          color: #0057a6;
          text-align: center;
          margin-top: 0;
        }
        p {
          text-align: justify;
          margin: 1rem 0;
        }
        /* Estilos para la imagen */
        img {
          display: block;
          max-width: 100%;
          height: auto;
          margin: 1rem auto;
          max-height: 400px;
        }
        /* Estilos para el contenedor de la imagen y el texto */
        div {
          text-align: center;
        }
      </style>
    </head>
    <body>
      <h1>New Game!!!</h1>
      <p>Do not miss the new game, be the first to buy it!!</p>
      <div>
        <h3>${game.name}</h3>
        <p>${game.description}</p>
        <img src="${game.image}" alt="Game image">
      </div>
      <script src="script.js"></script>
    </body>
    </html>`;
if(allUser.length !==0){
    allUser.map((user)=>{
    emailNewGame(text, user.email)

})
}

    return 'send email Ok'
}   

module.exports = {emailAllClient}