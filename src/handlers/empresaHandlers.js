const { getVideogamesEmpresa } = require('../controllers/Empresa/getVideogamesEmpresa')

const getAllVideogames = async (req,res)=>{
    console.log(req.body) 
    const { sub } = req.body
    
    try {
        res.status(200).json(await getVideogamesEmpresa(sub))
    } catch (error) {
        res.status(400).json({Error:error.message})
    }
}


module.exports = {getAllVideogames}