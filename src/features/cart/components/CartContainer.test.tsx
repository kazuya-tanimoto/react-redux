import { CartContainer } from "@/features/cart/components/CartContainer";
import { useCart } from "@/features/cart/hooks/useCart";
import { renderWithProviders } from "@/testing/renderWithProviders";
import { screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
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

  it("opens confirm modal when clear button is clicked", async () => {
    renderWithProviders(<CartContainer />);

    await userEvent.click(screen.getByText("全削除"));
    await waitFor(() => expect(screen.queryByText("削除確認")).toBeVisible());
  });

  it("closes confirm modal when cancel button is clicked", async () => {
    renderWithProviders(<CartContainer />);

    await userEvent.click(screen.getByText("全削除"));
    await userEvent.click(screen.getByText("Cancel"));
    await waitFor(() =>
      expect(screen.queryByText("削除確認")).not.toBeVisible(),
    );
  });

  it("clears cart when confirm button in modal is clicked", async () => {
    renderWithProviders(<CartContainer />);

    await userEvent.click(screen.getByText("全削除"));
    await userEvent.click(screen.getByText("OK"));
    expect(mockHandleClearCart).toHaveBeenCalled();
  });
});
