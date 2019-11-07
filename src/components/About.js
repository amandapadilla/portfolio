import React from "react";
// import StoryMap from "./storymap";

const About = () => {
  return (
    <div className="about">
      <h2 className="about__title">About me!</h2>
      {/* <img src="./photoCV.jpg" alt="Amanda Padilla Santiago" className="about__photo"/> */}
      <p>
        My imagination, creativity, multipotentiality and initiative moves me to
        research and adopt new forms of communication.
      </p>
      <p>
        My experience extends from journalism to design and multimedia
        production, from webdoc to VR and also data visualization, learning by
        gamification systems and transmedia projects management and interactive
        experiences UX analytics. I love to explore my attention to details in
        User Experience and Interfaces and always trying to make it better.
      </p>
      <p>
        I'm a hackathon lover who has lived interdisciplinar colective
        experiences around the globe exploring paths to new knowledge, learning
        and incorporating new skills in community as my passion.
      </p>
      <p>Currently, I'm exploring my potential as Frontend Developer.</p>

      <a href="https://drive.google.com/open?id=1ikcsvqZWBxxD7Ed3hCwQjztunjPQOs4Z">
        Go to CV
      </a>
      <a href="./storymap.js">Visit StoryMap</a>
      {/* react-router */}
    </div>
  );
};

export default About;
