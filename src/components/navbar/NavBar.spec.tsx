import { render } from "../../../test";
import { NavBar } from "./index";

describe("Styled Navbar", () => {
  it("should match snapshot", () => {
    const { container } = render(<NavBar />);
    expect(container).toMatchSnapshot();
  });
});
