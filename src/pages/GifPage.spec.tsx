import { render } from "@testing-library/react";
import { GifPage }from "./GifPage";

describe("Loader", () => {
  it("should render without crashing", () => {
    const { container } = render(<GifPage />);
    expect(container).toMatchSnapshot();
  });
});
