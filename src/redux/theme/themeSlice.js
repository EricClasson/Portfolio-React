import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  // setting theme to be false
  name: "theme",
  initialState: {
    darkModeEnabled: false,
  },
  reducers: {
    // making a reducer that should toogle between darkmodeEnabled
    toggleTheme: (state) => {
      state.darkModeEnabled = !state.darkModeEnabled;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const selectDarkModeEnabled = (state) => state.theme.darkModeEnabled;
export default themeSlice.reducer;
