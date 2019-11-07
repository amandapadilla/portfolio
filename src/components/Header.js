import React from "react";
import "../stylesheets/index.scss";

function Header() {
  return (
    <header className="header">
      {/* <img
        src="./alicia-matrix.png"
        alt="Welcome to my porfolio"
        className="header__logo"
      /> */}
      <h1 className="header__title">Hello world! </h1>
      <h2 className="header__title">This is my portfolio.</h2>
    </header>
  );
}

export default Header;
