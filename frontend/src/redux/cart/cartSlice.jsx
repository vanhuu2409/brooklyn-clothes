import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import http from "../../services/api.jsx";
import { useSelector } from "react-redux";

const initialState = {
  cart: [],
  cartItems: [],
  loading: false,
  error: null,
};

// Define a thunk to fetch products from the backend
export const fetchCartItem = createAsyncThunk(
  "cart/fetchCartItem",
  async () => {
    try {
      // Otherwise, fetch products with the provided productId
      const response = await http.get(
        `${import.meta.env.VITE_API_URL}/api/cart`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.loading = true;
      let isItemInCart = state.cart.find((item) => {
        return (
          item.name === action.payload.name &&
          item.sizeSelected === action.payload.sizeSelected &&
          item.colorSelected === action.payload.colorSelected
        );
      });
      if (isItemInCart && isItemInCart.quantity) {
        isItemInCart.quantity += 1;
      } else {
        state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => {
        return item.cartId !== action.payload.cartId;
      });
    },
    userLogoutClearCart: (state, action) => {
      state.cart.cart = null;
      state.cart.cartItems = null;
    },
    increaseQuantity: (state, action) => {
      let item = state.cart.find(
        (item) => item.cartId === action.payload.cartId
      );
      if (item?.quantity) {
        item.quantity += 1;
      } else {
        item = { ...item, quantity: 1 };
      }
    },
    decreaseQuantity: (state, action) => {
      let item = state.cart.find(
        (item) => item.cartId === action.payload.cartId
      );
      if (item && item?.quantity > 1) item.quantity -= 1;
    },
    quantityByAmount: (state, action) => {
      let item = state.cart.find(
        (item) => item.cartId === action.payload?.item?.cartId
      );
      if (action.payload?.quantity >= 0)
        item.quantity = action.payload?.quantity;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cartItems = action.payload;
      })
      .addCase(fetchCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  quantityByAmount,
  fetchCartStart,
  fetchCartSuccess,
  fetchCartFailure,
  fetchAddCartStart,
  fetchAddCartSuccess,
  fetchAddCartFailure,
} = cartSlice.actions;

export default cartSlice.reducer;
