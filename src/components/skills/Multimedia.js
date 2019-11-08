import React from "react";

const Multimedia = props => {
  const { multimediaSkills } = props;
  return (
    <div className="skill">
      <h3 className="skill__title">Multimedia</h3>
      <ul className="skill__list">
        {multimediaSkills.map(skill => {
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
export default Multimedia;
