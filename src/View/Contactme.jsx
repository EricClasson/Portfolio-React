import "../components/contactme/contactme.scss";
import Fromcontactme from "../components/contactme/form/contactform";

//Contact me page - Parent
const Contactme = () => {
  return (
    <div className="contactme-container">
      <h2>Send me an Email</h2>
      <Fromcontactme />
    </div>
  );
};

export default Contactme;
