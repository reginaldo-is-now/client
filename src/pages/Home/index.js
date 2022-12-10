import React from "react";
import Header from "../../components/Header";
import About from "./About";
import Intro from "./Intro";

function Home() {
  return (
  <div className="bg-primary px-40">
    <Header />
    <Intro />
    <About />
  </div>
  )
}

export default Home;
