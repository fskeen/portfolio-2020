import React from "react";
import NavLink from "./NavLink";

const LinkList = (props: any) => {
  const mappedList = props.links.map(
    (linkObj: { [key: string]: any }, i: number) => {
      console.log(linkObj);
      return <NavLink key={`nav-link-${i}`} link={linkObj} />;
    }
  );
  console.log(mappedList);
  return mappedList;
};

export default LinkList;
