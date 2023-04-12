const { Router } = require('express')
const router = Router();
//const { userRouter } = require('../controllers/userControllers/userRouter.js')


router.use('/users', userRouter);


module.exports = router