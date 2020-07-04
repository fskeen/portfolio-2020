import React from "react";
import { Section } from "../Layout/Section";
import LinkList from "./LinkList";
import { navLinks } from "../../data/links";
import "./_NavBar.scss";
import HeaderIcon from "./HeaderIcon";

const NavBar = () => {
  return (
    <nav className="navbar">
      <HeaderIcon />
      <LinkList links={navLinks} />
    </nav>
  );
};

export default NavBar;
