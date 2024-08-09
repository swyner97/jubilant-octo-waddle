const { Signup, Login } = require('../controllers/AuthController.cjs')
const router = require('express').Router()
const {userVerification} = require('../middlewares/AuthMiddleware.cjs')

router.post('/signup', Signup)
router.post('/login', Login)
router.post('/', userVerification)

module.exports = router