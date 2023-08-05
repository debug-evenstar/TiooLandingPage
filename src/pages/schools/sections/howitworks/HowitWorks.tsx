import React from "react";
import { HowITWorks } from "../../../../data/data";

function HowitWorks() {
  return (
    <div className="h-[417px] sm:h-[885px] w-full bgimagesmall sm:bgImage pt-0 sm:pt-[7rem] mt-7 sm:mt-0   ">
      <h3 className="text-center font-[600] text-[28px] sm:text-[56px] m-0">
        How It Works
      </h3>
      <div className="w-[325px] sm:w-[751px]    flex flex-col m-[auto] gap-5 mt-[2rem] sm:mt-[7rem]">
        {HowITWorks?.map((item, ind) => (
          <div className="flex items-center w-full gap-4 bg-[#FFF] rounded-[50px] p-2 box-border">
            <img
              className="w-[48px] sm:w-[100px] h-[48px] sm:h-[100px]"
              src={item.img}
              alt=""
            />
            <p className="font-[600] text-[12px] sm:text-[24px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowitWorks;
