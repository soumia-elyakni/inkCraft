const router = require('express').Router()

const { addStorie, getStoriesByUserId } = require('../controllers/stories-controller')
const { authenticate } = require('../middlewares/auth')
const { tryCatch } = require('../middlewares/try-catch')



router.post('/addStorie', authenticate, tryCatch(addStorie))
router.get('/getAllStories', authenticate, tryCatch(getStoriesByUserId))

module.exports = router