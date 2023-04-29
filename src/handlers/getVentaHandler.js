const { infoVentasEmpresa } = require('../controllers/Empresa/infoVentasEmpresa.js')

const getVentaHandler = async (req, res) => {
    const sub = req.params.sub


    try {
        const response = await infoVentasEmpresa(sub)
        if(!response) return res.status(400).send('No existe el id')
        return res.status(200).json(response)
    } catch (error) {
        res.status(400).send(error.message)
    }

}



module.exports = { getVentaHandler }