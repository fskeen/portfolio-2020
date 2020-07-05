import React from "react";
import "./_IntroBlurb.scss";
import IntroSection from "./IntroSection";
import { blurbs } from "../../../data/intro";
import farmhouse from "../../../assets/farmer-png-icon-8.png";

const IntroBlurb = (props: any) => {
  if (!props?.intro) return null;
  return (
    <div className="top-section">
      <img src={farmhouse} alt="sdfsdf" className="farmhouse" />
      <section className="intro-blurb">
        {blurbs.map((blurb: any, i: number) => (
          <IntroSection
            text={blurb.text}
            imageSource={blurb.img}
            alt={blurb.alt}
          />
        ))}
      </section>
    </div>
  );
};

export default IntroBlurb;
