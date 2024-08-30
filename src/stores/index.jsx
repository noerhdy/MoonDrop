import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart";
import toastReducer from "./Toast";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    toast: toastReducer,
    // user
  },
});
