import React, { useState } from "react";
import SchoolSignup from "./Signup";
import VerifyEmailScreen from "./VerifyEmail";
import SchoolTypeScreen from "./SchoolType";
import NamingTypeScreen from "./NamingType";

const SchoolSignupIndex = () => {
  const [open, setOpen] = useState(2);

  const handleOpen = (value: number) => {
    setOpen(open === value ? value : value);
  };
  return( 
  <>
    {open === 1? <SchoolSignup openNext={handleOpen}/> : ""}
    {open === 2? <VerifyEmailScreen openNext={handleOpen}/> : ""}
    {open === 3? <SchoolTypeScreen openNext={handleOpen}/> : ""}
    {open === 4? <NamingTypeScreen openNext={handleOpen}/> : ""}
  </>
  )
};

export default SchoolSignupIndex;
