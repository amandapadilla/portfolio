import React from "react";

const Skills = props => {
  const { skills, frontendSkills } = props;
  console.log(frontendSkills);
  if (frontendSkills === undefined) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  } else {
    return (
      <div>
        <ul>
          <strong>Frontend</strong>
          {frontendSkills.map(skill => {
            return (
              <li key={skill.id}>
                {skill.name}
                <p>{skill.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Skills;
