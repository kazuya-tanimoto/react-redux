import { QuantityControl } from "@/features/cart/components/QuantityControl";
import { useCartItem } from "@/features/cart/hooks/useCartItem";
import { fireEvent, render, screen } from "@testing-library/react";
import {
  type Mock,
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import "@testing-library/jest-dom";

vi.mock("@/features/cart/hooks/useCartItem");

describe("QuantityControl", () => {
  const mockHandleIncrease = vi.fn();
  const mockHandleDecrease = vi.fn();

  beforeEach(() => {
    (useCartItem as Mock).mockReturnValue({
      handleIncrease: mockHandleIncrease,
      handleDecrease: mockHandleDecrease,
      decreaseIconAriaLabel: "decrease Test Item",
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the component with initial quantity", () => {
    render(<QuantityControl id={1} quantity={2} name="Test Item" />);
    expect(screen.getByText("数量")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("calls handleIncrease when increase button is clicked", () => {
    render(<QuantityControl id={1} quantity={2} name="Test Item" />);
    fireEvent.click(screen.getByLabelText("increase Test Item"));
    expect(mockHandleIncrease).toHaveBeenCalled();
  });

  it("calls handleDecrease when decrease button is clicked", () => {
    render(<QuantityControl id={1} quantity={2} name="Test Item" />);
    fireEvent.click(screen.getByLabelText("decrease Test Item"));
    expect(mockHandleDecrease).toHaveBeenCalled();
  });

  it("renders trash icon when quantity is 1", () => {
    (useCartItem as Mock).mockReturnValue({
      handleIncrease: mockHandleIncrease,
      handleDecrease: mockHandleDecrease,
      decreaseIconAriaLabel: "delete Test Item",
    });

    render(<QuantityControl id={1} quantity={1} name="Test Item" />);
    const button = screen.getByLabelText("delete Test Item");
    expect(button).toBeInTheDocument();
    expect(button.querySelector("svg")).toBeInTheDocument();
  });

  it("renders minus icon when quantity is greater than 1", () => {
    render(<QuantityControl id={1} quantity={2} name="Test Item" />);
    const button = screen.getByLabelText("decrease Test Item");
    expect(button).toBeInTheDocument();
    expect(button.querySelector("svg")).toBeInTheDocument();
  });
});
