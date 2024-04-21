import Product from "../models/product.model.js";
import Reviews from "../models/reviews.model.js";

// createReview
export const createReview = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) throw new Error("product not found: ", { product });

    const review = new Reviews({
      product: product._id,
      user: user._id,
      review: req.review,
    });
    await product.save();
    await review.save();
    res.status(200).json(review);
  } catch (error) {
    next(error);
  }
};

// getProductReviews
export const getProductReviews = async (req, res, next) => {
  try {
    const productRating = await Reviews.find({
      product: req.params.productId,
    }).polulate("User");
    res.status(200).json(productRating);
  } catch (error) {
    next(error);
  }
};
