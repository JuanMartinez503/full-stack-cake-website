const {
  populatePages,
  createReview,
  deleteReview,
} = require("../../controllers/reviewController");
const router = require("express").Router();
const { authMiddleware } = require("../../utils/auth");
router.route("/:pageNumber/public").get(populatePages)
router.route("/:pageNumber").post(authMiddleware, createReview);;
router.route("/:reviewId").delete(authMiddleware, deleteReview);
module.exports = router;
