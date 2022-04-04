import { render, screen } from "../../../../test";
import userEvent from "@testing-library/user-event";

import { GifFullscreen } from "./GifFullscreen";

describe("Gif Fullscreen", () => {
  const imageUrl = "http://localhost:8000";
  const mockSetShow = jest.fn();
  const props = {
    open: true,
    setShow: mockSetShow,
    imageUrl: imageUrl,
  };
  it("should match snapshot", () => {
    const { container } = render(<GifFullscreen {...props} />);
    expect(container).toMatchSnapshot();
  });

  it("should have alt", () => {
    const imageAlt = "recording academy";
    render(<GifFullscreen {...props} imageAlt={imageAlt} />);
    const modalComponent = screen.getByAltText(imageAlt);

    expect(modalComponent).toBeInTheDocument();
    userEvent.type(modalComponent, "{esc}");
    expect(mockSetShow).toHaveBeenCalled();
  });
});
