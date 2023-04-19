const { Router } = require('express')
const {getAllGenres} = require('../controllers/ApyAndDb/getGenreData')
const {insertGamesDb} = require('../controllers/ApyAndDb/insertGamesApiDB')
const {getAllPlatforms} = require('../controllers/ApyAndDb/getPlatforms')


const db= Router()

db.get('/', (req,res)=>{
    try {
        console.log('estoy aca')
        getAllGenres()
        getAllPlatforms()
        insertGamesDb()
        res.status(200).json('se inserto todo en la base de datos')
    } catch (error) {
        res.status(400).json('no se pudo cargar la base de datos')
        
    }
})

module.exports = db