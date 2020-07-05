import React, { useRef, useEffect, useState } from "react";
import { Section } from "../components/Layout/Section";
import NavBar from "../components/NavBar/NavBar";
import "../styles/imports.scss";
import "./_Home.scss";
import WorkList from "../components/WorkList/WorkList";
import Contact from "./Contact";
import About from "./About";

const determineHideNav = () => {
  let scrollMarker = window.innerHeight / 3;
  if (window.scrollY > scrollMarker) {
    console.log("marker", scrollMarker);
    console.log("height", window.innerHeight);
    return true;
  } else {
    return false;
  }
};

const Home = () => {
  const workRef = useRef();
  const topRef = useRef();
  const bottomRef = useRef();
  const [scrollHeight, setScrollHeight] = useState(window.innerHeight);
  const [hideNav, setHideNav] = useState(true);
  // ! Add scroll listener to hide nav
  const refs = {
    top: topRef
  };

  return (
    <main
      className={`home default-theme ${hideNav ? "hidden-nav" : ""}`}
      onScroll={() => determineHideNav()}
    >
      <NavBar />
      {/* <h1>Home</h1> */}
      <div className="main-content">
        <About />
        <WorkList />
        <Contact />
      </div>
    </main>
  );
};

const scrollToRef = (ref: any) => {
  ref.current.scrollIntoView({ behavior: "smooth" });
};

export default Home;
