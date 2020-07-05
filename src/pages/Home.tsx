import React, { useRef } from "react";
import { Section } from "../components/Layout/Section";
import NavBar from "../components/NavBar/NavBar";
import "../styles/imports.scss";
import "./_Home.scss";
import WorkList from "../components/WorkList/WorkList";
import Contact from "./Contact";
import About from "./About";
import TopAnim from "./TopAnim";

const Home = () => {
  const workRef = useRef();
  const topRef = useRef();
  const bottomRef = useRef();

  const refs = {
    top: topRef
  };
  return (
    <main className={`home default-theme`}>
      <NavBar />
      {/* <h1>Home</h1> */}
      <div className="parallax-container">
        <TopAnim />
        <div className="main-content"></div>
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
