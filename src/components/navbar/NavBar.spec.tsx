import { render } from "@testing-library/react";
import { NavBar } from "./index";

describe("Navbar", () => {
  it("should render without crashing", () => {
    const { container } = render(<NavBar />);
    expect(container).toMatchSnapshot();
  });
});
