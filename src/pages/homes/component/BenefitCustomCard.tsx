import React from "react";
import { BenefitCustomCardprop } from "../../../types/types";

const BenefitCustomCard: React.FC<BenefitCustomCardprop> = ({
  title,
  desc,
  img,
  col,
  
}) => {
  return (
    <div className="hover:scale-[1.02] mb-3 sm:mb-0 ease-in group hover:shadow-[0_0_30px_6px_rgba(0,0,0,0.1)] duration-300 w-full sm:w-[94%] rounded-[10px]">
    <div
      className={`p-5 rounded-[10px] h-full bg-white border-2 border-white group ${
        col === 1
          ? `shadow-[inset_0px_0px_15px_0px_rgba(234,57,189,0.50)]`
          : col === 2
          ? `shadow-[inset_0px_0px_15px_0px_rgba(132,72,186,0.50)]`
          : `shadow-[inset_0px_0px_15px_0px_rgba(105,181,240,0.50)]`
      }`}
    >
      <div className="flex justify-between items-center mb-2 sm:mb-0 w-full h-auto sm:h-[220px]">
        <h1
          className={`text-[30px] sm:text-[40px] font-[750] ${
            col === 1
              ? `text-[rgba(234,57,189,1)]`
              : col === 2
              ? `text-[rgba(132,72,186,1)]`
              : `text-[rgba(105,181,240,1)]`
          }`}
        >
          {title}
        </h1>
        <img src={img} alt="" className="group-hover:scale-[1.05]  w-[4rem] sm:w-auto duration-300" />
      </div>
      <p className="mb-10 text-gray-900 font-inter text-[18px] sm:text-[20px]">{desc}</p>
    </div>
    </div>
  );
};

export default BenefitCustomCard;
