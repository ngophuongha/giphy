import { render } from "@testing-library/react";
import { NavBar }from "./index";

describe("Loader", () => {
  it("should render without crashing", () => {
    const { container } = render(<NavBar />);
    expect(container).toMatchSnapshot();
  });
});
