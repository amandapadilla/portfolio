import React from "react";
import "../stylesheets/index.scss";

function Header (){
    return (
        <header className="header">
          <img src="logo" alt="Welcome to my porfolio" className="header__logo" />
          <nav className="header__menu">
            <ul className="header__list">
              <li className="header__item">About me</li>
              <li className="header__item">Skills</li>
              <li className="header__item">Proyects</li>
              <li className="header__item">Get in touch!</li>
            </ul>
          </nav>
        </header>   
    );
};

export default Header;