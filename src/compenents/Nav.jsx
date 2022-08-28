import React from "react";
import { Link } from "react-router-dom";
import "../compenents/nav.css";

const Nav = () => {
  const Logo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/ModernWarfare3Logo.svg/1200px-ModernWarfare3Logo.svg.png";

  return (
    <div className="container-nav">
      <div className="container-content">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" className="logo-av" />
          </Link>
        </div>
        <div className="links">
          <a>
            <Link to="/">Home</Link>
          </a>
          <a>
            <Link to="/about">About</Link>
          </a>
          <a>
            <Link to="/contact">Contact</Link>
          </a>
        </div>
        <div className="nav-buttons">
          <Link to="/login">
            <button type="submit">Login</button>
          </Link>
          <Link to="/signin">
            <button type="submit">Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
