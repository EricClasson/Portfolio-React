import { configureStore } from "@reduxjs/toolkit";
import theme from "./theme/themeSlice";
//global store that holds theme
export default configureStore({
  reducer: {
    theme,
  },
});
