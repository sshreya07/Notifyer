import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <h3>
        <img src={logo} width="40px" height="40px" alt="logo" id="logo"></img>&ensp;
        <span style={{fontWeight:"bolder"}}>NOTIFYER</span>
      </h3>
      <ul>
        <li>
          <Button className="navButtons Mui-focusVisible" size="small"><Link to="/">HOME</Link></Button>
        </li>
        <li>
          <Button className="navButtons Mui-focusVisible" size="small"><Link to="/about">ABOUT</Link></Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
