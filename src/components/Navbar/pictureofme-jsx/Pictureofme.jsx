import picture from "../../../assets/eric.avif";
import { Link } from "react-router-dom";

const Pictureofme = () => {
  return (
    <div className="pictureofme-container">
      <Link to="/">
        <img className="pictureofme" src={picture} alt="ofme" />
      </Link>

      <div></div>
    </div>
  );
};

export default Pictureofme;
