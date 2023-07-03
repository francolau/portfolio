import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WindowProvider from "./context/WindowContext";
import PairProvider from "./context/PairContext";

import AOS from "aos";
import "aos/dist/aos.css";

import ErrorPage from "./component/ErrorPage/ErrorPage";
import Index from "./layout/Index";
import Main from "./Main";

function App() {
  useEffect(() => {
    localStorage.setItem("pairing", false);
    AOS.init();
  }, []);

  return (
    <Router>
      <PairProvider>
      <WindowProvider>
        <Main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Main>
      </WindowProvider>
      </PairProvider>
    </Router>
  );
}

export default App;
