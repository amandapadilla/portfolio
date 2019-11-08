import React from "react";

const UX = props => {
  const { uxSkills } = props;
  return (
    <div>
      <h3>UX Designer</h3>
      <ul>
        {uxSkills.map(skill => {
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
export default UX;
