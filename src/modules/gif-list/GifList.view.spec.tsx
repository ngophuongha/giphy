import { render, waitFor, fireEvent } from "../../../test";

import * as GifService from "./service/Gifs.service";
import { GifListView } from "./GifList.view";
import { mockGifPage } from "./GifList.fixture";

describe("Gif List View", () => {
  const mockGetGifItems = jest.spyOn(GifService, "getGifItems");
  beforeEach(() => {
    jest.resetModules();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should match snapshot", async () => {
    mockGetGifItems.mockResolvedValue(mockGifPage);
    const { container } = render(<GifListView />);

    await waitFor(() => {
      expect(document.getElementsByClassName("lazyload-wrapper")).toHaveLength(
        mockGifPage.length
      );
    });
  });

  it("should load more item when scrolling down", async () => {
    mockGetGifItems.mockResolvedValue(mockGifPage);
    render(<GifListView />);
    await waitFor(() => {
      expect(document.getElementsByClassName("lazyload-wrapper")).toHaveLength(
        mockGifPage.length
      );
    });
    fireEvent.scroll(window, { target: { scrollY: 50 } });
    await waitFor(() => {
      expect(
        document.getElementsByClassName("lazyload-wrapper").length
      ).toBeGreaterThan(mockGifPage.length);
    });
  });

  it("should not show items when fetching fails", async () => {
    mockGetGifItems.mockRejectedValue("error");
    render(<GifListView />);
    await waitFor(() => {
      expect(document.getElementsByClassName("lazyload-wrapper")).toHaveLength(
        0
      );
    });
  });
});
