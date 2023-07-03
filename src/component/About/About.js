import React, {useContext} from "react";

import {WindowContext} from "../../context/WindowContext";
import aboutimg from "../../images/Saludo.png";

import TitleMove from "../TitleMove/TitleMove";
import TypeWriter from "../TypeWriter/Typewriter";
import MainContainer from "../Container/MainContainer";
import TextLoop from "../TextLoop/TextLoop";

const About = () => {

  const {windowSize} = useContext(WindowContext)

  const text =
    "Argentine full stack web developer in the process of constant learning, currently working for my future..";

  return (
    <MainContainer width={"100%"} height={"500px"} id={"info"}>
      {windowSize.width < 940 ? 
        null
      :
      <TitleMove title="ABOUT" containerHeight={450} />
      }
      {windowSize.width < 940 ? 
        <TextLoop
        w={"220px"}
        bg={"green"}
        speed={58}
        text={"AVAILABLE FOR WORK"}
        />
      :
      <TextLoop
          w={"320px"}
          bg={"green"}
          speed={58}
          text={"AVAILABLE FOR WORK"}
          />
      }
  

      <div
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-offset="100"
        className="relative w-[450px] z-0 -top-14 bottom-0"
      >
        <img
          src={aboutimg}
          alt="about"
          className="opacity-50 absolute w-full z-0 ml-8 blur select-none self-center"
        />
      </div>
      <section
        className="z-10 mt-6"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-offset="100"
      >
        <div className="flex flex-col mt-16">
          <h2 className="text-lg opacity-80 self-center">Hi i'm</h2>
          <h1 className="font-daysone sm:text-2xl text-3xl self-center text-yellow-400">
            FRANCO LAURINO
          </h1>
          <TypeWriter text={text} />
        </div>
      </section>

      <div className="flex space-x-4 p-4">
      
      <a aria-label="Github profile" className="w-10 p-0 z-10 rounded-full hover:opacity-70" href="https://github.com/francolau" target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className="w-10 h-10 text-[#dee2e6] hover:opacity-70 duration-100 ease-in-out">
          <path fill="white" fill-rule="evenodd" d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z">
          </path></svg>
            </a>
      
      <a aria-label="LinkedIn profile" href="https://www.linkedin.com/in/francolaurino/" target="_blank" rel="noreferrer" className="w-10 p-0 z-10 text-white rounded-full hover:opacity-70">
        <svg fill="white" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="32" height="32" className="w-10 h-10 text-[#dee2e6] hover:opacity-70 duration-100 ease-in-out">
          <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z">
          </path></svg>
          </a>

      <a aria-label="My Gmail" href="mailto:franco.lau.12@gmail.com" target="_blank" rel="noreferrer" className="w-10 p-0 z-10 text-white rounded-full hover:opacity-70">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="w-10 h-10 text-[#dee2e6] hover:opacity-70 duration-100 ease-in-out">
          <path fill="white" d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z">
            </path></svg>
            </a>
        </div>
    </MainContainer>
  );
};

export default About;
