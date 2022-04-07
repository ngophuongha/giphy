import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthState = {
  name: string;
  avatar?: string;
};

const initialState: AuthState = {
  name: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthState>) => {
      state.avatar = action.payload.avatar;
      state.name = action.payload.name;
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
