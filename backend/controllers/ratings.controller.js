import Product from "../models/product.model.js";
import Ratings from "../models/ratings.model.js";

// createRating
export const createRating = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) throw new Error("product not found: ", { product });

    const rating = new Ratings({
      product: product._id,
      user: user._id,
      rating: req.rating,
    });
    await product.save();
    await rating.save();
    res.status(200).json(rating);
  } catch (error) {
    next(error);
  }
};

// getProductRatings
export const getProductRatings = async (req, res, next) => {
  try {
    const productRating = await Ratings.find({
      product: req.params.productId,
    });
    res.status(200).json(productRating);
  } catch (error) {
    next(error);
  }
};
