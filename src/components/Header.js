import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/header.scss";

function Header() {
  return (
    <Link to="/" className="header__link">
      <header className="header">
        <h1 className="header__title">> Hello world! </h1>
        <p className="header__subtitle">
          I'm Amanda Padilla. This is my portfolio.
        </p>
      </header>
    </Link>
  );
}

export default Header;
