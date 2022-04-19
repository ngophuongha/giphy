import authReducer, { setAuth } from "./auth";

describe("Auth Reducer", () => {
  it("should change auth information", () =>
    expect(
      authReducer(undefined, setAuth({ name: "Ha Ngo", avatar: "" }))
    ).toEqual({
      name: "Ha Ngo",
      avatar: "",
    }));
});
