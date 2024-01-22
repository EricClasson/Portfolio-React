import { Link } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { LiaProjectDiagramSolid } from "react-icons/lia";
const Navbtns = () => {
  return (
    <div className="navbar-Btn-container">
      <div>
        <button className="btn btn-nav Aboutme">
          <IoPersonSharp />
          <Link to="/About me">About me </Link>
          {/* onclick länk till about me sidan */}
        </button>
      </div>
      <div>
        <button className="btn btn-nav contact">
          <FaLinkedin />
          <Link to="/Contact me">Contact me </Link>
          {/* onclick länk till contact me sidan */}
        </button>
      </div>
      <div>
        <button className="btn btn-nav work">
          <LiaProjectDiagramSolid />
          <Link to="/projects">Projects </Link>
          {/* onclick länk till project sidan */}
        </button>
      </div>
    </div>
  );
};

export default Navbtns;
