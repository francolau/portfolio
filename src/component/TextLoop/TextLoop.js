import React from "react";

import Marquee from "react-fast-marquee";

const TextLoop = ({ bg, speed, w, text }) => {
  return (
    <a
      className="w-[340px] transition transform duration-300 hover:scale-[1.15] z-10 mx-auto mt-12 pt-3"
      href="#contact"
    >
      <Marquee
        speed={speed}
        className="mx-auto font-inter rounded-xl p-2 border border-transparent bg-[#072c4b] bg-opacity-30 hover:border-[#0b426e]"
        style={{ width: `${w}` }}
        gradient={false}
      >
        <span className="text-md flex items-center mr-[120px]">
          <div
            style={{ background: bg }}
            className={`h-5 w-5  rounded-full mr-2`}
          ></div>
          {text}
        </span>
      </Marquee>
    </a>
  );
};

export default TextLoop;
