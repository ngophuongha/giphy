import { render } from "@testing-library/react";
import { GifFullscreen } from "./GifFullscreen";

describe("Gif Fullscreen", () => {
  it("should render without crashing", () => {
    const { container } = render(
      <GifFullscreen
        open={true}
        setShow={jest.fn}
        imageUrl="http://localhost:8000"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
