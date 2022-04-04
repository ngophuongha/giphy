import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum ThemeType {
  Light = "light",
  Dark = "dark",
}

export type ThemeState = {
  theme: ThemeType;
};

const initialState: ThemeState = {
  theme: ThemeType.Light,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeChange: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
    },
  },
});

export const { themeChange } = themeSlice.actions;

export default themeSlice.reducer;
