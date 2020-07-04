import React from "react";
import "./_About.scss";
import HeaderImage from "../components/Header/HeaderImage/HeaderImage";
import IntroBlurb from "../components/Header/IntroBlurb/IntroBlurb";

//header image
// blurb
// skills + buttons
const About = () => {
  return (
    <header>
      <HeaderImage />
      <IntroBlurb intro="This is me! An introduction to who I am!" />
      {/* <SkillList /> */}
    </header>
  );
};

export default About;
