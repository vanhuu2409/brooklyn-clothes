import Cart from "../models/cart.model.js";
import CartItem from "../models/cartItem.model.js";
import Product from "../models/product.model.js";
import { findUserById } from "./user.controller.js";

// create cart
export const createCart = async (user, res) => {
  try {
    const cart = new Cart({ user });
    return await cart.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

// find user cart
export const findUserCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id });
    console.log({ cart, CartItem });
    const cartItem = await CartItem.find({ cart: cart._id }).populate(
      "product"
    );
    cart.cartItem = cartItem;

    let total = 0;
    let quantity = 0;
    total;
    for (let item of cart.cartItem) {
      total += item.price;
      quantity += item.quantity;
    }

    cart.total = total;
    cart.quantity = quantity;
    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
};

// add cart item
export const addCartItem = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id });

    const product = await Product.findById(req.body.productId);
    console.log(cart);

    const { _id, price, discountPrice } = product;

    const isItem = await CartItem.findOne({
      cart: cart._id,
      product: product._id,
      user: req.user.id,
      size: req.body.sizeSelected,
      color: req.body.colorSelected,
    });

    if (!isItem) {
      const cartItem = new CartItem({
        product: _id,
        cart: cart._id,
        user: req.user.id,
        price,
        discountPrice,
        size: req.body.sizeSelected,
        color: req.body.colorSelected,
        quantity: 1,
      });
      const createCartItem = await cartItem.save();
      cart.cartItem.push(createCartItem);
      console.log(cart);
      await cart.save();
      res.status(200).json(cartItem);
    }

    isItem.quantity += 1;
    await isItem.save();

    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
};

// update cart item
export const updateCartItem = async (req, res, next) => {
  try {
    const { quantity, sizeSelected, colorSelected } = req.body;
    const item = await CartItem.findOne({
      product: req.params.id,
      color: colorSelected,
      size: sizeSelected,
    })
      .populate("user")
      .populate("product");
    console.log(item);
    if (!item) throw new Error("CartItem not found: ", req.body);

    console.log(req.body);

    const user = await findUserById(req.user.id);
    if (!user) throw new Error("User not found: ", req.user.id);

    const isUserCart = user._id.toString() === req.user.id.toString();
    if (!isUserCart)
      throw new Error("You just have permission to access you own cart");

    if (item.quantity < 1) throw new Error("Quantity must be greater than 1");

    item.quantity = item.quantity + 1;
    item.price = item.quantity * item.product.price;
    // item.discountPrice = item.quantity * item.product.discountPrice;

    if (quantity) {
      item.price = quantity * item.product.price;
      // item.discountPrice = quantity * item.product.discountPrice;
      item.quantity = quantity;
    }

    const updateCartItem = await item.save();
    res.status(200).json(updateCartItem);
  } catch (error) {
    next(error);
  }
};

// delete cart item
export const deleteCartItem = async (req, res, next) => {
  try {
    const { sizeSelected, colorSelected } = req.body;
    const item = await CartItem.findOne({
      product: req.params.id,
      color: colorSelected,
      size: sizeSelected,
    })
      .populate("user")
      .populate("product");
    console.log(req.body, req.params.id);
    if (!item) throw new Error("CartItem not found: ", req.params.id);

    const user = await findUserById(req.user.id);
    if (!user) throw new Error("User not found: ", req.user.id);

    const isUserCart = user._id.toString() === item.user.id.toString();
    if (!isUserCart)
      throw new Error("You just have permission to access you own cart");

    const deletedItem = await CartItem.findOneAndDelete({
      product: req.params.id,
      color: colorSelected,
      size: sizeSelected,
    });
    res.status(200).json(item);
  } catch (error) {
    next(error);
  }
};

// find cart item
export const findCartItem = async (cartItemId) => {
  try {
    const item = await CartItem.findById(cartItemId)
      .populate("user")
      .populate("product");
    if (!item) throw new Error("CartItem not found: ", { cartItemId });
    return item;
  } catch (error) {
    throw new Error(error.message);
  }
};
