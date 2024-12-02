import { Header } from "@/components/Header";
import { renderWithProviders } from "@/testing/renderWithProviders";
import { screen } from "@testing-library/react";
import { useSelector } from "react-redux";
import { type Mock, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("react-redux", async (importOriginal) => {
  const actual = (await importOriginal()) as typeof import("react-redux");
  return {
    ...actual,
    useSelector: vi.fn(),
  };
});

beforeEach(() => {
  (useSelector as unknown as Mock).mockReturnValue(5);
});

describe("Header component", () => {
  it("renders the header with the correct title", () => {
    renderWithProviders(<Header />);
    expect(screen.getByText("React Redux")).toBeInTheDocument();
  });

  it("displays the shopping cart icon", () => {
    renderWithProviders(<Header />);
    expect(screen.getByLabelText("Goto Cart")).toBeInTheDocument();
  });

  it("shows the correct total quantity in the badge", () => {
    renderWithProviders(<Header />);
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("shows zero in the badge when total quantity is zero", () => {
    (useSelector as unknown as Mock).mockReturnValue(0);
    renderWithProviders(<Header />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
