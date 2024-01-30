import Links from "./Links/Links";
import Socialmediabtn from "./Socialmedia/Socialmedia";
import "../Footer/footer.scss";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <section>
          <Links />
        </section>
        <section>
          <Socialmediabtn />
        </section>
      </div>
      <div className="footer-note">
        <h3>
          Design with <span className="heart">❤️</span> by Eric
        </h3>
        <div className="footer-copyright">
          <h4>
            2024
            <span>
              <FaRegCopyright />
            </span>
            Copyright All rights reserved{" "}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
<div>
  <Links />
</div>;
