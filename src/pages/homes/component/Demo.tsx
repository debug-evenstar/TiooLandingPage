import React from "react";
import demoimg from "../../../images/homeimg/demoimg.png";

function Demo() {
  return (
    <div className="bg-[#F2EDFF] py-16 px-32">
      <div className="bg-[#0E096C] h-[500px] w-[750px] mx-auto rounded-[56px] relative">
      
        <img src={demoimg} className="absolute left-10 bottom-10" />
      </div>
      <div className="px-10 mt-7 w-full border">
        <span className="text-main font-[700]">The Experience</span>
      </div>
    </div>
  );
}

export default Demo;
