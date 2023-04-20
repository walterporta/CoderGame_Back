const { Router } = require('express');
const {S_KEY} = process.env;
const Stripe = require('stripe');
const checkout = Router();
const { balanceCharge } = require('../controllers/Transactions/balanceCharge')
const { buyVideogames } = require('../controllers/Transactions/buyVideogames')
const stripe = new Stripe(S_KEY);

checkout.post('/', async (req, res) => {
  console.log('toy aca')
  const { id, amount, idUser } = req.body;
  console.log(amount, idUser)
  try {
    // const payment = await stripe.paymentIntents.create({
    //   amount,
    //   currency: 'USD',
    //   description: 'Coins',
    //   payment_method: id,
    //   confirm: true
    //   })
    // if(payment.status === "succeeded"){
      await balanceCharge(idUser, amount)
      // } 
      res.status(200).json()

  } catch (error) {
      console.log(error,'soy el error');
      res.json({message: error});
    }
  });

  checkout.post('/buy', async (req, res) => {
    const{idVideogame, idUser} = req.body
    try {
      res.status(200).json(await buyVideogames(idVideogame, idUser))
    } catch (error) {
      res.status(400).json(error.message)
    }
  })

module.exports = checkout;