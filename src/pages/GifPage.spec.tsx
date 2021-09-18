import {
  act,
  render,
  waitFor,
  screen,
  fireEvent,
} from "@testing-library/react";
import { GifPage } from "./GifPage";
import { getGifItems } from "../modules/gif-list/service/Gifs.service";
import { mockGifPage } from "./GifPage.fixture";

jest.mock("../modules/gif-list/service/Gifs.service");
const mockGetGifs = getGifItems as jest.MockedFunction<typeof getGifItems>;

describe("Loader", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should render without crashing", () => {
    act(() => {
      const { container } = render(<GifPage />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it("should render 2 items initially", async () => {
    mockGetGifs.mockResolvedValueOnce({ data: mockGifPage });
    act(() => {
      render(<GifPage />);
    });
    await waitFor(() => {
      const list = screen.getByTestId("gif-list");
      expect(list.children).toHaveLength(2);
    });
  });

  it("should fetch API again when scrolling", async () => {
    mockGetGifs.mockResolvedValueOnce({ data: mockGifPage });
    act(() => {
      render(<GifPage />);
      fireEvent.scroll(window, { target: { scrollY: 101 } });
    });
    await waitFor(() => {
      expect(mockGetGifs).toHaveBeenCalledTimes(2);
    });
  });

  it("should handle failed fetch API", async () => {
    mockGetGifs.mockRejectedValueOnce(new Error("error occurred"));
    act(() => {
      render(<GifPage />);
    });
    await waitFor(() => {
      const list = screen.getByTestId("gif-list");
      expect(list.children).toHaveLength(0);
    });
  });
});
