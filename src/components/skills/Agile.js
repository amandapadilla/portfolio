import React from "react";

const Agile = props => {
  const { agileSkills } = props;
  return (
    <div>
      <h3>Agile</h3>
      <ul>
        {agileSkills.map(skill => {
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
export default Agile;
