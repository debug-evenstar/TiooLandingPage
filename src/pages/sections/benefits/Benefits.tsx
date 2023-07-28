import React from "react";
import { BenefitData } from "../../../data/data";
import BenefitCards from "./BenefitCards";
import ButtonCustom from "../../../components/components/ButtonCustom";
import apple from "../../../images/apple.png";
import play from "../../../images/play.png";
import fire from "../../../images/fire.png";

function Benefits() {
  const handleClick = () => {
    console.log("Do something");
  };
  return (
    <div className="w-full relative px-5 sm:px-20 py-10 ">
      <div className="w-full ">
        <h1 className="font-[poppins] font-[600] text-[24px] sm:text-[42px] text-[rgba(3, 0, 54, 0.74)] ">
          Why Tioo?
        </h1>
        <p className="font-[poppins] font-[600] text-[12px] sm:text-[16px]">
          With Tioo, we take your child’s grades and productivity to the next
          level
        </p>
      </div>
      {BenefitData?.map((item, ind) => (
        <BenefitCards
          key={ind}
          id={item.id}
          h1={item.h1}
          h2={item.h2}
          p1={item.p1}
          p2={item.p2}
          img={item.img}
          rightrender={item.rightrender}
        />
      ))}
      <div className="flex gap-2 px-1 mb-4">
        <p className="text-[18px] font-[500] text-[#EC2958] leading-none] ">
          Coming in September
        </p>
        <img src={fire} />
      </div>
      <div className="flex gap-4 sm:gap-10 h-[70px] sm:h-[90px] w-full ">
        <ButtonCustom
          height={25}
          width={220}
          image={play}
          text1="Get app on"
          text2="Google play"
          bg={"2C2C30"}
          onclick={handleClick}
        />
        <ButtonCustom
          image={apple}
          height={25}
          width={220}
          text1="Get app on"
          text2="apple store"
          bg={"2C2C30"}
          onclick={handleClick}
        />
      </div>
    </div>
  );
}

export default Benefits;
