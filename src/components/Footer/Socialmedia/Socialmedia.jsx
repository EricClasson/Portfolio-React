import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Socialmediabtn = () => {
  return (
    <div className="socialmedia-container">
      <span className="socialmedialinks">
        <a
          href="https://www.linkedin.com/in/eric-classon-001b131a2/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </span>
      <span className="socialmedialinks">
        <a href="https://github.com/EricClasson" target="_blank">
          <FaGithub />
        </a>
      </span>
      <span className="socialmedialinks">
        <FaInstagram />
      </span>
    </div>
  );
};

export default Socialmediabtn;
