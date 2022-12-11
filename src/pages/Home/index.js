import React from "react";
import Header from "../../components/Header";
import About from "./About";
import Contact from "./Contact";
import Courses from "./Courses";
import Experiences from "./Experiences";
import Footer from "./Footer";
import Intro from "./Intro";
import Projects from "./Projects";
import Sider from "./Sider";


function Home() {
  return (
  <div className="bg-primary px-40 sm:px-5">
    <Header />
    <Intro />
    <About />
    <Experiences />
    <Projects />
    <Courses />
    <Contact />
    <Footer />
    <Sider />
  </div>
  )
}

export default Home;
