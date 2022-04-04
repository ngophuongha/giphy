import * as api from "./api.wrapper";
import * as apiConstants from "./api.constants";

describe("API Wrapper", () => {
  beforeEach(() => {
    console.log = jest.fn();
    console.error = jest.fn();
  });

  it("should handle successful API fetching", async () => {
    let errorMsg = "";
    let response;
    try {
      response = await api.default({
        url: `${apiConstants.TRENDING_API_ENDPOINT}`,
      });
    } catch (error) {
      errorMsg = "Something went wrong";
    }
    expect(errorMsg).toEqual("");
  });
  it("should handle failed API fetching", async () => {
    try {
      await api.default({ url: "http://localhost:8000/undefined" });
    } catch (error) {}
    expect(console.error).toHaveBeenCalled();
  });
  it("should handle failed API fetching", async () => {
    await api
      .default({ url: "http://localhost:8000/undefined" })
      .then(() => {})
      .catch(() => {});

    expect(console.error).toHaveBeenCalled();
  });
});
