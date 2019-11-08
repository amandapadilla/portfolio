import React, { Fragment } from "react";
import Frontend from "./skills/Frontend";
import UX from "./skills/UX";
import Agile from "./skills/Agile";
import Design from "./skills/Design";
import Communication from "./skills/Communication";
import Multimedia from "./skills/Multimedia";

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
        <img src="./images/loader.gif" alt="Loading..." className="loader" />
      </div>
    );
  } else {
    return (
      <div className="list">
        <h2 className="list__title">Skills</h2>
        <Fragment>
          <Frontend frontendSkills={frontendSkills} />
          <UX uxSkills={uxSkills} />
          <Agile agileSkills={agileSkills} />
          <Design designSkills={designSkills} />
          <Communication communicationSkills={communicationSkills} />
          <Multimedia multimediaSkills={multimediaSkills} />
        </Fragment>
      </div>
    );
  }
};

export default Skills;
