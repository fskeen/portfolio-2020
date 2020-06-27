import React from "react";
import LinkList from "./LinkList";
import { navLinks } from "../../data/links";

const NavBar = () => {
  return <LinkList links={navLinks} />;
};

export default NavBar;
