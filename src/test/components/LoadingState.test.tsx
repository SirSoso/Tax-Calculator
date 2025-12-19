import { render, screen } from "@testing-library/react";
import { LoadingState } from "../../components/LoadingState";

test("renders loading spinner and message", () => {
  render(<LoadingState message="Testing..." />);
  expect(screen.getByText(/testing/i)).toBeInTheDocument();
});
