import { cartItems } from "@/features/cart/data/CartItems.ts";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: cartItems,
  amount: 5,
  total: 18500,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
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
      if (cartItem) cartItem.amount += 1;
    },
    decrease: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => {
        return item.id === itemId;
      });
      if (cartItem) cartItem.amount -= 1;
    },
    calculate: (state, action) => {
      const cartItems = action.payload;

      let total = 0;
      let amount = 0;

      for (let i = 0; i < cartItems.length; i++) {
        total += cartItems[i].price * cartItems[i].amount;
        amount += cartItems[i].amount;
      }

      state.total = total;
      state.amount = amount;
    },
  },
});

export const { clearCart, deleteItem, increase, decrease, calculate } =
  cartSlice.actions;
export default cartSlice.reducer;
