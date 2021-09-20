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
        url: `${
          apiConstants.GET_20_ITEMS_PER_OFFSET_API_ENDPOINT
        }&offset=${20}`,
      });
    } catch (error) {
      errorMsg = "Something went wrong";
    }
    expect(errorMsg).toEqual("");
  });
  it("should handle failed API fetching", async () => {
    let errorMsg = "";
    try {
      await api.default({ url: "http://localhost:8000/undefined" });
    } catch (error) {
      errorMsg = "Something went wrong";
    }
    expect(console.error).toHaveBeenCalled();
  });
  it("should handle failed API fetching", async () => {
    let errorMsg = "";
    await api
      .default({ url: "http://localhost:8000/undefined" })
      .then(() => {
        errorMsg = "No error";
      })
      .catch(() => {
        errorMsg = "Yes error";
      });

    expect(console.error).toHaveBeenCalled();
  });
});
