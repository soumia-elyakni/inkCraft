const router = require('express').Router()

const {register, login, logout} = require('../controllers/users-controller')
const { tryCatch } = require('../middlewares/try-catch')



router.post('/register', tryCatch(register))
router.post('/login', tryCatch(login))
router.delete('/logout', logout)
module.exports = router