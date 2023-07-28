import React from "react";
import { GradeData } from "../../data/data";

function Grades() {
  return (
    <div className="w-full relative  px-5 sm:px-20 py-10 bg-[#F8F4F4] ">
      <h1 className="font-[poppins] font-[600] text-[24px] sm:text-[56px] text-center mb-6">
        We cover different Grades
      </h1>
      <div className="flex flex-col gap-5 sm:flex sm:flex-row justify-center sm:justify-between  sm:gap-10 ">
        {GradeData?.map((item, ind) => (
          <div
            className={`h-[412px] sm:h-[462px] w-full sm:w-[375px] rounded-[16px] p-[11px] shadow-md bg-[#FFF] border-solid border-1 border-black ${
              ind === 1 && `h-[412px] sm:h-[487px]`
            }`}
          >
            <div className="h-[284px] w-full  rounded-[8px]">
              <img className="w-full h-full" src={item.img} />
              <h1 className="text[18px] sm:text-[24px] font-[600] my-3">
                {item.heading}
              </h1>
              <p className="text-[12px] sm:text-[16px] font-[500]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grades;
