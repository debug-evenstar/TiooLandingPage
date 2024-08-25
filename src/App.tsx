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
import { useEffect, useState } from "react";
import Aos from "aos";
import { useGetIpQuery, useLazyGetContinentQuery } from "./services/api/routineSlice";

function App() {

  const [loadConti, setLoadConti] = useState(true)
  const [available, setAvailable] = useState(false)
  // const { data } = useGetIpQuery()
  const [data, setData] = useState<any>(null);
  const [getCon] = useLazyGetContinentQuery()

  const getIp = async () => {
  }

  useEffect(() => {
    Aos.init({
      offset: 50,
      duration: 1000,
    });

    if(!data)
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setData(data));

    const permitted = ["NG", "FR", "DE", "CA", "US", "GB"]
    // console.log("app useeffect")

    const getConti = async (ip: any) => {
      getCon(ip)
        .then((res: any) => {
          if (res.isSuccess) {
            console.log(res.data);
            if (permitted.includes(res.data.country_code) || !res.data.country_code) {
              localStorage.setItem('COUNTRY_CODE', res.data.country_code);
              setLoadConti(false)
            } else {
              setAvailable(true)
            }
          }
        })
    }

    if (data) {
      getConti(data.ip)
    }
  }, [getCon]);


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
            <Route path="/educators" element={<Authors />} />
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
