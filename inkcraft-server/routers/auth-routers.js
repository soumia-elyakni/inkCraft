const router = require('express').Router()

const {register} = require('../controllers/users-controller')
const { tryCatch } = require('../middlewares/try-catch')



router.post('/register', tryCatch(register))
module.exports = router