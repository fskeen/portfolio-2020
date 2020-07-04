import React from "react";
import "./_Section.scss";

interface SectionProps {
  children: any;
  size?: string;
  column?: boolean;
  flex?: boolean;
  className?: string;
}
/**
 * @function Section
 * @param props - layout props for this column
 * @description - A flexible column component for layouts. Takes in a size prop to change the default width and wraps around any children you give it. Also takes in an orientation prop for use in flex.
 */
export const Section = (props: SectionProps) => {
  const children = props?.children;
  const size = determineSize(props?.size);
  const flex = determineFlex(props?.flex, props?.column);
  const className = props?.className;
  return (
    <div className={`${className ? className : ""} section ${size} ${flex}`}>
      {children}
    </div>
  );
};

const sizes = {
  full: "full",
  half: "half",
  third: "third",
  quarter: "quarter",
  twotThirds: "two-thirds",
  threeQuarters: "three-quarters"
};

export const determineSize = (size: string | undefined) => {
  switch (size) {
    case sizes.full:
      return "";
    case sizes.half:
      return sizes.half;
    case sizes.third:
      return "one-third";
    case sizes.quarter:
      return sizes.quarter;
    case sizes.twotThirds:
      return sizes.twotThirds;
    case sizes.threeQuarters:
      return sizes.threeQuarters;
    default:
      return "";
  }
};

export const determineFlex = (
  flex: boolean | undefined,
  column: boolean | undefined
) => {
  if (flex && column) {
    return "flex column";
  } else if (flex) {
    return "flex";
  } else {
    return "";
  }
};
