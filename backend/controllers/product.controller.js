import Product from "../models/product.model.js";

export const createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    return res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};
export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    await Product.findOneAndDelete({ _id: req.params.id });
    res.status(200).json("Product has been deleted!");
  } catch (error) {
    next(error);
  }
};
