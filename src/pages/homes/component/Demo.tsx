import React from "react";
import demoimg from "../../../images/homeimg/demoimg.png";

function Demo() {
  return (
    <div className="bg-[#F2EDFF] py-24 px-32">
      <div className="bg-[#0E096C] h-[600px] rounded-[56px] relative">
        <img src={demoimg} className="absolute left-10 bottom-10" />
      </div>
    </div>
  );
}

export default Demo;
