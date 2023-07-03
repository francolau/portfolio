import React, {useContext} from "react";
import {WindowContext} from "../../context/WindowContext";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import jslogo from "../../images/skills/jslogo.png";
import reactlogo from "../../images/skills/reactlogo.png";
import nodejslogo from "../../images/skills/nodejslogo.png";
import mongodb from "../../images/skills/mongodb.svg";
import gitlogo from "../../images/skills/gitlogo.png";
import chartjslogo from "../../images/skills/chartjslogo.png";
import pythonlogo from "../../images/skills/pythonlogo.png";
import tailwindlogo from "../../images/skills/tailwindlogo.png";
import mysqllogo from "../../images/skills/MySQLlogo.png";
import lamparita from "../../images/Lamparita.png";


import TitleMove from "../TitleMove/TitleMove";
import SkillContainer from "./Container/SkillContainer";
import Slider from "react-slick";

const Skills = () => {
 
  const {windowSize} = useContext(WindowContext)
  
  const me = {
    skills: [
      "Javascript",
      "React",
      "NodeJS",
      "MongoDb",
      "Git",
      "ChartJS",
      "Python",
      "Tailwind",
      "MySQL",
    ],
    img: [
      jslogo,
      reactlogo,
      nodejslogo,
      mongodb,
      gitlogo,
      chartjslogo,
      pythonlogo,
      tailwindlogo,
      mysqllogo,
    ],
    exp: [
      "One year of experience",
      "One year of experience",
      "Half year of experience",
      "Half year of experience",
      "One year of experience",
      "One year of experience",
      "Half year of experience",
      "One year of experience",
      "Half year of experience",
    ],
  };

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: windowSize.width < 940 ? 1 : 2,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-4 h-[500px] w-[100%]" id="skills">
      { windowSize.width < 940 ? 
      null
      : 
      <TitleMove title={"SKILLS"} containerHeight={450} />

      }
      <section className="w-[80%] mx-auto relative top-28">
        <div
          className="w-full h-full absolute inset-x-1/2 top-0 bottom-0"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-offset="100"
        >
          <img
            alt="fondo"
            src={lamparita}
            className="w-[450px] blur object-cover opacity-40 select-none pointer-events-none"
          />
        </div>
        <Slider {...settings}>
          {me.skills.map((info, index) => {
            return (
              <SkillContainer
                skill={info}
                logo={me.img[index]}
                exp={me.exp[index]}
              />
            );
          })}
        </Slider>
      </section>
    </div>
  );
};

export default Skills;
