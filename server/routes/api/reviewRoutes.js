const {populatePages, createReview, deleteReview}=require('../../controllers/reviewController')
const router = require('express').Router()
const {authMiddleware} = require('../../utils/auth')
router.route('/').post(authMiddleware, createReview)
router.route('/:pageNumber').get(populatePages)
router.route('/:reviewId').delete(authMiddleware, deleteReview)
module.exports = router