import React, { useState } from "react";
import ParentSignupScreen from "./Signup";

const ParentSignupIndex = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value: number) => {
    setOpen(open === value ? value : value);
  };
  return( 
  <>
    {open === 1? <ParentSignupScreen openNext={handleOpen}/> : ""}
  </>
  )
};

export default ParentSignupIndex;
