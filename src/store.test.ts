import cartReducer from "@/features/cart/CartSlice";
import { store } from "@/store";
import { configureStore } from "@reduxjs/toolkit";
import { describe, expect, it } from "vitest";

describe("store", () => {
  it("should have cart reducer", () => {
    const state = store.getState();
    expect(state.cart).toBeDefined();
  });

  it("should use cartReducer for cart slice", () => {
    const testStore = configureStore({
      reducer: {
        cart: cartReducer,
      },
    });
    const state = testStore.getState();
    expect(state.cart).toEqual(store.getState().cart);
  });
});
