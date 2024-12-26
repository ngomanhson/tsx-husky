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

// import '@testing-library/jest-dom';
// import { render, screen } from '@testing-library/react';
// import Dashboard from '../src/app/Dashboard/page';

// describe('Dashboard', () => {
//   it('renders a heading', () => {
//     render(<Dashboard />);
//     const heading = screen.getByRole('heading', { level: 1 });
//     expect(heading).toBeInTheDocument();
//   });

//   it('renders the correct heading text', () => {
//     render(<Dashboard />);
//     const heading = screen.getByRole('heading', { level: 1 });
//     expect(heading).toHaveTextContent('Dashboard');
//   });

//   it('renders a button to add new items', () => {
//     render(<Dashboard />);
//     const button = screen.getByRole('button', { name: /add new/i });
//     expect(button).toBeInTheDocument();
//   });

//   it('renders a table or list for displaying data', () => {
//     render(<Dashboard />);
//     const table = screen.getByRole('table');
//     expect(table).toBeInTheDocument();
//   });

//   it('shows a message when no data is available', () => {
//     render(<Dashboard />);
//     const noDataMessage = screen.getByText(/no data available/i);
//     expect(noDataMessage).toBeInTheDocument();
//   });

//   it('renders a navigation link to another page', () => {
//     render(<Dashboard />);
//     const link = screen.getByRole('link', { name: /settings/i });
//     expect(link).toBeInTheDocument();
//   });
// });
