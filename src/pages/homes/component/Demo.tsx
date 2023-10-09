import React, { useState } from "react";
// import demoimg from "../../../images/homeimg/demoimg.png";
import VideoPlayer from './VideoPlayer'
import {
  AiOutlinePauseCircle,
  AiOutlinePlayCircle,
} from 'react-icons/ai';

function Demo() {

  const [ start, setStart ] = useState(false);
  const loader = (ref: any) => {
    if(ref.current && start)
      ref.current.play();
  }
  const toggleStart = () => {
    setStart(!start);
  }

  return (
    <div className="bg-[#F2EDFF] py-16 px-32">
      <div className="bg-[#0E096C] h-[500px] w-[750px] flex items-center justify-center px-10 mx-auto rounded-[56px] relative">
        <div className="overflow-hidden">
          {<VideoPlayer start={start} onLoad={loader}/>}
        </div>
        <button onClick={() => toggleStart()} className="absolute outline-none text-3xl text-blue-700 w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center left-10 bottom-8 shadow-2xl">
          
          <span className="font-[500] text-[#5148e5]">
            { start? <AiOutlinePauseCircle className="text-3xl"/>: <AiOutlinePlayCircle className="text-3xl"/> }
          </span>

        </button>
      </div>
      <div className="px-10 mt-7 w-full border">
        <span className="text-main font-[700]">The Experience</span>
      </div>
    </div>
  );
}

export default Demo;
