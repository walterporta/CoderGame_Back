const { Router } = require('express')
const {postPromotionsHandler,
        getFivePromotionsHandler} = require('../handlers/promotionsHandler.js')


const promotionsRoute = Router()

promotionsRoute.post('/', postPromotionsHandler);
promotionsRoute.get('/', getFivePromotionsHandler);

module.exports = promotionsRoute