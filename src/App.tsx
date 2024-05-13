import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./layouts/nav";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Pricing from "./pages/Pricing";
import Footer from "./layouts/footer";
import Authors from "./pages/Authors";

function App() {
  return (
    <div className="bg-neutral-100 overflow-hidden">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/library" element={<Library />} />
          <Route path="/authors" element={<Authors />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
