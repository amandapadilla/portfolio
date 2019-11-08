import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/index.scss";

function Header() {
  return (
    <Link to="/">
      <header className="header">
        <h1 className="header__title">Hello world! </h1>
        <p className="header__subtitle">This is my portfolio.</p>
      </header>
    </Link>
  );
}

export default Header;
