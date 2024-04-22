import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import http from "../../services/api.jsx";

// Define the initial state
const initialState = {
  products: [],
  productDetail: null,
  loading: true,
  error: null,
};

// Define a thunk to fetch products from the backend
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (query) => {
    try {
      // If the query is empty, fetch all products
      if (!query) {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/product/getall`
        );
        return response.data;
      }
      // Otherwise, fetch products with the provided query
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/product/getall?${query}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

// Create the product slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateProducts(state, action) {
      state.products = action.payload;
    },
    fetchProductStart: (state) => {
      state.loading = true;
    },
    fetchProductSuccess: (state, action) => {
      state.productDetail = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchProductFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export actions
export const {
  updateProducts,
  fetchProductStart,
  fetchProductSuccess,
  fetchProductFailure,
} = productSlice.actions;
export default productSlice.reducer;
