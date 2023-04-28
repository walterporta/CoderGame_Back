const {infoVentasEmpresa} = require('../controllers/Empresa/infoVentasEmpresa.js')

const getVentaHandler = async (req, res) => {
    const id = req.params.sub
    console.log(id);

    try {
        const response = await infoVentasEmpresa(id)
        return res.status(200).json(response)
    } catch (error) {
        res.status(400).send(error.message)
    }

}



module.exports = { getVentaHandler }