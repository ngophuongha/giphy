import { screen, render, waitFor } from "../../../test";

import { GifList } from "./GifList";
import { mockGifPage } from "./GifList.fixture";

describe("Gif List", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    jest.resetModules();
  });
  it("should match snapshot", async () => {
    const { container } = render(
      <GifList onLoadMore={jest.fn} gifList={mockGifPage} />
    );
    expect(container).toMatchSnapshot();
    await waitFor(() =>
      expect(
        document.getElementsByClassName("lazyload-wrapper")[0]
      ).toBeInTheDocument()
    );
  });

  it("should not show end message when having more items to show", async () => {
    const { container } = render(
      <GifList onLoadMore={jest.fn} gifList={[]} hasMoreItems={true} />
    );
    expect(container).toMatchSnapshot();
    await waitFor(() => expect(screen.queryByText(/all/i)).toBeNull());
  });
});
