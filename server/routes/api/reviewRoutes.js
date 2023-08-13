const {
  populatePages,
  createReview,
  deleteReview,
} = require("../../controllers/reviewController");
const router = require("express").Router();
const { authMiddleware } = require("../../utils/auth");
router.route("/:pageNumber").get(populatePages).post(authMiddleware, createReview);;
router.route("/:reviewId").delete(authMiddleware, deleteReview);
module.exports = router;
