import React, { useState } from "react";
import FreelanceSignupScreen from "./Signup";
import VerifyEmailScreen from "./VerifyEmail";
import NamingTypeScreen from "./NamingType";

const FreelanceSignupIndex = () => {
  const [open, setOpen] = useState(3);

  const handleOpen = (value: number) => {
    setOpen(open === value ? value : value);
  };
  return( 
  <>
    {open === 1? <FreelanceSignupScreen openNext={handleOpen}/> : ""}
    {open === 2? <VerifyEmailScreen openNext={handleOpen}/> : ""}
    {open === 3? <NamingTypeScreen openNext={handleOpen}/> : ""}
  </>
  )
};

export default FreelanceSignupIndex;
