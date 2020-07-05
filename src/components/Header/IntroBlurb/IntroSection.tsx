import React from "react";
import "./_IntroSection.scss";

const IntroSection = (props: any) => {
  const { text, imageSource, alt } = props;
  return (
    <div className="intro-section">
      <img src={imageSource} alt={alt} />
      {text}
    </div>
  );
};

export default IntroSection;
