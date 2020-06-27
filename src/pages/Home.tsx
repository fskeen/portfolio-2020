import React from "react";
import { Section } from "../components/Layout/Section";
import NavBar from "../components/NavBar/NavBar";
import "./_Home.scss";

const Home = () => {
  return (
    <Section size="full" flex={true} className="home">
      <Section size="quarter" flex={true} column={true}>
        <NavBar />
      </Section>
      <Section size="three-quarters">
        <h1>Home</h1>
      </Section>
    </Section>
  );
};

export default Home;
