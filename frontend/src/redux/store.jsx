import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cartSlice";
import userReducer from "./user/userSlice";
import productReducer from "./product/productSlice";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  product: productReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  // blacklist: ["product"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
