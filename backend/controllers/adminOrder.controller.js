import Order from "../models/order.model.js";

// getAllOrder
export const getAllOrder = async (req, res, next) => {
  try {
    const order = await Order.find()
      .populate("user")
      .populate({
        path: "orderItem",
        populate: { path: "product" },
      })

      .lean();
    return res.status(200).json(order);
  } catch (error) {
    // throw new Error(error.message);
    next(error);
  }
};

// findOrderById
export const findOrderById = async (orderId) => {
  const order = await Order.findById(orderId)
    .populate("user")
    .populate({ path: "orderItem", populate: { path: "product" } })
    .populate("shippingAddress")
    .lean();
  return order;
};

// findOrder
export const findOrder = async (req, res, next) => {
  try {
    const order = await findOrderById(req.params.id);
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

// place order
export const placeOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user")
      .populate({ path: "orderItem", populate: { path: "product" } })
      .populate("shippingAddress");
    order.orderStatus = "Placed";
    order.paymentDetails.status = "Completed";
    await order.save();
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

// comfirmedOrder
export const comfirmedOrders = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user")
      .populate({ path: "orderItem", populate: { path: "product" } })
      .populate("shippingAddress");
    order.orderStatus = "Confirmed";
    await order.save();
    res.status(200).json(order);
  } catch (error) {
    // throw new Error(error.message);
    next(error);
  }
};

// shipOrder
export const shippedOrders = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user")
      .populate({ path: "orderItem", populate: { path: "product" } })
      .populate("shippingAddress");
    order.orderStatus = "Shipped";
    await order.save();
    res.status(200).json(order);
  } catch (error) {
    // throw new Error(error.message);
    next(error);
  }
};

// deliveryOrder
export const deliveryOrders = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user")
      .populate({ path: "orderItem", populate: { path: "product" } })
      .populate("shippingAddress");
    order.orderStatus = "Delivered";
    order.paymentDetails.paymentStatus = "Paided";
    await order.save();
    res.status(200).json(order);
  } catch (error) {
    // throw new Error(error.message);
    next(error);
  }
};

// cancelOrder
export const cancelOrders = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user")
      .populate({ path: "orderItem", populate: { path: "product" } })
      .populate("shippingAddress");
    order.orderStatus = "Cancelled";
    await order.save();
    res.status(200).json(order);
  } catch (error) {
    // throw new Error(error.message);
    next(error);
  }
};

// deleteOrder
export const deleteOrders = async (req, res, next) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id)
      .populate("user")
      .populate({ path: "orderItem", populate: { path: "product" } })
      .populate("shippingAddress")
      .lean();
    res.status(200).json(order);
  } catch (error) {
    // throw new Error(error.message);
    next(error);
  }
};
