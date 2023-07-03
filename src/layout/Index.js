import React, { useContext, useState } from "react";
import { CSSTransition } from "react-transition-group";

import "../utils/Index.css";

import { PairContext } from "../context/PairContext";
import Loader from "../component/Loader/Loader";
import Content from "./Content";

const Index = () => {
  const { pair } = useContext(PairContext);
  const [showContent, setShowContent] = useState(true);

  return (
    <>
      <CSSTransition
        in={!pair}
        timeout={500}
        classNames="fade"
        unmountOnExit
        onExited={() => setShowContent(false)}
      >
        <Loader />
      </CSSTransition>

      {!showContent && (
        <CSSTransition in={pair} timeout={600} classNames="fade" unmountOnExit>
          <Content />
        </CSSTransition>
      )}
    </>
  );
};

export default Index;
