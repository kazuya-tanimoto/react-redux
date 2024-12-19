import { act, screen } from "@testing-library/react";
import type React from "react";
import { describe, expect, it, vi } from "vitest";
import { renderApp } from "./main";

// Mocking DevSupport if necessary
vi.mock("@react-buddy/ide-toolbox", () => ({
  DevSupport: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe("main.tsx", () => {
  it("render App function renders the App correctly", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
      renderApp(container);
    });

    // "React Redux" と "Cart" テキストが表示されていることを確認
    expect(screen.getByText("React Redux")).toBeInTheDocument();
    expect(screen.getByText("Cart")).toBeInTheDocument();

    document.body.removeChild(container);
  });

  it("Don't crash if the root element is not present", () => {
    // console.error をモックして、エラーログが出力されないようにする
    const consoleError = vi
      .spyOn(console, "error")
      .mockImplementation(() => undefined);

    const nonExistentContainer = document.getElementById("non-existent-root");
    expect(nonExistentContainer).toBeNull();

    // renderApp を呼び出してもエラーが発生しないことを確認
    expect(() => renderApp(nonExistentContainer)).not.toThrow();

    consoleError.mockRestore();
  });
});
