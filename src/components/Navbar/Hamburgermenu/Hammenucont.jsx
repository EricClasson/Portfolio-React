import { Link } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { FaHome } from "react-icons/fa";

// Sida som visar hamburgermenu naven
const Hammenucont = ({ setToggle }) => {
  return (
    <div className="hamburger-content">
      <button
        onClick={() => setToggle(false)}
        className="btn btn-nav btns-toggle"
      >
        <FaHome />
        <Link to="/">Home </Link>
        {/* Props settoggle från parent, denna onclick gör så att när man klickat på en länk så stängs hamburgermenu diven */}
      </button>
      <button
        onClick={() => setToggle(false)}
        className="btn btn-nav btns-toggle "
      >
        <IoPersonSharp />
        <Link to="/About me">About me </Link>
        {/* Props settoggle från parent, denna onclick gör så att när man klickat på en länk så stängs hamburgermenu diven */}
      </button>

      <button
        onClick={() => setToggle(false)}
        className="btn btn-nav btns-toggle "
      >
        <FaLinkedin />
        <Link to="/Contact me">Contact me </Link>
        {/* Props settoggle från parent, denna onclick gör så att när man klickat på en länk så stängs hamburgermenu diven */}
      </button>

      <button
        onClick={() => setToggle(false)}
        className="btn btn-nav btns-toggle"
      >
        <LiaProjectDiagramSolid />
        <Link to="/projects">Projects </Link>
        {/* Props settoggle från parent, denna onclick gör så att när man klickat på en länk så stängs hamburgermenu diven */}
      </button>
    </div>
  );
};

export default Hammenucont;
