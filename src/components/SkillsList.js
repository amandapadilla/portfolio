import React, { Fragment } from "react";
import Frontend from "./skills/Frontend";
import UX from "./skills/UX";
import Agile from "./skills/Agile";

const Skills = props => {
  const { skills } = props;
  const frontendSkills = skills.frontend;
  const uxSkills = skills.UX;
  const agileSkills = skills.Agile;
  const designSkills = skills.Design;
  const communicationSkills = skills.Communication;
  const multimediaSkills = skills.MultimediaProduction;
  const educationSkills = skills.Education;
  console.log(
    frontendSkills,
    uxSkills,
    agileSkills,
    designSkills,
    communicationSkills,
    multimediaSkills,
    educationSkills
  );
  if (frontendSkills === undefined) {
    return (
      <div>
        <img src="../images/loader.gif" alt="Loading..." className="loader" />
      </div>
    );
  } else {
    return (
      <div>
        <h2>Skills</h2>
        <Fragment>
          <Frontend frontendSkills={frontendSkills} />
          <UX uxSkills={uxSkills} />
          <Agile agileSkills={agileSkills} />
        </Fragment>
      </div>
    );
  }
};

export default Skills;
