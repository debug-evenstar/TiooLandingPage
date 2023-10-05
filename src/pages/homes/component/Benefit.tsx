import React from "react";
import BenefitCustomCard from "./BenefitCustomCard";
import { BenefitCustomCardprop } from "../../../types/types";
import { benefitData } from "../../../data/data";
import Featuredbook from "./Featuredbook";
import zig from "../../../images/homeimg/bgzigzag.png";
import apple from "../../../images/apple.png";
import play from "../../../images/play.png";
import ButtonCustom from "../../../components/components/ButtonCustom";

function Benefit() {
  return (
    <>
      <div className="px-16 py-10 ">
        <p className="">Get the App</p>
        <div className="hidden sm:flex gap-10  h-[60px] w-full      ">
          <ButtonCustom
            height={15}
            width={220}
            image={play}
            // text1="Get app on"
            text2="Google play"
            bg={"2C2C30"}
            onclick={() => {}}
          />
          <ButtonCustom
            image={apple}
            height={15}
            width={220}
            // text1="Get app on"
            text2="apple store"
            bg={"2C2C30"}
            onclick={() => {}}
          />
        </div>
        <div className="grid w-full grid-cols-2 gap-5 px-4 ">
          <div className="flex flex-col items-center justify-center p-14">
            {" "}
            <h1 className="text-[rgba(3,0,54,0.74)] text-[50px] font-[700]">
              Why Tioo?
            </h1>
            <p className="text-[20px] font-inter font-[400] text-center">
              Transform learning into an exciting and interactive experience.
            </p>
          </div>
          {benefitData.map((item) => (
            <BenefitCustomCard
              col={item.col}
              desc={item.desc}
              title={item.title}
              img={item.img}
            />
          ))}
        </div>
        <Featuredbook />
      </div>
      <img src={zig} className="w-full mt-10" />
    </>
  );
}

export default Benefit;
