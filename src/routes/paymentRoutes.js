const { Router } = require('express');
const mercadopago = require('mercadopago');

// IMPORTA LA FUNCION QUE NECESITAS AQUÍ
const { balanceCharge } = require('../controllers/Transactions/balanceCharge');
const { buyVideogames } = require('../controllers/Transactions/buyVideogames');


mercadopago.configure({access_token: process.env.ACCESS_TOKEN});

const payment = Router();

payment.post('/loadbalance', async (req, res) => {
  const { coins,  user } = req.body;   //se agrego inputValue
  
  // Crear la preferencia de pago para cargar coins
  const preference = {
    items: [
      {
        title: 'Carga de Coins',
        currency_id: 'ARS',
        quantity: 1,
        unit_price: coins
      },
    ],
    // Configurar las URLs de redireccionamiento
    back_urls: {
      success: "http://localhost:3000/payment/success",
      failure: "http://localhost:3000/payment/failure",
      pending: "http://www.pending.com"
    },
    auto_return: 'approved',
    binary_mode: true,
    notification_url: "https://www.your-site.com/ipn",

  };

  try {
    // Crear la preferencia de pago en MercadoPago
    const response = await mercadopago.preferences.create(preference);

    // Obtener el init_point de la respuesta de MercadoPago
    const initPoint = response.body.init_point;

    // Realizar las acciones adicionales que necesites, como almacenar información en la base de datos, etc.

    // Enviar la URL de redireccionamiento al cliente
    res.status(200).json({ initPoint });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to create payment preference' });
  }
});

payment.get('/payment/success', async (req, res) => {
  const { collection_id, collection_status, external_reference, payment_id } = req.query;
  
  try {
    // Aquí puedes validar el pago y realizar acciones adicionales,
    // como actualizar la base de datos. 

    // Supongamos que tienes una función para actualizar la base de datos, se vería algo así:
    // await updateDatabaseWithPaymentInfo(collection_id, collection_status, external_reference, payment_id);

    // Finalmente, redirige al usuario a la página de éxito en tu frontend,
    res.redirect(`https://localhost:3000/profile`);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: 'Failed to process payment information' });
  }
});

payment.post('/cargacoins', async (req, res) => {
  const { user, input } = req.body;

  try {
   let response = await balanceCharge(user.sub, input)
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json(error.message)
  }
});

payment.post('/buy', async (req, res) =>{
    const{idVideogame, idUser} = req.body;
    try {
      res.status(200).json(await buyVideogames(idVideogame, idUser));
    } catch (error) {
      res.status(400).json(error.message);
    }
  })



module.exports = payment;

