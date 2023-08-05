import React from "react";
import { WHYTIOOData } from "../../../../data/data";

function Whytioo3() {
  const bgColor = ["#D5EBFF", "#C6B9FF", "#FED2FE", "#BDBEFD"];
  return (
    <div className="relative w-full px-6 py-6 mt-4 mb-4 sm:mt-10 sm:py-14 sm:mb-14 sm:px-20">
      <h1 className="text-[32px] sm:text-[56px] font-[600] text-center sm: mb-3">
        Why Your{" "}
        <span className=" text-[28px] sm:text-[56px] font-[600] text-[#4F46E5]">
          Students Need Tioo
        </span>
      </h1>
      <div className=" w-full items-center sm:h-[296px] flex flex-col sm:flex-row justify-center gap-10   ">
        {WHYTIOOData?.map((item, ind) => (
          <div
            key={ind}
            className={`w-[300px] h-full flex flex-col gap-5 justify-center items-center p-[10px] ${
              ind == 0
                ? `bg-[#D5EBFF]`
                : ind == 1
                ? `bg-[#C6B9FF]`
                : ind == 2
                ? `bg-[#FED2FE]`
                : ind == 3 && `bg-[#BDBEFD]`
            } rounded-[8px] shadow-lg`}
          >
            <img className="w-[90px] h-[90px]" src={item.img} alt="" />
            <h3 className="text-[16px] font-[600]">{item.title}</h3>
            <p className="text-center text-[13px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Whytioo3;
