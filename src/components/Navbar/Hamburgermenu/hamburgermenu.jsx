import { useState } from "react";
import Hammenucont from "../Hamburgermenu/Hammenucont";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
// Sida som är hammburger menu parent
const Hamburgermenu = () => {
  // usestate som gör att när man tooglar hamburgermenu när man klickar på den.
  const [toggle, setToggle] = useState(true);

  return (
    <div className="hamburger-nav">
      <button onClick={() => setToggle(!toggle)} className="btn-toggle">
        {!toggle && (
          <CiMenuFries className="hamburgermenu hidden fa-solid fa-bars" />
        )}

        {toggle && <RxCross1 className="fa-solid fa-x hidden hambmenux" />}
      </button>
      {toggle && <Hammenucont toggle={toggle} setToggle={setToggle} />}
    </div>
  );
};

export default Hamburgermenu;
