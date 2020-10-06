import React from "react";
import logo from "../layout/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <h3>
        <img src={logo} width="40px" height="40px"></img>&ensp;
        <span>NOTIFYER</span>
      </h3>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
      </ul>
    </nav>
  );
};

export default Navbar;
