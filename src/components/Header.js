import React from "react";
import "../stylesheets/index.css";

function Header() {
  return (
    <header className="header">
      <img
        src="./nest.png"
        alt="Welcome to my porfolio"
        className="header__logo"
      />
    </header>
  );
}

export default Header;
