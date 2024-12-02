import { CartItem } from "@/features/cart/components/CartItem";
import { useCartItem } from "@/features/cart/hooks/useCartItem";
import { ChakraProvider } from "@chakra-ui/react";
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

vi.mock("@/features/cart/hooks/useCartItem");

const mockUseCartItem = useCartItem as Mock;

describe("CartItem", () => {
  const mockHandleDelete = vi.fn();

  beforeEach(() => {
    mockUseCartItem.mockReturnValue({ handleDelete: mockHandleDelete });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders CartItem with correct details", () => {
    render(
      <ChakraProvider>
        <CartItem
          id={1}
          name="Test Item"
          price={1000}
          url="/test.jpg"
          quantity={2}
        />
      </ChakraProvider>,
    );

    expect(screen.getByText("Test Item")).toBeInTheDocument();
    expect(screen.getByText("1,000 円")).toBeInTheDocument();
    expect(screen.getByText("2,000 円")).toBeInTheDocument();
    expect(screen.getByAltText("Test Item")).toBeInTheDocument();
  });

  it("calls handleDelete when delete button is clicked", () => {
    render(
      <ChakraProvider>
        <CartItem
          id={1}
          name="Test Item"
          price={1000}
          url="/test.jpg"
          quantity={2}
        />
      </ChakraProvider>,
    );

    fireEvent.click(screen.getByText("削除"));
    expect(mockHandleDelete).toHaveBeenCalled();
  });

  it("displays correct subtotal for different quantities", () => {
    render(
      <ChakraProvider>
        <CartItem
          id={1}
          name="Test Item"
          price={1000}
          url="/test.jpg"
          quantity={3}
        />
      </ChakraProvider>,
    );

    expect(screen.getByText("3,000 円")).toBeInTheDocument();
  });

  it("displays correct price format for large numbers", () => {
    render(
      <ChakraProvider>
        <CartItem
          id={1}
          name="Expensive Item"
          price={10000}
          url="/expensive.jpg"
          quantity={100}
        />
      </ChakraProvider>,
    );

    expect(screen.getByText("1,000,000 円")).toBeInTheDocument();
  });
});
