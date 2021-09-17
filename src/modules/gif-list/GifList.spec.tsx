import { render } from "@testing-library/react";
import { GifList }from "./GifList";
import { mockGifPage } from '../../pages/GifPage.fixture';

describe("Loader", () => {
  it("should render without crashing with only mandatory props", () => {
      const mockGifData = {
          data: mockGifPage
      };
    const { container } = render(<GifList onLoadMore={jest.fn} gifList={mockGifData} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
