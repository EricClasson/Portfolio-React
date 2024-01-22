import Links from "./Links/Links";
import Socialmediabtn from "./Socialmedia/Socialmedia";
import "../Footer/footer.scss";

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
      </div>
    </div>
  );
};

export default Footer;
<div>
  <Links />
</div>;
