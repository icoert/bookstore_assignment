import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlice";
import booksReducer from "./slices/bookSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    books: booksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
