import React from "react";
import Header from "../../components/Header";
import About from "./About";
import Experiences from "./Experiences";
import Intro from "./Intro";
import Projects from "./Projects";


function Home() {
  return (
  <div className="bg-primary px-40 sm:px-5">
    <Header />
    <Intro />
    <About />
    <Experiences />
    <Projects />
  </div>
  )
}

export default Home;
