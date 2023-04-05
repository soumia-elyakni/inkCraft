const router = require('express').Router()

const { addStorie, getStoriesByUserId } = require('../controllers/stories-controller')
const { tryCatch } = require('../middlewares/try-catch')



router.post('/addStorie', tryCatch(addStorie))
router.post('/getAllStories', tryCatch(getStoriesByUserId))

module.exports = router