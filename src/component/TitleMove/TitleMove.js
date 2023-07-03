import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

const TitleMove = ({ title, containerHeight }) => {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const buttonRef = useRef(null);
  const [button, setButton] = useState(null);

  useEffect(() => {
    if (buttonRef !== null) {
      setButton(buttonRef?.current);
    }
  }, [buttonRef, button]);

  const screenWidth = window.innerWidth;
  // const screenHeight = window.innerHeight;

  const handleClick = () => {
    if (xy.animation.to[0] === 0 && xy.animation.to[1] === 0) {
      set({ xy: [0, containerHeight] });
    } else if (
      xy.animation.to[0] === 0 &&
      xy.animation.to[1] === containerHeight
    ) {
      set({ xy: [screenWidth - 500, containerHeight] });
    } else if (
      xy.animation.to[0] === screenWidth - 500 &&
      xy.animation.to[1] === containerHeight
    ) {
      set({ xy: [screenWidth - 500, 0] });
    } else set({ xy: [0, 0] });
  };

  return (
    <div
      className="w-full"
      data-aos="slide-right"
      data-aos-duration="500"
      data-aos-offset="100"
    >
      <animated.button
        className="font-rubikmono text-6xl relative self-start top-8 left-8 blur text-[#fd0] z-10 select-none"
        style={{
          transform: xy.to((x, y) => `translate(${x}px, ${y}px)`),
        }}
        ref={buttonRef}
        onMouseDown={() => {
          handleClick();
        }}
      >
        {title}
      </animated.button>
    </div>
  );
};

export default TitleMove;
