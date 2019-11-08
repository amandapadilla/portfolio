import React from "react";

const Frontend = props => {
  const { frontendSkills } = props;
  return (
    <div className="skill">
      <h3 className="skill__title">Frontend</h3>
      <ul className="skill__list">
        {frontendSkills.map(skill => {
          return (
            <li key={skill.id} className="skill__item">
              <h4 className="skill__item--title">{skill.name}</h4>
              <p className="skill__item--description">{skill.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Frontend;
