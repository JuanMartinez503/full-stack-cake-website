const userRoutes = require('./userRoutes')
const reviewRoutes = require('./reviewRoutes')
const router = require('express').Router()

router.use('/users',userRoutes)
router.use('/reviews', reviewRoutes)

module.exports = router