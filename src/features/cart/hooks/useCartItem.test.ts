import { decrease, deleteItem, increase } from "@/features/cart/CartSlice.ts";
import { useCartItem } from "@/features/cart/hooks/useCartItem";
import { useDispatch } from "react-redux";
import { type Mock, describe, expect, it, vi } from "vitest";

vi.mock("react-redux", () => ({
  useDispatch: vi.fn(),
}));

describe("useCartItem", () => {
  it("should dispatch increase action when handleIncrease is called", () => {
    const dispatch = vi.fn();
    (useDispatch as unknown as Mock).mockReturnValue(dispatch);
    const { handleIncrease } = useCartItem(1, "item1", 1);

    handleIncrease();

    expect(dispatch).toHaveBeenCalledWith(increase(1));
  });

  it("should dispatch decrease action when handleDecrease is called and quantity is greater than 1", () => {
    const dispatch = vi.fn();
    (useDispatch as unknown as Mock).mockReturnValue(dispatch);
    const { handleDecrease } = useCartItem(1, "item1", 2);

    handleDecrease();

    expect(dispatch).toHaveBeenCalledWith(decrease(1));
  });

  it("should dispatch deleteItem action when handleDecrease is called and quantity is 1", () => {
    const dispatch = vi.fn();
    (useDispatch as unknown as Mock).mockReturnValue(dispatch);
    const { handleDecrease } = useCartItem(1, "item1", 1);

    handleDecrease();

    expect(dispatch).toHaveBeenCalledWith(deleteItem(1));
  });

  it("should dispatch deleteItem action when handleDelete is called", () => {
    const dispatch = vi.fn();
    (useDispatch as unknown as Mock).mockReturnValue(dispatch);
    const { handleDelete } = useCartItem(1, "item1", 1);

    handleDelete();

    expect(dispatch).toHaveBeenCalledWith(deleteItem(1));
  });

  it("should return correct decreaseIconAriaLabel when quantity is greater than 1", () => {
    const { decreaseIconAriaLabel } = useCartItem(1, "item1", 2);

    expect(decreaseIconAriaLabel).toBe("decrease item1");
  });

  it("should return correct decreaseIconAriaLabel when quantity is 1", () => {
    const { decreaseIconAriaLabel } = useCartItem(1, "item1", 1);

    expect(decreaseIconAriaLabel).toBe("delete item1");
  });
});
