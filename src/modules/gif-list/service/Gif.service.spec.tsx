import { getGifItems } from "./Gifs.service";
import { mockGifPage } from "../GifList.fixture";
import * as api from "../../../api/api.wrapper";

jest.mock("../../../api/api.wrapper");

describe("Get Gif Service", () => {
  const requestSpyFn = jest.spyOn(api, "default");
  afterEach(() => {
    requestSpyFn.mockReset();
  });

  it("should return data when API fetching succeeds", async () => {
    requestSpyFn.mockResolvedValueOnce({
      data: mockGifPage,
    });
    const res = await getGifItems(20);
    expect(res).toEqual({ data: mockGifPage });
  });

  it("should return Error when API fetching fails", async () => {
    requestSpyFn.mockRejectedValueOnce(new Error("Something went wrong"));
    const res = await getGifItems(20);
    expect(res).toEqual([]);
  });
});
