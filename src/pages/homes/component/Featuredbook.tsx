import React from "react";
import { Button2 } from "../../../components/Ui/Button";

function Featuredbook() {
  return (
    <div className="bg-[#E3E2FF]  w-full px-10 rounded-[20px] mt-52 relative pt-40 pb-20">
      <div className=" absolute  h-[200px]  w-full left-0 top-[-65px] flex justify-center">
        <div className="bg-[#FFF] w-[70%] h-full rounded-[20px] relative flex justify-center items-center">
          <div className="h-[130px] w-[130px] z-10 bg-[#FBCECE] bottom-[15px] left-[5px] rounded-[100px] absolute"></div>
          <div className="h-[130px] w-[130px] z-20 bottom-[40px] left-[95px] bg-[rgba(79,70,229,0.60)] rounded-[100px] absolute"></div>
          <div className="h-[130px] w-[130px] z-10 bottom-[76px] left-[175px] bg-[rgba(120,253,216,0.60)] rounded-[100px] absolute"></div>
          <h1 className="text-[40px] font-[750] z-20 text-[rgba(3,0,54,0.74)]" data-aos="fade-down">
            Featured Book
          </h1>
        </div>
      </div>
      <div className="flex gap-10 mt-10 justify-between ">
        <div className="flex flex-col flex-1 gap-5 ">
          <h1 className="text-[40px] font-[750]" data-aos="fade-right">Early Coding For Kids</h1>
          <p className="text-[18px] font-[500]" data-aos="fade-right">
            Dive into our flagship textbook, "Early Coding For Kids," designed
            to introduce young learners to the exciting world of coding.
          </p>
          <p className="text-[18px] font-[500]" data-aos="fade-right">
            Discover interactive lessons, real-world examples, and hands-on
            activities that make coding accessible and fun for students of all
            ages
          </p>
          <div className=" w-[200px]">
            <Button2 text1="Preview book" onclick={() => {}} />
          </div>
        </div>
        <div className="flex-1 ml-[14rem]">
          <div className="bg-[#8896CA]  rounded-[32px] w-[400px] h-[450px] flex items-center justify-center text-white">
            <p>Textbook’s image</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featuredbook;
