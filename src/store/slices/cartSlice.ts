import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  total: number;
};

const initialState: CartState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.total = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      state.total = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    adjustQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;

      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem && quantity > 0) {
        existingItem.quantity = quantity;
      } else if (existingItem && quantity === 0) {
        state.items = state.items.filter((item) => item.id !== id);
      }

      state.total = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, adjustQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
