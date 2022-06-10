import React from "react";
import Works from "../Project/Works";
import Contact from "../Shared/Contact";
import Banner from "./Banner";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <Banner />
      <Works></Works>
      <Skills></Skills>
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
