import React from "react";
// import demoimg from "../../../images/homeimg/demoimg.png";
import VideoPlayer from './VideoPlayer'

function Demo() {

  return (
    <div className="bg-[#F2EDFF] py-4 lg:py-16 px-4 lg:px-32">
      <div className="border lg:h-[500px] lg:w-[750px] flex flex-col items-center justify-center mx-auto rounded-[56px] relative">
        <div className="overflow-hidden">
          {<VideoPlayer />}
        </div>
      </div>
      <div className="lg:px-10 lg:mt-7 mt-4 w-full border">
        <span className="text-main font-[500] lg:font-[700]">The Experience</span>
      </div>
    </div>
  );
}

export default Demo;
