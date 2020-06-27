import React from "react";
import "./_Column.scss";

interface ColumnProps {
  size?: string;
  children: any;
}
/**
 * @function Column
 * @param props - layout props for this column
 * @description - A flexible column component for layouts. Takes in a size prop to change the default width and wraps around any children you give it.
 */
export const Column = (props: ColumnProps) => {
  const children = props?.children;
  const size = determineSize(props?.size);
  return <div className={`Column ${size}`}>{children}</div>;
};

const sizes = {
  full: "full",
  half: "half",
  third: "third",
  quarter: "quarter",
  twotThirds: "two-thirds",
  threeQuarters: "three-quarters",
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
