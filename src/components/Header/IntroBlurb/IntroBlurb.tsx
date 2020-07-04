import React from "react";
import "./_IntroBlurb.scss";

const IntroBlurb = (props: any) => {
  if (!props?.intro) return null;
  return <p className="intro-blurb">{props.intro}</p>;
};

export default IntroBlurb;
