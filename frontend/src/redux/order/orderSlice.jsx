import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: [],
  orderItems: [],
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    fetchOrderStart: (state) => {
      state.loading = true;
    },
    fetchOrderSuccess: (state, action) => {
      state.order = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchOrderFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchOrderStart, fetchOrderSuccess, fetchOrderFailure } =
  orderSlice.actions;

export default orderSlice.reducer;
