import { useState } from "react";
const Darkmode = () => {
  const [darkmode, setDarkmode] = useState(false);
  const color = darkmode ? "light" : "dark";

  const changecolor = () => {
    setDarkmode(!darkmode);
    document.documentElement.setAttribute(
      "data-theme",
      darkmode ? "dark" : "light"
    );
  };

  return (
    <div onClick={() => changecolor()} className="halfmoon-container">
      {darkmode && <i class="fa-solid fa-toggle-on "></i>}
      {!darkmode && <i class="fa-solid fa-toggle-off"></i>}
    </div>
  );
};

export default Darkmode;
