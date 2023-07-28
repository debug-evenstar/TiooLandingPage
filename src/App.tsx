import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupIndex from './pages/auth/SignupIndex';
import SchoolSignupIndex from './pages/auth/school';
import LoginScreen from './pages/auth/Login';
import ForgetPasswordScreen from './pages/auth/ForgetPass';
import ResetPasswordScreen from './pages/auth/ResetPass';
import StudentSignup from './pages/auth/student/Signup';
import TeacherSignup from './pages/auth/teacher/Signup';
import AccountVerify from './pages/auth/AccountVerify';
import SchoolSignup from './pages/auth/school/Signup';
import FreelanceSignupScreen from './pages/auth/freelancer/Signup';
import FreelanceNamingTypeScreen from './pages/auth/freelancer/NamingType';
import ParentSignupScreen from './pages/auth/parent/Signup';
import ParentCompleteSignupScreen from './pages/auth/parent/CompleteSigup';
import LandingPage from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
        {/* auth routes */}
        <Route path="/signup" element={<SignupIndex/>}/>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/school' element={<SchoolSignup/>}/>
        <Route path='/school-complete' element={<SchoolSignupIndex/>}/>
        <Route path='/freelancer' element={<FreelanceSignupScreen/>}/>
        <Route path='/freelancer-complete' element={<FreelanceNamingTypeScreen/>}/>
        <Route path='/parent' element={<ParentSignupScreen/>}/>
        <Route path='/parent-complete' element={<ParentCompleteSignupScreen/>}/>
        <Route path='/account/verify/:id' element={<AccountVerify/>}/>
        <Route path='/forget' element={<ForgetPasswordScreen/>}/>
        <Route path='/new-password/:id/:email' element={<ResetPasswordScreen/>}/>
        <Route path='/student/:id' element={<StudentSignup/>}/>
        <Route path='/teacher/:id' element={<TeacherSignup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
