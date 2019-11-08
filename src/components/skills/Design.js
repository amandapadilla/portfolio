import React from "react";

const Design = props => {
  const { designSkills } = props;
  return (
    <div>
      <h3>Design</h3>
      <ul>
        {designSkills.map(skill => {
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
export default Design;
