import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">HOSTIT</Link>
        </div>
        <div className="navList">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
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
