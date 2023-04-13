const { Genregames } = require('../db')
console.log('pase por genres');
const genreHandler = async (req, res) => {

    try {
        listGenre = await Genregames.findAll()
        res.status(200).json(listGenre)
    } catch (error) {
        res.status(400).json({ error: "no se encontraron generos" })
    }
}


module.exports = { genreHandler }


