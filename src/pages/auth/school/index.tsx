import React, { useState } from "react";
import SchoolTypeScreen from "./SchoolType";
import NamingTypeScreen from "./NamingType";

const SchoolSignupIndex = () => {
  const [open, setOpen] = useState(3);

  const handleOpen = (value: number) => {
    setOpen(open === value ? value : value);
  };
  return( 
  <>
    {open === 3? <SchoolTypeScreen openNext={handleOpen}/> : ""}
    {open === 4? <NamingTypeScreen openNext={handleOpen}/> : ""}
  </>
  )
};

export default SchoolSignupIndex;
