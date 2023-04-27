const { Router } = require('express')
const { allPlatforms, platformsFilterHandler } = require('../handlers/platformsHandler')

const platforms = Router()

platforms.get('/', allPlatforms)
platforms.get('/filter', platformsFilterHandler)


module.exports = platforms; 