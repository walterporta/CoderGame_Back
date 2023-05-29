const { Router } = require('express');
const mercadopago = require("mercadopago");
const nodemon = require('nodemon');
mercadopago.configure({access_token: process.env.MERCADOPAGO_KEY})
const payment = Router();

payment.post('/', (req, res) => {
    const prod = req.body;

        let preference = {
            items: [{
                id: 123,
                title: prod.title,
                currency_id: 'ARS',
                pinture_url: prod.image,
                description: prod.description,
                category_id: 'art',
                quantity: 1,
                unit_price: prod.price,
            }],
            back_urls: {
                success: 'http://localhost:3000/',
                failure: '',
                pending: '',
            },
            auto_return: 'approved',
            binary_mode: true,
        }
        mercadopago.preference.create(preference).then((response)=> res.status(200).send({response})).catch((error) => res.status(400).send({error: error.message}))

});


module.exports = payment;