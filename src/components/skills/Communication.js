import React from "react";

const Communication = props => {
  const { communicationSkills } = props;
  return (
    <div>
      <h3>Communication</h3>
      <ul>
        {communicationSkills.map(skill => {
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
export default Communication;
