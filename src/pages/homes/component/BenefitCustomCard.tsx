import React from "react";
import { BenefitCustomCardprop } from "../../../types/types";

const BenefitCustomCard: React.FC<BenefitCustomCardprop> = ({
  title,
  desc,
  img,
  col,
}) => {
  return (
    <div
      className={`w-[94%] p-5 border hover:scale-[1.02] ease-in duration-300 rounded-[10px] group ${
        col == 1
          ? `shadow-[inset_0px_0px_15px_0px_rgba(234,57,189,0.50)]`
          : col == 2
          ? `shadow-[inset_0px_0px_15px_0px_rgba(132,72,186,0.50)]`
          : `shadow-[inset_0px_0px_15px_0px_rgba(105,181,240,0.50)]`
      }`}
    >
      <div className="flex justify-between items-center w-full h-[220px]">
        <h1
          className={`text-[40px] font-[750] ${
            col == 1
              ? `text-[rgba(234,57,189,1)]`
              : col == 2
              ? `text-[rgba(132,72,186,1)]`
              : `text-[rgba(105,181,240,1)]`
          }`}
        >
          {title}
        </h1>
        <img src={img} className="group-hover:scale-[1.05] duration-300" />
      </div>
      <p className="mb-10 text-gray-900 font-inter text-[20px]">{desc}</p>
    </div>
  );
};

export default BenefitCustomCard;
