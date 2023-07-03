import React from "react";
import MySVG from "./MySVG";

import "./Separator.css";

const Separator = ({ q }) => {
  const svgs = Array.from({ length: q }, () => null);

  return (
    <div className="flex justify-center -space-x-[1.25rem] my-12">
      {svgs.map((_, index) => (
        <MySVG key={index} />
      ))}
    </div>
  );
};

export default Separator;
