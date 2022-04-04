import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum LanguageType {
  EN = "en",
  FR = "fr",
}

export type LanguageState = {
  language: LanguageType;
};

const initialState: LanguageState = {
  language: LanguageType.EN,
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    languageChange: (state, action: PayloadAction<LanguageType>) => {
      state.language = action.payload;
    },
  },
});

export const { languageChange } = languageSlice.actions;

export default languageSlice.reducer;
