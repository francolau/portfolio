import React, { useState, useEffect } from "react";

const TypeWriter = ({ text }) => {
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setCurrentText(text.slice(0, index));
      index++;
      if (index > text.length) {
        clearInterval(interval);
      }
    }, 45);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <p className="text-center sm:text-lg text-xl mt-2 w-[385px] sm:w-[355px] xs:w-[340px] xxs:w-[300px] h-[120px]">
      {currentText}
    </p>
  );
};

export default TypeWriter;
