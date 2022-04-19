import languageReducer, { languageChange, LanguageType } from "./language";

describe("Language Reducer", () => {
  it("should change language", () =>
    expect(languageReducer(undefined, languageChange(LanguageType.EN))).toEqual(
      {
        language: LanguageType.EN,
      }
    ));
});
