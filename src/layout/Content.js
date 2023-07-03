import React, {useContext} from "react";
import About from "../component/About/About";
import Contact from "../component/Contact/Contact";
import Projects from "../component/Projects/Projects";
import Separator from "../component/Separator/Separator";
import Skills from "../component/Skills/Skills";
import Header from "./Header";

import {WindowContext} from "../context/WindowContext";

const Content = () => {

  const {windowSize} = useContext(WindowContext)

  return (
    <>
      <Header />
      <About />
      <Separator q={6} />
      <Skills />
      <Separator q={windowSize.width < 940 ? 6 : 10} />
      <Projects />
      <Separator q={windowSize.width < 940 ? 6 : 10} />
      <Contact />
    </>
  );
};

export default Content;
