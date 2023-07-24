import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupIndex from './pages/auth/SignupIndex';
import SchoolSignupIndex from './pages/auth/school';
import LoginScreen from './pages/auth/Login';
import ParentSignupIndex from './pages/auth/parent';
import FreelanceSignupIndex from './pages/auth/freelancer';
import ForgetPasswordScreen from './pages/auth/ForgetPass';
import ResetPasswordScreen from './pages/auth/ResetPass';
import StudentSignup from './pages/auth/student/Signup';
import TeacherSignup from './pages/auth/teacher/Signup';
import VerifyEmailScreen from './pages/auth/VerifyEmail';
import AccountVerify from './pages/auth/AccountVerify';
import SchoolSignup from './pages/auth/school/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* auth routes */}
        <Route path="/" element={<SignupIndex/>}/>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/school' element={<SchoolSignup/>}/>
        <Route path='/school-complete' element={<SchoolSignupIndex/>}/>
        <Route path='/freelancer' element={<FreelanceSignupIndex/>}/>
        <Route path='/parent' element={<ParentSignupIndex/>}/>
        <Route path='/verify-email' element={<VerifyEmailScreen/>}/>
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
