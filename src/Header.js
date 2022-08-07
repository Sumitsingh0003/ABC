import React from "react";
import { Link } from "react-router-dom";
import Logo from "./image.png";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="" />
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About US
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/counters">
                Counters
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/toggle">
                Toggle
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/accordian">
                Accordian
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/accordians">
                Accordians
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tabs">
                Tabs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/proptabs">
              Proptabs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact US
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
