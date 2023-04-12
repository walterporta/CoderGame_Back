const {Genregames} = require('../db')

const genreHandler = async (req,res) => {

    try {
        console.log('ingreso la ruta')
        listGenre = await Genregames.findAll()

        res.status(200).json(listGenre)
    } catch (error) {
        res.status(400).json({error: "no se encontraron dietas"})
    }
}

module.exports = {genreHandler}

