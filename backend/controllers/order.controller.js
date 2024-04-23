import Address from "../models/address.model.js";
import Cart from "../models/cart.model.js";
import CartItem from "../models/cartItem.model.js";
import Order from "../models/order.model.js";
import OrderItem from "../models/orderItem.model.js";
import User from "../models/user.model.js";

// create order
export const createOrder = async (req, res, next) => {
  const { body: shipAddress } = req;
  try {
    const user = await User.findById(req.user.id);
    let address;
    if (shipAddress._id) {
      let existAddress = await Address.findById(shipAddress._id);
      address = existAddress;
    } else {
      address = new Address({ ...shipAddress });
      address.user = req.user.id;
      await address.save();
      user.address.push(address);
      // console.log(user);
      await user.save();
    }
    const cart = await Cart.findOne({ user: req.user.id });
    // console.log(cart);
    let orderItems = [];
    for (let item of cart.cartItem) {
      const cartItem = await CartItem.findById(item._id);
      const orderItem = new OrderItem({
        product: cartItem.product,
        user: item.user,
        color: cartItem.color,
        size: cartItem.size,
        price: cartItem.price,
        discountPrice: cartItem.discountPrice,
        quantity: cartItem.quantity,
      });
      const createOrderItem = await orderItem.save();
      orderItems = [...orderItems, createOrderItem];
    }
    const createOrder = new Order({
      user: user,
      orderItem: orderItems,
      total: cart.total,
      quantity: cart.quantity,
      shippingAddress: address,
    });

    const createdOrder = await createOrder.save();
    res.status(200).json(createdOrder);
  } catch (error) {
    next(error);
  }
};

// usersOrderHistory
export const usersOrderHistory = async (req, res, next) => {
  try {
    const orders = await Order.find({
      user: req.user.id,
      // orderStatus: "Placed",
    })
      // .populate("address")
      .populate({
        path: "orderItem",
        populate: { path: "product" },
      })
      .lean();
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

// userAddress
export const userAddress = async (req, res, next) => {
  try {
    const addresses = await Address.find({
      user: req.user.id,
    })
      .populate({
        path: "user",
      })
      .lean();
    res.status(200).json(addresses);
  } catch (error) {
    next(error);
  }
};
