import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <h3>
        <img src={logo} width="40px" height="40px" alt="logo"></img>&ensp;
        <span style={{fontWeight:"bolder"}}>NOTIFYER</span>
      </h3>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
