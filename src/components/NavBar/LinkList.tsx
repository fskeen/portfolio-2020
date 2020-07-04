import React from "react";
import NavLink from "./NavLink";

const LinkList = (props: any) => {
  const mappedList = props.links.map(
    (linkObj: { [key: string]: any }, i: number) => (
      <NavLink key={`nav-link-${i}`} link={linkObj} />
    )
  );
  return <ul>{mappedList}</ul>;
};

export default LinkList;
