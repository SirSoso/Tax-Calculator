import { render, screen, fireEvent } from "@testing-library/react";
import { TaxForm } from "../../components/TaxForm";

describe("TaxForm", () => {
  it("calls onSubmit with values when submitted", () => {
    const mockSubmit = jest.fn();
    render(<TaxForm onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByLabelText(/annual income/i), {
      target: { value: "50000" },
    });
    fireEvent.click(screen.getByRole("button", { name: /calculate/i }));

    expect(mockSubmit).toHaveBeenCalledWith(50000, expect.any(Number));
  });

  it("disables button and shows loading text when loading is true", () => {
    const onSubmit = jest.fn();

    render(<TaxForm onSubmit={onSubmit} loading />);

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
    expect(button).toHaveTextContent(/calculating/i);

    fireEvent.click(button);
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
