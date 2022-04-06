import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Image from "./Components/Images/Image";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/image" element={<Image />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
