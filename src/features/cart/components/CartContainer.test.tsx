import { CartContainer } from "@/features/cart/components/CartContainer";
import { useCart } from "@/features/cart/hooks/useCart";
import { renderWithProviders } from "@/testing/renderWithProviders";
import { fireEvent, screen } from "@testing-library/react";
import {
  type Mock,
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

vi.mock("@/features/cart/hooks/useCart");

const mockUseCart = useCart as Mock;

describe("CartContainer", () => {
  const mockHandleClearCart = vi.fn();

  beforeEach(() => {
    mockUseCart.mockReturnValue({
      handleClearCart: mockHandleClearCart,
      cartItems: [
        {
          id: 1,
          name: "Test Item",
          price: 1000,
          url: "/test.jpg",
          quantity: 2,
        },
        {
          id: 2,
          name: "Test Item 2",
          price: 3000,
          url: "/test.jpg",
          quantity: 2,
        },
      ],
      totalPrice: 8000,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders CartContainer with correct details", () => {
    renderWithProviders(<CartContainer />);

    expect(screen.getByText("Cart")).toBeInTheDocument();
    expect(screen.getByText("Test Item")).toBeInTheDocument();
    expect(screen.getByText("1,000 円")).toBeInTheDocument();
    expect(screen.getByText("2,000 円")).toBeInTheDocument();
    expect(screen.getByText("Test Item 2")).toBeInTheDocument();
    expect(screen.getByText("3,000 円")).toBeInTheDocument();
    expect(screen.getByText("6,000 円")).toBeInTheDocument();
    expect(screen.getByText("合計金額")).toBeInTheDocument();
    expect(screen.getByText("8,000 円")).toBeInTheDocument();
  });

  it("displays message when cart is empty", () => {
    mockUseCart.mockReturnValue({
      handleClearCart: mockHandleClearCart,
      cartItems: [],
      totalPrice: 0,
    });

    renderWithProviders(<CartContainer />);
    expect(screen.getByText("カートに商品がありません")).toBeInTheDocument();
  });

  it("calls handleClearCart when clear button is clicked", () => {
    renderWithProviders(<CartContainer />);

    fireEvent.click(screen.getByText("全削除"));
    expect(mockHandleClearCart).toHaveBeenCalled();
  });
});
