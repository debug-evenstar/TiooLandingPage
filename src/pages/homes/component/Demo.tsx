import React from "react";
// import demoimg from "../../../images/homeimg/demoimg.png";
import VideoPlayer from './VideoPlayer'

function Demo() {

  return (
    <div className="bg-[#F2EDFF] py-4 sm:md:py-16 px-4 sm:md:px-32">
      <div className="border sm:md:h-[500px] sm:md:w-[750px] flex flex-col items-center justify-center mx-auto rounded-[56px] relative">
        <div className="overflow-hidden">
          {<VideoPlayer />}
        </div>
      </div>
      <div className="sm:md:px-10 sm:md:mt-7 mt-4 w-full border">
        <span className="text-main font-[500] sm:md:font-[700]">The Experience</span>
      </div>
    </div>
  );
}

export default Demo;
