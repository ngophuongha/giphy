import themeReducer, { themeChange, ThemeType } from "./theme";

describe("Theme Reducer", () => {
  it("should change theme", () =>
    expect(themeReducer(undefined, themeChange(ThemeType.Dark))).toEqual({
      theme: ThemeType.Dark,
    }));
});
