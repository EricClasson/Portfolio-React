import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleTheme,
  selectDarkModeEnabled,
} from "../../../redux/theme/themeSlice.js";

const Darkmode = () => {
  // get theme from store
  const theme = useSelector(selectDarkModeEnabled);
  // initialize dispatch variable
  const dispatch = useDispatch();

  // every time time the button is clicked theme updates
  const changecolor = () => {
    dispatch(toggleTheme());
  };
  // getting the attributes and useing the theme to toogle between them
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme ? "dark" : "light"
    );
  }, [theme]);

  return (
    <div onClick={() => changecolor()} className="halfmoon-container">
      {/* när man klickar så används changecolor functionen  */}
      {!theme && <i class="fa-solid fa-toggle-on "></i>}
      {theme && <i class="fa-solid fa-toggle-off"></i>}
    </div>
  );
};

export default Darkmode;
