const { Router } = require('express');

const {S_KEY} = process.env;
const Stripe = require('stripe');
const checkout = Router();

const stripe = new Stripe(S_KEY);

checkout.post('/', async (req, res) => {
  const { id, amount } = req.body;
  try {
  

    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      description: 'Coins',
      payment_method: id,
      confirm: true
      })

      res.status(200).json(payment)

  } catch (error) {
      console.log(error,'soy el error');
      res.json({message: error});
    }
  });

module.exports = checkout;