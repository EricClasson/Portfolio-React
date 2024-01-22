import "../components/Header/header.scss";

import Frontinfo from "../components/Header/frontinfo/Frontinfo";

//Header page - Parent
const Header = () => {
  return (
    <div className="header-container">
      <Frontinfo />
    </div>
  );
};

export default Header;
