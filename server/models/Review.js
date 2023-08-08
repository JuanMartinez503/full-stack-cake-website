const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    pageNumber: {
      type: Number,
      
    },
    rating: {
      type: Number,
      required: true,
    },
    username: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    id: false,
  }
);
const Review = model("Review", reviewSchema);
module.exports = Review;
