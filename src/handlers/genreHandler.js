const {Genregames} = require('../db')

const genreHandler = async (req,res) => {

    try {
        listGenre = await Genregames.findAll()
        
        res.status(200).JSON(listGenre)
    } catch (error) {
        res.status(400).JSON({error: "no se encontraron dietas"})
    }
}

module.exports = {genreHandler}
