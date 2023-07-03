import React from "react";

const ProjectCards = ({ name, img, info, info_short, type, url, setModal }) => {
  return (
    <>
      <div
        key={name}
        className={`
         hover:bg-csm transition transform duration-300 hover:scale-[1.15] hover:z-20 last:w-8/12 w-5/12 xxs:w-[140px] text-center my-4 px-2 justify-center border-2 border-gray-800 rounded-md flex flex-col h-64 py-2`}
        onClick={() => url === undefined && setModal(true)}
      >
        <a
          className="self-center"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={img}
            className={
              name === "Neoris - Industrial hardware store"
                ? `w-[40px] my-2 max-h-[60px] mx-auto cursor-pointer`
                : `w-[140px] my-2 max-h-[160px] mx-auto sm:w-[100px]`
            }
            alt={`${name}logo`}
          />
        </a>
        <div className="mt-2 space-y-1">
          <h1 className="font-bold md:text-xl sm:text-lg">{name}</h1>
          <h2 className=" font-semibold md:text-lg sm:text-sm opacity-80">{type}</h2>
          {info_short && <p className="font-light md:text-lg sm:text-xs opacity-80">{info_short}</p> }
          <p className="font-light md:text-lg sm:text-xs opacity-80">{info}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
