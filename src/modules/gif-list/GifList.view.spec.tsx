import { render } from "@testing-library/react";
import { GifList } from "./GifList";
import { mockGifPage } from "./GifList.fixture";

describe("Gif List View", () => {
  it("should render without crashing with only mandatory props", () => {
    const { container } = render(
      <GifList onLoadMore={jest.fn} gifList={mockGifPage} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
