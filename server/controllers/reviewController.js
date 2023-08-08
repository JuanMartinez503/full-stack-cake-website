const { User, Review } = require("../models");

module.exports = {
  async populatePages(req, res) {
    try {
      const reviews = await Review.find({ pageNumber: req.params.pageNumber });
      res.json(reviews);
    } catch (err) {
      res
        .status(500)
        .json({ message: "There was an error populating the reviews" });
    }
  },
  async createReview(req, res) {
    try {
      const review = await Review.create(req.body);
      const user = await User.findOneAndUpdate(
        { username: req.body.username },
        { $addToSet: { reviews: review._id } },
        { new: true, runValidators: true }
      );
      if (!user) {
        res
          .status(404)
          .json({ message: "Review created but the user Id was not found" });
      } else {
        res.json({ message: "Review was created successfully!" });
      }
    } catch (err) {
      res
        .status(500)
        .json({ message: "there was an error creating the comment" });
    }
  },
  async deleteReview(req, res) {
    try {
      const reviewId = req.params.reviewId;

      // Delete the review by its ID
      const deletedReview = await Review.findByIdAndDelete(reviewId);

      if (!deletedReview) {
        return res.status(404).json({ message: "Review not found" });
      } else {
        // Find the user associated with the review and remove the review reference
        const user = await User.findOneAndUpdate(
          { username: deletedReview.username },
          { $pull: { reviews: reviewId } },
          { new: true }
        );

        if (!user) {
          return res.status(404).json({ message: "User not found" });
        } else {
          res.json({ message: "Review deleted successfully" });
        }
      }
    } catch (err) {
      res.status(500).json({ message: "Error deleting the review" });
    }
  },
};
