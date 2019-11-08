import React from "react";

const Frontend = props => {
  const { frontendSkills } = props;
  return (
    <div>
      <h3>Frontend</h3>
      <ul>
        {frontendSkills.map(skill => {
          return (
            <li key={skill.id}>
              <h4>{skill.name}</h4>
              <p>{skill.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Frontend;
