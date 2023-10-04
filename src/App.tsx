import { useEffect } from "react";
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

function App() {

  useEffect(() => {
    AOS.init({
      // easing: "ease-out-cubic",
      // once: true,
      offset: 50,
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
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
    </div>
  );
}

export default App;
