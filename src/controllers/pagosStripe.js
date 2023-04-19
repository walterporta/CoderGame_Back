const stripe = require('stripe')('STRIPE_KEY')

async function  procesarPago(cantidad, moneda, descripcion, token) {
    try{
        const charge = await stripe.charges.create({
            amount: cantidad,
            currency: moneda,
            descripcion: descripcion,
            source: token,
        });

        return {message: 'Pago procesado correctamente'};
    }
    catch(error) {
        console.log(error);
        return{message: 'Error al procesar el pago'};
    }
}

module.exports = {
    procesarPago
}