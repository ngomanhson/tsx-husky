import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Dashboard from "../src/app/Dashboard/page";

describe("Dashboard", () => {
  it("renders a heading", () => {
    render(<Dashboard />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
