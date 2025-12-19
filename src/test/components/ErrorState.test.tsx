import { render, screen, fireEvent } from "@testing-library/react";
import { ErrorState } from "../../components/ErrorState";

describe("ErrorState", () => {
  it("renders error message", () => {
    render(<ErrorState message="Something failed" />);

    expect(screen.getByText(/something failed/i)).toBeInTheDocument();
  });

  it("calls onRetry when retry button is clicked", () => {
    const onRetry = jest.fn();

    render(<ErrorState message="Network error" onRetry={onRetry} />);

    fireEvent.click(screen.getByRole("button", { name: /try again/i }));

    expect(onRetry).toHaveBeenCalledTimes(1);
  });
});
