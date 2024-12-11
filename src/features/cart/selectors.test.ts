import {
  selectCart,
  selectCartItems,
  selectTotalPrice,
  selectTotalQuantity,
} from "@/features/cart/selectors";
import type { RootState } from "@/store.ts";
import { describe, expect, it } from "vitest";

describe("Cart Selectors", () => {
  const state: RootState = {
    cart: {
      cartItems: [
        {
          id: 1,
          name: "Item 1",
          price: 100,
          url: "https://picsum.photos/id/27/250/150",
          quantity: 2,
        },
        {
          id: 2,
          name: "Item 2",
          price: 200,
          url: "https://picsum.photos/id/27/250/150",
          quantity: 1,
        },
      ],
    },
  };

  it("selectCart returns the cart state", () => {
    const result = selectCart(state);
    expect(result).toEqual(state.cart);
  });

  it("selectCartItems returns the cart items", () => {
    const result = selectCartItems(state);
    expect(result).toEqual(state.cart.cartItems);
  });

  it("selectTotalPrice returns the total price of items in the cart", () => {
    const result = selectTotalPrice(state);
    expect(result).toBe(400);
  });

  it("selectTotalQuantity returns the total quantity of items in the cart", () => {
    const result = selectTotalQuantity(state);
    expect(result).toBe(3);
  });

  it("selectTotalPrice returns 0 when cart is empty", () => {
    const emptyState: RootState = { cart: { cartItems: [] } };
    const result = selectTotalPrice(emptyState);
    expect(result).toBe(0);
  });

  it("selectTotalQuantity returns 0 when cart is empty", () => {
    const emptyState: RootState = { cart: { cartItems: [] } };
    const result = selectTotalQuantity(emptyState);
    expect(result).toBe(0);
  });
});
