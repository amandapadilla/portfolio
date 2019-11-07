import React from "react";
// import StoryMap from "./storymap";
import "../stylesheets/about.scss";

const About = () => {
  return (
    <div className="about">
      <img src="../images/photoCV.jpg" alt="About" className="about__image" />
      <h2 className="about__title">About me!</h2>
      <section className="about__text">
        <p className="about__paragraph">
          My imagination, creativity, multipotentiality and initiative moves me
          to research and adopt <br />
          <strong>new forms of communication</strong>.
        </p>
        <p className="about__paragraph">
          My experience extends from journalism to design and multimedia
          production, from webdoc to VR and also data visualization, learning by
          gamification systems and transmedia projects management and
          interactive experiences UX analytics.
        </p>
        <p className="about__paragraph">
          I love to explore my attention to details in User Experience and
          Interfaces and always trying <br />
          <strong>to make it better</strong>.
        </p>

        <p className="about__paragraph">
          I'm a hackathon lover who has lived interdisciplinar colective
          experiences around the globe exploring paths to new knowledge,
          learning and incorporating new skills in
          <br />
          community as my passion.
        </p>
        <p className="about__paragraph">
          Currently, I'm exploring my potential as
          <strong> Frontend Developer</strong>.
        </p>
      </section>
      <a
        href="https://drive.google.com/open?id=1ikcsvqZWBxxD7Ed3hCwQjztunjPQOs4Z"
        className="about__link"
      >
        Go to CV
      </a>
      <a href="./storymap.js" className="about__link">
        Visit StoryMap
      </a>
    </div>
  );
};

export default About;
