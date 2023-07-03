import React from "react";

const MainContainer = ({ children, width, height, id }) => {
  return (
    <div
      className={`flex flex-col items-center duration-300`}
      style={{ width: width, height: height }}
      id={id}
    >
      {children}
    </div>
  );
};

export default MainContainer;
