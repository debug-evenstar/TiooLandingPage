import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import Homes from "./pages/homes";
import Pricing from "./pages/pricing";
import Authors from './pages/authors';
import Library from './pages/library';
import LibraryDetails from "./pages/library/details";

function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/library" element={<Library />} />
          <Route path="/library/details" element={<LibraryDetails />} />
          <Route path="/authors" element={<Authors />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
