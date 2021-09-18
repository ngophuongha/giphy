import { getGifItems } from "./Gifs.service";
import { mockGifPage } from "../../../pages/GifPage.fixture";

jest.mock("./Gifs.service");
jest.mock("axios");
const mockGetGifs = getGifItems as jest.MockedFunction<typeof getGifItems>;

describe("Get Gif Service", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should return data when API call is successful", () => {
    const mockService = mockGetGifs.mockResolvedValueOnce({
      data: mockGifPage,
    });
    expect(mockService).toEqual({ data: mockGifPage });
  });
});
