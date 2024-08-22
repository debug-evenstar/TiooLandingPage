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
// import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Onboarding from "./pages/Auth/Onboarding";
import { Bounce, Slide, Zoom, ToastContainer, toast } from 'react-toastify';
import BookDetails from "./pages/BookDetails";
import ScrollToTop from "./utils/scrollTop";

function App() {
  return (
    <div className="">
      <ToastContainer
        transition={Zoom}
      />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<LandingLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/library" element={<Library />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/authors" element={<Authors />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/verify-otp/:email" element={<OTP />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
