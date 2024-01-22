import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="links-container">
      <ul>
        <li>
          <button className="btn btn-link ">
            <Link to="/About me">About me </Link>
          </button>
        </li>
        <li>
          <button className="btn btn-link">
            <Link to="/Contact me">Contact me </Link>
          </button>
        </li>
        <li>
          <button className="btn btn-link">
            <Link to="/projects">Projects </Link>
          </button>
        </li>
        <li>
          <button className="btn btn-link">
            <Link to="/">Home </Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Links;
