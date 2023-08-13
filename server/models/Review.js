const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    pageNumber: {
      type: Number,
      required : true
    },
    rating: {
      type: Number,
      required: true,
    },
    review:{
      type:String,
      required:true
    },
    createdAt:{
      type: Date,
      default: Date.now(),
      get: function (value) {
        return new Date(value).toISOString()
      }
    },
    username: 
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    
  },
  {
    toJSON: { virtuals: true },
    id: false,
  }
);
const Review = model("Review", reviewSchema);
module.exports = Review;
