import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupIndex from './pages/auth/SignupIndex';
import SchoolSignupIndex from './pages/auth/school';
import LoginScreen from './pages/auth/Login';
import ParentSignupIndex from './pages/auth/parent';
import FreelanceSignupIndex from './pages/auth/freelancer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* auth routes */}
        <Route path="/" element={<SignupIndex/>}/>
        <Route path='/login' element={<LoginScreen/>}/>
        <Route path='/school' element={<SchoolSignupIndex/>}/>
        <Route path='/freelancer' element={<FreelanceSignupIndex/>}/>
        <Route path='/parent' element={<ParentSignupIndex/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
