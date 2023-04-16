const { Router } = require('express')
const { allPlatforms } = require('../handlers/platformsHandler')

const platforms = Router()

platforms.get('/', allPlatforms)

module.exports = platforms;