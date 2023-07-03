import React, { createContext, useState } from "react";

export const PairContext = createContext();

const PairProvider = (props) => {
  const [pair, setPair] = useState(false);

  const setPairMode = (e) => {
    setPair(true);
    if (pair) setPair(false);
  };

  return (
    <PairContext.Provider
      value={{
        setPairMode,
        pair
      }}
    >
      {props.children}
    </PairContext.Provider>
  );
};

export default PairProvider;
