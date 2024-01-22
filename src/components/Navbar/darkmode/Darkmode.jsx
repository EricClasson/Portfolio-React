import { useState } from "react";

// function som gör att det ändras tema/färg när jag klickar på knappen.
const Darkmode = () => {
  const [darkmode, setDarkmode] = useState(false);
  const color = darkmode ? "light" : "dark"; // kollar om darkmode är light så byts det till dark, och då visverse

  const changecolor = () => {
    setDarkmode(!darkmode);
    document.documentElement.setAttribute(
      "data-theme",
      darkmode ? "dark" : "light"
    );
  };

  return (
    <div onClick={() => changecolor()} className="halfmoon-container">
      {/* när man klickar så används changecolor functionen  */}
      {darkmode && <i class="fa-solid fa-toggle-on "></i>}
      {!darkmode && <i class="fa-solid fa-toggle-off"></i>}
    </div>
  );
};

export default Darkmode;
