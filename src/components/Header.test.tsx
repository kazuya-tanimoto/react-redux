import { Header } from "@/components/Header";
import { renderWithProviders } from "@/testing/renderWithProviders";
import { describe, expect, it } from "vitest";

describe("Header component", () => {
  it("renders the header with the correct title", () => {
    const { getByText } = renderWithProviders(<Header />);
    expect(getByText("React Redux")).toBeInTheDocument();
  });

  // it("displays the shopping cart icon", () => {
  //   const { getByTestId } = renderWithProviders(<Header />);
  //   expect(getByTestId("FaShoppingCart")).toBeInTheDocument();
  // });
  //
  // it("shows the correct total quantity in the badge", () => {
  //   const { getByText } = renderWithProviders(<Header />);
  //   expect(getByText("5")).toBeInTheDocument();
  // });
  //
  // it("shows zero in the badge when total quantity is zero", () => {
  //   const { getByText } = renderWithProviders(<Header />);
  //   expect(getByText("0")).toBeInTheDocument();
  // });
  //
  // it("shows the badge with the correct color scheme", () => {
  //   const { getByText } = renderWithProviders(<Header />);
  //   const badge = getByText("3");
  //   expect(badge).toHaveClass("chakra-badge");
  //   expect(badge).toHaveStyle("background-color: red");
  // });
});
