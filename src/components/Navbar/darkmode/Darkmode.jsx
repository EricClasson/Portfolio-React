import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleTheme,
  selectDarkModeEnabled,
} from "../../../redux/theme/themeSlice.js";

// // function som gör att det ändras tema/färg när jag klickar på knappen.
const Darkmode = () => {
  // get theme from store
  const theme = useSelector(selectDarkModeEnabled);
  // initialize dispatch variable
  const dispatch = useDispatch();

  const changecolor = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme ? "dark" : "light"
    );
  }, [theme]);

  return (
    <div onClick={() => changecolor()} className="halfmoon-container">
      {/* när man klickar så används changecolor functionen  */}
      {theme && <i class="fa-solid fa-toggle-on "></i>}
      {!theme && <i class="fa-solid fa-toggle-off"></i>}
    </div>
  );
};

export default Darkmode;
