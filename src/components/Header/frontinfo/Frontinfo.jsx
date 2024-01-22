import Typewrite from "./Typewrite";
import { Link } from "react-router-dom";

const Frontinfo = () => {
  return (
    <div className="frontinfo">
      <h1>HI, Im Eric</h1>
      <h2>
        Front
        <Typewrite text="-End Developer." delay={100} />
      </h2>
      <p>
        I like to craft solid and scalable frontend products with great user
        experiences.
      </p>
      <div className="frontinfo-btns">
        <Link to="/projects" className="btn front-info-btn">
          Projects{" "}
        </Link>

        <button className="btn front-info-btn">
          <Link to="/About me">About me </Link>
        </button>
      </div>
    </div>
  );
};

export default Frontinfo;
