import { Link } from "react-router-dom";

const Navbtns = () => {
  return (
    <div className="navbar-Btn-container">
      <div>
        <button className="btn btn-nav Aboutme">
          <Link to="/About me">About me </Link>
        </button>
      </div>
      <div>
        <button className="btn btn-nav contact">
          <Link to="/Contact me">Contact me </Link>
        </button>
      </div>
      <div>
        <button className="btn btn-nav work">
          <Link to="/projects">Projects </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbtns;
