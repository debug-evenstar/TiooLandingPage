import { useEffect, lazy, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupIndex from "./pages/auth/SignupIndex";
import SchoolSignupIndex from "./pages/auth/school";
import LoginScreen from "./pages/auth/Login";
import ForgetPasswordScreen from "./pages/auth/ForgetPass";
import ResetPasswordScreen from "./pages/auth/ResetPass";
import StudentSignup from "./pages/auth/student/Signup";
import TeacherSignup from "./pages/auth/teacher/Signup";
import AccountVerify from "./pages/auth/AccountVerify";
import SchoolSignup from "./pages/auth/school/Signup";
import FreelanceSignupScreen from "./pages/auth/freelancer/Signup";
import FreelanceNamingTypeScreen from "./pages/auth/freelancer/NamingType";
import ParentSignupScreen from "./pages/auth/parent/Signup";
import AOS from "aos";
import "aos/dist/aos.css";
import Homes from "./pages/homes";
import Pricing from "./pages/pricing";
import Authors from './pages/authors';
import Library from './pages/library';
import LibraryDetails from "./pages/library/details";
import CookieComponent from './components/cookie';
import ParentCompleteSignupScreen from "./pages/auth/parent/CompleteSignup";
import { ThreeCirclesLoading } from "./components/Ui/Loading";
import { useGetIpQuery, useLazyGetContinentQuery } from "./services/api/routineSlice";

// const Pricing = lazy(() => import('./pages/pricing'));
// const Authors = lazy(() => import('./pages/authors'));
// const Homes = lazy(() => import('./pages/homes'));
// const Library = lazy(() => import('./pages/library'));

function App() {
  const [loadConti, setLoadConti] = useState(true)
  const [available, setAvailable] = useState(false)
  const {data} = useGetIpQuery()
  const permitted = ["NG", "FR", "DE", "CA", "US", "GB" ]
  const [getCon] = useLazyGetContinentQuery()
  const getConti = async(ip:any) => {
    getCon(ip)
    .then((res:any) => {
      if(res.isSuccess){
        console.log(res.data);
        if(permitted.includes(res.data.country_code)){
          setLoadConti(false)
        }else{
          setAvailable(true)
        }
      }
    })
  }
  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 1000,
    });
    AOS.refresh();
    if(data){
      getConti(data.ip)
    }
  }, [data]);
  return (
    <div>
      {
        available && <div className="w-full h-screen grid place-content-center text-3xl">
          We're sorry, this service is not available in your country
        </div>
      }
      {
        loadConti && <div className="w-full h-screen flex items-center justify-center">
        <ThreeCirclesLoading size="200" color="#4f46e5" />
      </div>
      }
      {
        !loadConti &&
        <BrowserRouter>
        <CookieComponent />
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/library" element={<Library />} />
          <Route path="/library/details" element={<LibraryDetails />} />
          <Route path="/authors" element={<Authors />} />
          {/* auth routes */}
          <Route path="/signup" element={<SignupIndex />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/school" element={<SchoolSignup />} />
          <Route path="/school-complete" element={<SchoolSignupIndex />} />
          <Route path="/freelancer" element={<FreelanceSignupScreen />} />
          <Route
            path="/freelancer-complete"
            element={<FreelanceNamingTypeScreen />}
          />
          <Route path="/parent" element={<ParentSignupScreen />} />
          <Route
            path="/parent-complete"
            element={<ParentCompleteSignupScreen />}
          />
          <Route path="/account/verify/:id" element={<AccountVerify />} />
          <Route path="/forget" element={<ForgetPasswordScreen />} />
          <Route
            path="/new-password/:id/:email"
            element={<ResetPasswordScreen />}
          />
          <Route path="/student/:id" element={<StudentSignup />} />
          <Route path="/teacher/:id" element={<TeacherSignup />} />
        </Routes>
      </BrowserRouter>
      }
    </div>
  );
}

export default App;
