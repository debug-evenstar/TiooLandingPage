import React, { useState } from "react";
import ParentSignupScreen from "./Signup";
import VerifyEmailScreen from "./VerifyEmail";
import CompleteSignupScreen from "./CompleteSigup";

const ParentSignupIndex = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value: number) => {
    setOpen(open === value ? value : value);
  };
  return( 
  <>
    {open === 1? <ParentSignupScreen openNext={handleOpen}/> : ""}
    {open === 2? <VerifyEmailScreen openNext={handleOpen}/> : ""}
    {open === 3? <CompleteSignupScreen openNext={handleOpen}/> : ""}
  </>
  )
};

export default ParentSignupIndex;
