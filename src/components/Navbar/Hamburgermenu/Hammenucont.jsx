import { Link } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosContacts } from "react-icons/io";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { FaHome } from "react-icons/fa";

// Sida som visar hamburgermenu naven
const Hammenucont = ({ setToggle }) => {
  return (
    <div className="hamburger-content">
      <menu className="hamburger-menu">
        <li onClick={() => setToggle(false)} className="btn-nav-toggle">
          <FaHome />
          <Link to="/">Home </Link>
          {/* Props settoggle från parent, denna onclick gör så att när man klickat på en länk så stängs hamburgermenu diven */}
        </li>
        <li onClick={() => setToggle(false)} className="btn-nav-toggle">
          <IoPersonSharp />
          <Link to="/About me">About me </Link>
          {/* Props settoggle från parent, denna onclick gör så att när man klickat på en länk så stängs hamburgermenu diven */}
        </li>
        <li onClick={() => setToggle(false)} className="btn-nav-toggle">
          <IoIosContacts />
          <Link to="/Contact me">Contact me </Link>
          {/* Props settoggle från parent, denna onclick gör så att när man klickat på en länk så stängs hamburgermenu diven */}
        </li>
        <li onClick={() => setToggle(false)} className="btn-nav-toggle">
          <LiaProjectDiagramSolid />
          <Link to="/projects">Projects </Link>
          {/* Props settoggle från parent, denna onclick gör så att när man klickat på en länk så stängs hamburgermenu diven */}
        </li>
      </menu>
    </div>
  );
};

export default Hammenucont;
