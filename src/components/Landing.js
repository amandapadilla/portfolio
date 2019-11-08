import React from "react";
import { Link } from "react-router-dom";

import "../stylesheets/landing.scss";

const Landing = () => {
  return (
    <div className="landing">
      <nav className="landing__navigation">
        <ul className="landing__list">
          <Link to="/about" replace>
            <li className="landing__about">
              <img
                src="https://pbs.twimg.com/profile_images/1141711214722060288/WUhLVj_E_400x400.jpg"
                alt="About"
                className="landing__about--image"
              />
              {/* <p className="landing__about--text">About</p> */}
            </li>
          </Link>
          <Link to="/skills">
            <li className="landing__skills">Skills</li>
          </Link>
          <Link to="/projects">
            <li className="landing__projects">Projects</li>
          </Link>
          <li className="landing__contact">Get in touch!</li>
        </ul>
      </nav>
    </div>
  );
};
export default Landing;
