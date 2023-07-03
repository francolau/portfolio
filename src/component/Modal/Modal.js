import React, { useEffect, useState } from "react";

const Modal = ({ children, scroll, newModal, setModal }) => {
  const [hasScrollbar, setScrollBar] = useState(false);

  const hasScrollbar2 =
    document.getElementById("content")?.clientHeight >
    document.getElementById("background")?.clientHeight;

  useEffect(() => {
    setScrollBar(
      document.getElementById("content")?.clientHeight >
        document.getElementById("background")?.clientHeight
    );
  }, []);

  return (
    <div
      id="main-page"
      className="min-w-screen h-screen py-2 animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none overflow-x-hidden overflow-y-hidden focus:outline-none bg-no-repeat bg-center bg-cover"
    >
      <div
        id="background"
        className={newModal ? "" : "fixed bg-black opacity-80 inset-0 z-0"}
        onClick={() => setModal(false)}
      ></div>
      <div
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-offset="100"
        id="content"
        className={
          scroll && (hasScrollbar || hasScrollbar2)
            ? "overflow-y-scroll scrollbar h-[90%] w-[50%] flex flex-col font-montserrat min-w-min p-5 relative px-11 my-auto rounded-xl shadow-lg bg-transparent"
            : `xxs:w-[100%] xs:w-[85%] sm:w-[85%] w-[65%] mx-auto flex flex-col font-montserrat p-5 relative px-11 my-auto rounded-2xl shadow-lg bg-transparent`
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
