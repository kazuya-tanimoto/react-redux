import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it, vi } from "vitest";
import { ConfirmModal } from "./ConfirmModal";

const mockFunction = vi.fn();

it("renders modal with title and children", () => {
  render(
    <ConfirmModal
      title="Test Title"
      isOpen={true}
      onClose={() => {
        /* Do nothing */
      }}
      onConfirm={mockFunction}
    >
      <p>Test Content</p>
    </ConfirmModal>,
  );

  expect(screen.getByText("Test Title")).toBeInTheDocument();
  expect(screen.getByText("Test Content")).toBeInTheDocument();
});

it("calls onClose when cancel button is clicked", async () => {
  const onClose = vi.fn();
  render(
    <ConfirmModal
      title="Test Title"
      isOpen={true}
      onClose={onClose}
      onConfirm={mockFunction}
    >
      <p>Test Content</p>
    </ConfirmModal>,
  );

  await userEvent.click(screen.getByText("Cancel"));
  expect(onClose).toHaveBeenCalledTimes(1);
});

it("calls onConfirm when OK button is clicked", async () => {
  const onConfirm = vi.fn();
  render(
    <ConfirmModal
      title="Test Title"
      isOpen={true}
      onClose={mockFunction}
      onConfirm={onConfirm}
    >
      <p>Test Content</p>
    </ConfirmModal>,
  );

  await userEvent.click(screen.getByText("OK"));
  expect(onConfirm).toHaveBeenCalledTimes(1);
});

it("does not render modal when isOpen is false", () => {
  render(
    <ConfirmModal
      title="Test Title"
      isOpen={false}
      onClose={mockFunction}
      onConfirm={mockFunction}
    >
      <p>Test Content</p>
    </ConfirmModal>,
  );

  expect(screen.queryByText("Test Title")).not.toBeInTheDocument();
  expect(screen.queryByText("Test Content")).not.toBeInTheDocument();
});
