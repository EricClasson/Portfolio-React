import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkModeEnabled: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkModeEnabled = !state.darkModeEnabled;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const selectDarkModeEnabled = (state) => state.theme.darkModeEnabled;
export default themeSlice.reducer;
