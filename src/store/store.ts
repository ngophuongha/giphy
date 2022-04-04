import { configureStore } from "@reduxjs/toolkit";
import theme from "./theme/theme";
import language from "./language/language";

export const store = configureStore({
  reducer: {
    theme: theme,
    language: language,
  },
});

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
