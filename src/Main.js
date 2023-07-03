import React from "react";

const Main = ({ children }) => {
  return (
    <div
      id="main_container"
      className="bg-csm min-h-[100vh] min-w-[100vw] flex flex-col font-inter tracking-wide text-white scrollbar scrollbar-track-transparent"
    >
      {children}
    </div>
  );
};

export default Main;
