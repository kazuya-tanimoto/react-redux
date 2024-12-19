import App from "@/App";
import { renderWithProviders } from "@/testing/renderWithProviders";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("App", () => {
  it("should render Header component", () => {
    renderWithProviders(<App />);
    expect(screen.getByText("React Redux")).toBeInTheDocument();
  });

  it("should render CartContainer component", () => {
    renderWithProviders(<App />);
    expect(screen.getByText("Cart")).toBeInTheDocument();
  });
});
