import React from "react";
// import { Link } from "react-router-dom";

const Skills = props => {
  const { projects } = props;
  console.log(projects);
  if (projects === undefined) {
    return (
      <div>
        <img src="./images/loader.gif" alt="Loading..." className="loader" />
      </div>
    );
  } else {
    return (
      <div className="list">
        <h2 className="list__title">Projects</h2>
        <ul className="project__list">
          {projects.map(projects => {
            return (
              <li key={projects.id} className="project__item">
                <h4 className="project__item--title">{projects.title}</h4>
                <p className="project__item--description">
                  {projects.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Skills;
