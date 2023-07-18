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
      </nav>
    </div>
  );
};

export default NavBar;
