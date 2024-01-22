import { useState } from "react";
import Hammenucont from "../Hamburgermenu/Hammenucont";

const Hamburgermenu = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="hamburger-nav">
      <button onClick={() => setToggle(!toggle)} className="btn-toggle">
        {!toggle && <i class="fa-solid fa-bars hamburgermenu hidden"></i>}

        {toggle && <i class="fa-solid fa-x hidden hambmenux"></i>}
      </button>
      {toggle && <Hammenucont toggle={toggle} setToggle={setToggle} />}
    </div>
  );
};

export default Hamburgermenu;
