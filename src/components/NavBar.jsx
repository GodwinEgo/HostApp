import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/">HOSTIT</Link>
        </div>
        <div className="navList">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="call">
          <a href="callto:08101215372">+(234)8101215372</a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
