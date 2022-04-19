import { render } from "../../../test";
import { Loader, Suspender } from "./index";

describe("Loader", () => {
  it("should match snapshot", () => {
    const { container } = render(<Loader />);
    expect(container).toMatchSnapshot();
  });
});

describe("Suspender", () => {
  it("should match snapshot", () => {
    const { container } = render(<Suspender />);
    expect(container).toMatchSnapshot();
  });
});
