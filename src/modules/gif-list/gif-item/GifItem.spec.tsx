import { render } from "@testing-library/react";
import { GifItem }from "./GifItem";

describe("Loader", () => {
  it("should render without crashing", () => {
    const { container } = render(<GifItem />);
    expect(container).toMatchSnapshot();
  });
});
