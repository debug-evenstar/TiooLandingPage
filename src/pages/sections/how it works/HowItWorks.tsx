import React from "react";
import one from "./images/1.png";
import two from "./images/2.png";
import three from "./images/3.png";
import four from "./images/4.png";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";

function HowItWorks() {
  return (
    <div className=" w-full h-[459px]  sm:h-[559px] bg-[#F8F4F4] px-8 sm:px-20 py-10  relative ">
      <h1 className=" text-center sm:text-left font-[600] text-[24px] sm:text-[32px] text-[#4F46E5]">
        How It Works &rarr;
      </h1>

      {/* main1 */}
      <div className="m-[auto] h-[220px] sm:h-full  w-full sm:w-[400px] flex flex-col justify-between">
        <div className=" w-full h-[40px]  sm:h-[121px]   relative flex gap-5 items-center ">
          <img
            className="h-[20px] sm:h-[40px] w-[20px] sm:w-[40px] absolute top-[-17px] left-[-20px]"
            src={one}
          />
          <img className="h-full w-[75px] sm:w-[132px]" src={img1} />
          <p className="font-[500] text-[14px] sm:text-[18px]">
            Sign your child up on Tioo{" "}
          </p>
        </div>
        <div className="w-full h-[40px]  sm:h-[121px]   relative flex  gap-5 items-center">
          <img
            className="h-[20px] sm:h-[40px] w-[20px] sm:w-[40px] absolute top-[-15px] left-[-15px]"
            src={three}
          />
          <img className="h-full w-[75px] sm:w-[132px]" src={img3} />
          <p className="font-[500] text-[14px] sm:text-[18px]">
            Choose a lesson and start learning!{" "}
          </p>
        </div>{" "}
      </div>
      {/* main2 */}
      <div className="flex-col sm:flex-row flex  w-full h-[220px] sm:h-[121px] m-[auto] relative top-[-130px] sm:top-[-320px] justify-between">
        <div className="w-full sm:w-[400px] h-[40px]  sm:h-[121px]   relative flex gap-5 items-center">
          <img
            className="h-[20px] sm:h-[40px] w-[20px] sm:w-[40px] absolute top-[-15px] left-[-15px]"
            src={two}
          />
          <img className="h-full w-[132px]" src={img2} />
          <p className="font-[500] text-[14px] sm:text-[18px]">
            Get access to school curriculum and co-curriculum contents
          </p>
        </div>
        <div className="w-full sm:w-[400px] h-[40px]  sm:h-[121px]   relative  flex gap-5 items-center">
          <img
            className="h-[20px] sm:h-[40px] w-[20px] sm:w-[40px] absolute top-[-20px] left-[-19px]"
            src={four}
          />
          <img className="h-full w-[132px]" src={img4} />
          <p className="font-[500] text-[14px] sm:text-[18px]">
            Enjoy game-like lesson slides and real-time feedback!{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
