const { Router } = require('express')

const { procesarPago } = require('../controllers/pagosStripe')

const pagos = Router();

pagos.post('/pagos', async(req, res) => {
    const { cantidad, moneda, descripcion, token } = req.body;

    const resultado = await procesarPago(cantidad, moneda, descripcion, token);
    res.status(202).json(resultado);
});

module.exports = pagos;