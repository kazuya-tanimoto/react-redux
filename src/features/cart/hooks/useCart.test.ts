import { clearCart } from "@/features/cart/CartSlice.ts";
import { useCart } from "@/features/cart/hooks/useCart";
import { useDispatch, useSelector } from "react-redux";
import { type Mock, describe, expect, it, vi } from "vitest";
import { selectCartItems, selectTotalPrice } from "../selectors";

vi.mock("react-redux", () => ({
  useDispatch: vi.fn(),
  useSelector: vi.fn(),
}));

describe("useCart", () => {
  it("should return cart items and total price from selectors", () => {
    const mockCartItems = [{ id: 1, name: "item1", quantity: 2 }];
    const mockTotalPrice = 100;
    (useSelector as unknown as Mock).mockImplementation((selector) => {
      if (selector === selectCartItems) return mockCartItems;
      if (selector === selectTotalPrice) return mockTotalPrice;
    });

    const { cartItems, totalPrice } = useCart();

    expect(cartItems).toEqual(mockCartItems);
    expect(totalPrice).toEqual(mockTotalPrice);
  });

  it("should dispatch clearCart action when handleClearCart is called", () => {
    const dispatch = vi.fn();
    (useDispatch as unknown as Mock).mockReturnValue(dispatch);
    const { handleClearCart } = useCart();

    handleClearCart();

    expect(dispatch).toHaveBeenCalledWith(clearCart());
  });
});
