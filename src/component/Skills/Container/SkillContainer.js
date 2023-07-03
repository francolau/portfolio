import React from "react";

const SkillContainer = ({ skill, logo, exp }) => {
  return (
    // <div className="flex flex-wrap items-center justify-center w-full space-x-3">
    <>
      <div
        key={skill}
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-offset="100"
        className={`w-11/12 p-4 text-center justify-center mx-auto border-2 border-gray-800 bg-dark-200 rounded-md flex flex-col h-48 z-10`}
      >
        <img
          src={logo}
          className="w-[60px] max-h-20 mx-auto"
          alt={`${skill}logo`}
        ></img>
        <div className="mt-2">
          <h1 className="font-bold md:text-xl">{skill}</h1>
          <p className="font-light md:text-lg opacity-80">{exp}</p>
        </div>
      </div>
    </>
  );
};

export default SkillContainer;
