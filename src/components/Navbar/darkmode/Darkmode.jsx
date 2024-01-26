import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleTheme,
  selectDarkModeEnabled,
} from "../../../redux/theme/themeSlice.js";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
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
    <div onClick={() => changecolor()}>
      {/* när man klickar så används changecolor functionen  */}
      {!theme && <MdLightMode className="halfmoon-btn" />}
      {theme && <MdDarkMode className="halfmoon-btn" />}
    </div>
  );
};

export default Darkmode;
