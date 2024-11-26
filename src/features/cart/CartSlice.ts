import { cartItems } from "@/features/cart/data/CartItems.ts";
import type { CartItem } from "@/features/types";
import { createSlice } from "@reduxjs/toolkit";

type CartState = {
  cartItems: CartItem[];
};

const initialState: CartState = {
  cartItems: cartItems,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    deleteItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => {
        return item.id === itemId;
      });
      if (cartItem) cartItem.quantity += 1;
    },
    decrease: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => {
        return item.id === itemId;
      });
      if (cartItem) cartItem.quantity -= 1;
    },
  },
});

export const { clearCart, deleteItem, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
