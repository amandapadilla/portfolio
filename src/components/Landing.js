import React from "react";
import { Link } from "react-router-dom";
// import About from "./About";
// import Skills from "./SkillsList";
import "../stylesheets/landing.scss";

const Landing = () => {
  return (
    <div className="landing">
      <nav className="landing__navigation">
        <ul className="landing__list">
          <Link to="/about" replace>
            <li className="landing__about">
              <img
                src="../images/photoCV.jpg"
                alt="About"
                className="landing__about--image"
              />
              {/* <p className="landing__about--text">About</p> */}
            </li>
          </Link>
          <Link to="/skills">
            <li className="landing__skills">Skills</li>
          </Link>

          <li className="landing__projects">Projects</li>
          <li className="landing__contact">Get in touch!</li>
        </ul>
      </nav>
    </div>
  );
};
export default Landing;
