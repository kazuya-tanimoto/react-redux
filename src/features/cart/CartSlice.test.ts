import type { CartItem } from "@/features/types";
import { describe, expect, it } from "vitest";
import cartReducer, {
  clearCart,
  decrease,
  deleteItem,
  increase,
} from "./CartSlice";
import { cartItems } from "./data/CartItems";

describe("cartSlice", () => {
  const initialState = { cartItems: [...cartItems] };

  it("should handle clearCart", () => {
    const action = clearCart();
    const state = cartReducer(initialState, action);
    expect(state.cartItems).toEqual([]);
  });

  it("should handle deleteItem", () => {
    const itemIdToDelete = cartItems[0].id; // 既存アイテムのIDを使用
    const action = deleteItem(itemIdToDelete);
    const state = cartReducer(initialState, action);
    expect(state.cartItems).toHaveLength(cartItems.length - 1);
    expect(
      state.cartItems.find((item) => item.id === itemIdToDelete),
    ).toBeUndefined();
  });

  it("should handle increase", () => {
    const itemIdToIncrease = cartItems[0].id; // 既存アイテムのIDを使用
    const action = increase(itemIdToIncrease);
    const state = cartReducer(initialState, action);
    const updatedItem = state.cartItems.find(
      (item) => item.id === itemIdToIncrease,
    );
    expect(updatedItem?.quantity).toBe(cartItems[0].quantity + 1);
  });

  it("should handle decrease", () => {
    const itemIdToDecrease = cartItems[0].id; // 既存アイテムのIDを使用
    const action = decrease(itemIdToDecrease);
    const state = cartReducer(initialState, action);
    const updatedItem = state.cartItems.find(
      (item) => item.id === itemIdToDecrease,
    );
    expect(updatedItem?.quantity).toBe(cartItems[0].quantity - 1);
  });

  it("should not decrease quantity below 0", () => {
    const initialCartItems: CartItem[] = [
      {
        id: 2,
        name: "Test Item",
        url: "https://picsum.photos/id/27/250/150",
        quantity: 0,
        price: 100,
      },
    ];
    const stateWithZeroQuantity = { cartItems: initialCartItems };
    const action = decrease(initialCartItems[0].id);
    const state = cartReducer(stateWithZeroQuantity, action);
    expect(state.cartItems[0].quantity).toBe(0); // quantityは0のまま
  });
});
