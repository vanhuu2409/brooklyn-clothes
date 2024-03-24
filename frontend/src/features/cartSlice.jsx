import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseQuantity: (state, action) => {
      let item = state.cart.find((item) => item.id === action.payload.id);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      let item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    quantityByAmount: (state, action) => {
      let item = state.cart.find(
        (item) => item.id === action.payload?.item?.id
      );
      if (action.payload.quantity >= 0)
        item.quantity = action.payload?.quantity;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  quantityByAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
