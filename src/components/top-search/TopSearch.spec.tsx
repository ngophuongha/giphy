import { render } from "@testing-library/react";
import { TopSearch } from "./index";

describe("Loader", () => {
  it("should render without crashing", () => {
    const { container } = render(<TopSearch />);
    expect(container).toMatchSnapshot();
  });
});
