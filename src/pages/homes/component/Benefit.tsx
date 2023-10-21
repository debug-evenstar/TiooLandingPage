import React from "react";
import BenefitCustomCard from "./BenefitCustomCard";
import { benefitData } from "../../../data/data";
import Featuredbook from "./Featuredbook";
import zig from "../../../images/homeimg/bgzigzag.png";

function Benefit() {
  return (
    <>
      <div className="px-4 lg:px-16 py-10 ">
        <div className="lg:grid w-full lg:grid-cols-2 lg:gap-5 lg:px-4 ">
          <div className="flex flex-col items-center justify-center mb-4 lg:mb-0 lg:p-14">
            <h1 className="text-[rgba(3,0,54,0.74)] text-[30px] lg:text-[50px] font-[700]">
              Why Tioo?
            </h1>
            <p className="text-[18px] lg:text-[20px] font-inter font-[400] text-center">
              Transform learning into an exciting and interactive experience.
            </p>
          </div>
          {benefitData.map((item: any,index: number) => (
            <BenefitCustomCard
              key={index}
              col={item.col}
              desc={item.desc}
              title={item.title}
              img={item.img}
            />
          ))}
        </div>
        <Featuredbook />
      </div>
      <img src={zig} alt="" className="w-full mt-10" />
    </>
  );
}

export default Benefit;
