import React from "react";
import { Button2 } from "../../../components/Ui/Button";
import featuredBook from '../../../images/homeimg/featuredbook.png';
function Featuredbook() {
  return (
    <div className="bg-[#E3E2FF] w-full md:lg:px-10 px-4 rounded-[20px] mt-24 sm:md:mt-52 relative pt-40 pb-20">
      <div className=" absolute  h-[200px]  w-full left-0 top-[-100px] md:lg:top-[-65px] flex justify-center">
        <div className="bg-[#FFF] w-[90%] sm:md:lg:w-[70%] h-full rounded-[20px] relative flex justify-center items-center">
          <div className="sm:md:h-[130px] sm:md:w-[130px] h-[60px] w-[60px] z-10 bg-[#FBCECE] bottom-[15px] left-[5px] rounded-[100px] absolute"></div>
          <div className="sm:md:h-[130px] sm:md:w-[130px] h-[60px] w-[60px] z-20 bottom-[40px] left-[30px] md:lg:left-[95px] bg-[rgba(79,70,229,0.60)] rounded-[100px] absolute"></div>
          <div className="sm:md:h-[130px] sm:md:w-[130px] h-[60px] w-[60px] z-10 bottom-[76px] left-[70px] md:lg:left-[175px] bg-[rgba(120,253,216,0.60)] rounded-[100px] absolute"></div>
          <h1 className="text-[30px] sm:md:text-[40px] font-[750] relative: sm:md:mt-0 mt-16 z-20 text-[rgba(3,0,54,0.74)]" data-aos="fade-down">
            Featured Book
          </h1>
        </div>
      </div>
      <div className="flex sm:md:flex-row flex-col sm:md:gap-10 sm:md:mt-10 justify-between w-full">
        <div className="flex flex-col gap-5 order-last sm:md:order-first">
          <h1 className="text-[30px] sm:md:text-[40px] mt-4 sm:md:mt-0 font-[750] w-full sm:md:w-[80%]" data-aos="fade-right">Early Coding For Kids</h1>
          <p className="text-[18px] font-[500]" data-aos="fade-right">
            Dive into our flagship textbook, "Early Coding For Kids," designed
            to introduce young learners to the exciting world of coding.
          </p>
          <p className="text-[18px] font-[500]" data-aos="fade-right">
            Discover interactive lessons, real-world examples, and hands-on
            activities that make coding accessible and fun for students of all
            ages
          </p>
          <div className=" w-full sm:md:w-[200px]">
            <Button2 text1="Preview book" onclick={() => {window.open(process.env.REACT_APP_PREVIEW_LINK,'_blank')}} />
          </div>
        </div>
        <div className="sm:md:flex-1 sm:md:ml-[10rem]">
          <div className="rounded-[32px] order-first sm:md:lg:order-last sm:md:w-[440px] flex items-center justify-center text-white">
            <img src={featuredBook} alt="" className="w-full"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featuredbook;
