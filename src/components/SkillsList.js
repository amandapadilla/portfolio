import React from "react";

const Skills = props => {
  const { skills } = props;
  const skillsFrontend = skills.frontend;
  console.log(skillsFrontend);
  const skillsUX = skills.UX;
  console.log(skillsUX);
  const skillsAgile = skills.Agile;
  console.log(skillsAgile);

  return (
    <div>
      <ul>
        <li>Frontend</li>
        <li>UX</li>
      </ul>
    </div>
  );
};

export default Skills;
