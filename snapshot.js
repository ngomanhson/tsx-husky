import { render } from "@testing-library/react";
import Dashboard from "./src/app/Dashboard/page";

it("renders homepage unchanged", () => {
  const { container } = render(<Dashboard />);
  expect(container).toMatchSnapshot();
});
