import "../components/Navbar/navbar.scss";

import Darkmode from "../components/Navbar/darkmode/Darkmode";
import Navbtns from "../components/Navbar/NAV/Navbtn";
import Pictureofme from "../components/Navbar/pictureofme-jsx/Pictureofme";
import Hamburgermenu from "../components/Navbar/Hamburgermenu/hamburgermenu";

//Navbar - Parent
const Navbar = () => {
  return (
    <div className="navbar-container">
      <Pictureofme />
      <div>
        <Navbtns />
      </div>
      <div className="hamburgernav-container">
        <Hamburgermenu />
        <Darkmode />
      </div>
    </div>
  );
};

export default Navbar;
