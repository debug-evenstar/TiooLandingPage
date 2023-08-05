import React from "react";
import { offerData } from "../../../../data/data";

function Offer() {
  return (
    <div className=" pl-0 py-4  sm:p-20 sm:py-14 relative w-full mt-0 sm:mt-16 h-[680px] sm:h-[219px] bg-[#0E096C] mb-14">
      <div className="relative w-full h-full sm:h-[250px] top-0 sm:top-[30px]  flex flex-col justify-right items-center sm:flex-row sm:justify-center gap-3 sm:gap-10   ">
        {offerData?.map((item, ind) => (
          <div
            key={ind}
            className=" w-[70%] sm:w-[250px] h-[350px] sm:h-full flex flex-col gap-5 justify-center items-center bg-[#FFF] rounded-[8px] shadow-lg border border-[#0E096C] p-5 sm:p-2"
          >
            <img
              className="w-[24px] sm:w-[48px] h-[24px] sm:h-[48px]"
              src={item.img}
              alt=""
            />
            <h3>{item.title}</h3>
            <p className="text-[12px] sm:text-[14px] text-center">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offer;
