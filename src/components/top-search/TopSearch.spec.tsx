import { render } from "../../../test";
import { TopSearch } from "./index";

describe("Top Search", () => {
  it("should match snapshot", () => {
    const { container } = render(<TopSearch />);
    expect(container).toMatchSnapshot();
  });
});
