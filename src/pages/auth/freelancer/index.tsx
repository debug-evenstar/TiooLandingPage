import React, { useState } from "react";
import FreelanceSignupScreen from "./Signup";

const FreelanceSignupIndex = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value: number) => {
    setOpen(open === value ? value : value);
  };
  return( 
  <>
    {open === 1? <FreelanceSignupScreen openNext={handleOpen}/> : ""}
  </>
  )
};

export default FreelanceSignupIndex;
