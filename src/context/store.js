import { configureStore, createSlice } from "@reduxjs/toolkit";
import { api } from "./api";
import wishlistSlice from './wishlistSlice'
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  wishlist: wishlistSlice,
  cart: createSlice,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
});