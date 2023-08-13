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
  },async createReview(req, res) {
    try {
      const newReview = {
        ...req.body,
        pageNumber: req.params.pageNumber,
      };
  
      const review = await Review.create(newReview);
  
      // Assuming the user's ID is available in req.user.id
      const user = await User.findByIdAndUpdate(
        req.user._id,
        { $addToSet: { reviews: review._id } },
        { new: true, runValidators: true }
      );
  
      if (!user) {
        return res
          .status(404)
          .json({ message: "Review created but the user ID was not found" });
      }
  
      return res.json({ message: "Review was created successfully!" });
    } catch (err) {
      return res
        .status(500)
        .json(err.message);
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
