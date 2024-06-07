import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./layouts/partials/nav";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Pricing from "./pages/Pricing";

import Authors from "./pages/Authors";
import LandingLayout from "./layouts/landing";
import AuthLayout from "./layouts/auth";
import Login from "./pages/Auth/Login";
import PasswordReset from "./pages/PasswordReset";
import SignUp from "./pages/Auth/SignUp";
import OTP from "./pages/Auth/OTP";

function App() {
  return (
    <div className="bg-neutral-100 overflow-hidden">
      <Router>
        <Routes>
          <Route element={<LandingLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/library" element={<Library />} />
            <Route path="/authors" element={<Authors />} />
          </Route>
          <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login/>} />
            <Route path="/password-reset" element={<PasswordReset/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/verify-otp" element={<OTP/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
