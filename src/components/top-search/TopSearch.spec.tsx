import { render } from "@testing-library/react";
import { TopSearch } from "./index";

describe("Top Search", () => {
  it("should render without crashing", () => {
    const { container } = render(<TopSearch />);
    expect(container).toMatchSnapshot();
  });
});
