import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const logoSrc = "src/assets/images/logo-navbar.png";
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "navbar__link navbar__link--active"
      : "navbar__link";

  return (
    <header>
      <nav className="navbar">
        <img className="navbar__logo" src={logoSrc} alt="logo" />
        <ul>
          <li>
            <Link to="/" className={isActive("/")}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive("/about")}>
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
