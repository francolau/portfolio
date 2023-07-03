import React, { useState, useContext } from "react";
import {WindowContext} from "../../context/WindowContext";

import OBlogo from "../../images/projects/OBlogo.svg";
import TTlogo from "../../images/projects/TTLogo.svg";
import ferreterialogo from "../../images/projects/ferreteria.png";

import compu from "../../images/Compu.png";

import MainContainer from "../Container/MainContainer";
import TitleMove from "../TitleMove/TitleMove";
import ProjectCards from "./ProjectCards/ProjectCards";
import FerreteriaPics from "./Ferreteria/FerreteriaPics";

const Projects = () => {
  const [modal, setModal] = useState(null);

  const {windowSize} = useContext(WindowContext)

  const projects = {
    name: ["OneBric", "TowerTravel", "Neoris - Industrial hardware store"],
    img: [OBlogo, TTlogo, ferreterialogo],
    type: [
      "Main project",
      "Contributed to the project",
      "Final course project",
    ],
    info: [
      "OneBric is an investment company, I developed it entirely with React for the frontend, and contributions on the backend with MongoDb and NodeJs ",
      "Tower Travel is a tourist company from which i contributed in the frontend development",
      "Neoris industries final project of synchronous course fullstack, with the particularity of using Laravel and Angular developing both the design and the database with MySQL",
    ],
    info_short: [
      "Developed with React, ChartJS, NodeJS and MongoDB",
      "Developed with React",
      "Developed with Angular, Laravel and MySQL"
    ],
    url: [
      "https://app.onebric.com",
      "https://www.towertravel.com.ar/es/inicio",
      undefined,
    ],
  };

  return (
    <MainContainer height={"700px"} width={"100%"} id={"projects"}>
      { windowSize.width < 940 ? 
      null
      : 
      <TitleMove title={"PROJECTS"} containerHeight={650} />

      }
      
      {modal && <FerreteriaPics setModal={setModal} />}
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-offset="100"
        className="flex flex-wrap space-x-2 my-auto items-center justify-center w-12/12 "
      >
        <div class="w-full h-full absolute inset-x-1/2 top-0 bottom-0">
          <img
            alt="fondo"
            src={compu}
            className="w-[450px] blur object-cover opacity-40 select-none pointer-events-none"
          />
        </div>
        {projects.name.map((n, index) => {
          if(windowSize.width < 940){
            return (
              <ProjectCards
                name={n}
                img={projects.img[index]}
                info_short={projects.info_short[index]}
                type={projects.type[index]}
                url={projects.url[index]}
                setModal={setModal}
              />
            );
          }  
          else 
          return (
            <ProjectCards
              name={n}
              img={projects.img[index]}
              info={projects.info[index]}
              type={projects.type[index]}
              url={projects.url[index]}
              setModal={setModal}
            />
          );
        })}
      </div>
    </MainContainer>
  );
};

export default Projects;
