import React, { useState } from "react";
// import demoimg from "../../../images/homeimg/demoimg.png";
import VideoPlayer from './VideoPlayer'
import {
  AiOutlinePauseCircle,
  AiOutlinePlayCircle,
} from 'react-icons/ai';

function Demo() {

  return (
    <div className="bg-[#F2EDFF] py-16 px-32">
      <div className="border h-[500px] w-[750px] flex flex-col items-center justify-center mx-auto rounded-[56px] relative">
        <div className="overflow-hidden">
          {<VideoPlayer />}
        </div>
      </div>
      <div className="px-10 mt-7 w-full border">
        <span className="text-main font-[700]">The Experience</span>
      </div>
    </div>
  );
}

export default Demo;
