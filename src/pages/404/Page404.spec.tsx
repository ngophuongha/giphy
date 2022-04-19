import { render } from "../../../test";
import { Page404 } from "./Page404";

describe("Page 404", () => {
  it("should match snapshot", () => {
    const { container } = render(<Page404 />);
    expect(container).toMatchSnapshot();
  });
});
