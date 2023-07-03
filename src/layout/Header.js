import React, {useContext, useState, useEffect} from "react";

import {WindowContext} from "../context/WindowContext";
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Menu from '../component/Menu/Menu'

const Header = () => {
  const {windowSize} = useContext(WindowContext)

  const [isMenu, setIsMenu] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if(windowSize.width < 940){
      setIsMenu(false)
    } else {setIsMenu(true); setIsOpen(false)}
}, [windowSize] )

useEffect(() => {
  const handleScroll = () => {
    if(isOpen){
      setIsOpen(false)
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [isOpen]); 

  

  return (
    <div className=
   "fixed mr-12 mt-12 right-0 top-0 font-rubikmono z-[200]" >
    {
      isMenu ?
      <Menu />
      : 
      <div className="flex flex-col">

        <button
                
                onClick={toggleMenu}
                className=" text-gray-400 focus:outline-none self-end pt-4"
              >
                {isOpen ? (
                  <XIcon className="h-8 w-8" aria-hidden="true" />
                ) : (
                  <MenuIcon className="h-8 w-8" aria-hidden="true" />
                )}
              </button>
              { isOpen && <Menu mobile={isOpen} /> }
        </div>
}
    </div>
  );
};

export default Header;