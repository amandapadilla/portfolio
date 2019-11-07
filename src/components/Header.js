import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/index.scss";

function Header() {
  return (
    <Link to="/">
      <header className="header">
        <h1 className="header__title">Hello world! </h1>
        <h2 className="header__subtitle">This is my portfolio.</h2>
      </header>
    </Link>
  );
}

export default Header;
