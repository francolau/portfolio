import React, { createContext, useState, useEffect } from "react";

export const WindowContext = createContext();

const WindowProvider = (props) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <WindowContext.Provider
      value={{
        windowSize
      }}
    >
      {props.children}
    </WindowContext.Provider>
  );
};

export default WindowProvider;
