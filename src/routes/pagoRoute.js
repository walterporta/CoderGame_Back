const { Rourer, Router } = require('express')
const stripe = require('stripe')(process.env.STRIPE_KEY);
const { Client } = require('pg');

const { User, Wallet } = require('../db')

const pagos = Router();
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'codergame',
    password: 'mario19',
    port: 5432,
  });
  

pagos.post('/', async (req, res) => {
    try {
        const { userId, amount } = req.body;

        //verifica que el usuario este en la base de datos
        await client.connect();
        const result = await client(`SELECT * FROM users WHERE id = ${userId}}`);
        if(result.rows.length === 0) {
            res.status(404).json({message: 'El usuario no existe'});
        }

        //verifica que el usuario tenga suficiente saldo en su cartera
        const wallerResult = await client.query(`SELECT * FROM wallets WHERE user_id = ${userId}`);
        const wallet = wallerResult.rows[0];
        if(wallet.balance < amount) {
            res.status(400).json({message: 'Saldo insuficiente en la cartera'});
        }
        
        //procesa el pago utilizando la API de stripe
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: 'mxn',
            payment_method_types: ['card'],
        });

        //Actualiza la cartera del usuario en la base de datos
        const newBalance = await wallet.balance - amount;

        await client.query(`UPDATE wallets SET balance = ${newBalance} WHERE user_id = '${userId}'`);

        //envia una respuesta satisfactoria al cliente
        res.status(202).json({message: 'Pago procesado correctamente', payment});
    }
    catch(error) {
        res.status(500).json({message: 'Error al procesar el pago'});
    }
    finally {
        await client.end();
    }
});


module.exports = pagos;