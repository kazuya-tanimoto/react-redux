import type { RootState } from "@/store.ts";
import { createSelector } from "@reduxjs/toolkit";

export const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector([selectCart], (cart) => {
  return cart.cartItems;
});

export const selectTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce(
      (totalPrice, item) => totalPrice + item.price * item.quantity,
      0,
    );
  },
);

export const selectTotalQuantity = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce(
      (totalQuantity, item) => totalQuantity + item.quantity,
      0,
    );
  },
);
