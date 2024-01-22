import { Link } from "react-router-dom";

const Hammenucont = ({ toggle, setToggle }) => {
  return (
    <div className="hamburger-content">
      <button
        onClick={() => setToggle(false)}
        className="btn btn-nav btns-toggle"
      >
        <Link to="/">Home </Link>
      </button>
      <button
        onClick={() => setToggle(false)}
        className="btn btn-nav btns-toggle "
      >
        <Link to="/About me">About me </Link>
      </button>

      <button
        onClick={() => setToggle(false)}
        className="btn btn-nav btns-toggle "
      >
        <Link to="/Contact me">Contact me </Link>
      </button>

      <button
        onClick={() => setToggle(false)}
        className="btn btn-nav btns-toggle"
      >
        <Link to="/projects">Projects </Link>
      </button>
    </div>
  );
};

export default Hammenucont;
