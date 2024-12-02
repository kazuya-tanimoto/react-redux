import { Float } from "@/components/Float";
import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Float", () => {
  it("renders children correctly", () => {
    render(
      <ChakraProvider>
        <Float>Test Content</Float>
      </ChakraProvider>,
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});
