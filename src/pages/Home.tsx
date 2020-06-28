import React, { useRef } from "react";
import { Section } from "../components/Layout/Section";
import NavBar from "../components/NavBar/NavBar";
import "./_Home.scss";
import WorkList from "../components/WorkList/WorkList";

const Home = () => {
  const workRef = useRef();
  const topRef = useRef();
  const bottomRef = useRef();

  const refs = {
    top: topRef
  };
  return (
    <main className="home">
      <NavBar />
      {/* <h1>Home</h1> */}
      <WorkList />
    </main>
  );
};

const scrollToRef = (ref: any) => {
  ref.current.scrollIntoView({ behavior: "smooth" });
};

export default Home;
