import React, {useState, useEffect, useContext} from "react";
import {PairContext} from "../../context/PairContext";
import "./Loader.css";

const Loader = () => {
  const {setPairMode} = useContext(PairContext);

  const [progress, setProgress] = useState(0);
  const [localStorageValue, setLocalStorageValue] = useState(
    JSON.parse(localStorage.getItem("pairing"))
  );

  let intervalId;

  useEffect(() => {
    if (progress >= 100) {
      clearInterval(intervalId);
    } else {
      intervalId = setInterval(() => {
        setProgress(progress + 1);
      }, 35);
    }
    return () => clearInterval(intervalId);
  }, [progress]);

  useEffect(() => {
    localStorage.setItem("pairing", JSON.stringify(localStorageValue));
  }, [localStorageValue]);

  const handleClick = () => {
    setLocalStorageValue(!localStorageValue);
    setPairMode(!localStorageValue);
  };

  const circumference = 50 * 2 * Math.PI + 750;

  return (
    <div>
      {progress < 100 ? (
        <div className='flex flex-col items-center justify-center w-[100%] h-[100vh] text-[#ced4da] relative'>
          {/* <span style={{fontSize: `${progress / 2}vh`}} className=''>
            {progress}%
          </span> */}
          <svg
            className='w-[30rem] h-[30rem] transform translate-x-1 translate-y-1 absolute'
            style={{margin: "0 auto"}}
            x-cloak
          >
            <circle
              className='text-gray-300'
              strokeWidth={10}
              strokeDasharray={circumference}
              strokeDashoffset={
                circumference - (progress / 100) * circumference
              }
              stroke='currentColor'
              fill='transparent'
              r='160'
              cx='50%'
              cy='50%'
            />

            <text
              x='50%'
              y='53%'
              textAnchor='middle'
              fill='#ced4da'
              style={{fontSize: "55px"}}
            >
              {progress}%
            </text>
          </svg>
          <svg
            className='w-[30rem] h-[30rem] transform translate-x-1 translate-y-1 absolute z-10'
            style={{margin: "0 auto"}}
            x-cloak
          >
            <circle
              className='text-gray-300'
              strokeWidth={10}
              strokeDasharray={circumference}
              strokeDashoffset={
                circumference - (progress / 100) * circumference
              }
              stroke='currentColor'
              fill='transparent'
              r='160'
              cx='50%'
              cy='50%'
            />
          </svg>
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center w-[100%] h-[100vh] text-[#ced4da]'>
          {/* <span style={{fontSize: `${progress / 2}vh`}} className=''>
            {progress}%
          </span> */}
          <svg
            className='w-[30rem] h-[30rem] transform translate-x-1 translate-y-1'
            style={{margin: "0 auto"}}
            x-cloak
          >
            <circle
              onClick={() => {
                handleClick();
              }}
              className='text-gray-300 cursor-pointer'
              strokeWidth={10}
              strokeDasharray={circumference}
              strokeDashoffset={
                circumference - (progress / 100) * circumference
              }
              stroke='currentColor'
              fill='transparent'
              r='160'
              cx='50%'
              cy='50%'
            />
            <text
              style={{fontSize: `60px`, pointerEvents: "none"}}
              className='font-firamono cursor-pointer'
              x='50%'
              y='53%'
              textAnchor='middle'
              fill='#ced4da'
            >
              CONNECT
            </text>
          </svg>
        </div>
        // <div className='flex flex-col items-center justify-center w-[100%] h-[100vh] text-[#ced4da]'>
        //   <button
        //     data-aos='zoom-in'
        //     data-aos-duration='500'
        //     data-aos-offset='100'
        //     onClick={() => {
        //       handleClick();
        //     }}
        //     style={{fontSize: `${progress / 3.6}vh`}}
        //     id='glitch'
        //     className='font-firamono cursor-pointer'
        //     data-text='CONNECT'
        //   >
        //     CONNECT
        //   </button>
        // </div>
      )}
    </div>
  );
};

export default Loader;
