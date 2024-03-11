import Typewrite from "./Typewrite";
import { Link } from "react-router-dom";

const Frontinfo = () => {
  return (
    <div className="frontinfo">
      <h1>HI, I´m Eric</h1>

      {/* "text " propsar till Typewrite.jsx och används då till functionen currenttext */}
      <div className="undertext"></div>
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

        <Link to="/About me" className="btn front-info-btn btn-left">
          More{" "}
        </Link>
      </div>
    </div>
  );
};

export default Frontinfo;
