import React from "react";
import { Link } from "gatsby";
import appData from "data/app.json";
import { handleMobileDropdown } from "common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link to="/" className="logo">
          <img ref={lr} src={appData.lightLogo} alt="logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <Link to={`/`} className="nav-link">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/about`} className="nav-link">
                Sobre Nosotros
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link to={`/meet-ups`} className="nav-link">
                Meet Ups
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/contact`} className="nav-link">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
