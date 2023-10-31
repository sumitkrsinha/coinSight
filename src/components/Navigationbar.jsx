import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "./style/navigationbar.css";
import { Link } from "react-router-dom";

const Navigationbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const close = () => {
    setOpen(false);
  };

  return (
    <div className="main">
      <div className="nav-container">
        <div className="hamburger" onClick={toggle}>
          <RxHamburgerMenu />
        </div>
        <div className="logo">CoinSights</div>
      </div>
      <div className={`${open ? "menu-flex" : "menu-hidden"}`}>
        <Link to="/" className="links">
          <span className="links" onClick={close}>
            Home
          </span>
        </Link>
        <Link to="/coininsight" className="links">
          <span className="links" onClick={close}>
            Insights
          </span>
        </Link>
        <Link to="/trendings" className="links">
          <span className="links" onClick={close}>
            Trendings
          </span>
        </Link>
        {/* <Link to="/about" className="links">
          <span className="links" onClick={close}>
            Developer
          </span>
        </Link> */}
      </div>
    </div>
  );
};

export default Navigationbar;
