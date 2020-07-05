import React from "react";
import "./_IntroBlurb.scss";
import IntroSection from "./IntroSection";
import { blurbs } from "../../../data/intro";

const IntroBlurb = (props: any) => {
  if (!props?.intro) return null;
  return (
    <section className="intro-blurb">
      {blurbs.map((blurb: any, i: number) => (
        <IntroSection
          text={blurb.text}
          imageSource={blurb.img}
          alt={blurb.alt}
        />
      ))}
    </section>
  );
};

export default IntroBlurb;
