import { render } from "../../../test";
import { Loader } from "./index";

describe("Loader", () => {
  it("should match snapshot", () => {
    const { container } = render(<Loader />);
    expect(container).toMatchSnapshot();
  });
});
