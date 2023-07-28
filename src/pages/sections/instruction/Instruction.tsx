import React from "react";
import num1 from "../../images/1.png";
import bg from "../../../images/bgmc.png";
import Button from "../../../components/components/Button";
import { InstructionData } from "../../../data/data";
import image from "../../../images/instrlogo.png";

function Instruction() {
  const handleClick = () => {
    console.log("Do something");
  };
  return (
    <div className="h-[816px] w-full bg-[#FFEBE9] pt-32 relative">
      <img src={bg} className="absolute rotate-[]  top-[0px]" />
      <img
        className="absolute top-[40px] right-[10px] w-[285px] h-[213px]"
        src={image}
      />
      <div className="w-[50%] ml-[30rem] pl-[50px] ">
        <h1 className="text-[56px] font-[poppins] font-[600] mb-10">
          How It Works
        </h1>
        <ol className="  list-none leading-[normal] mb-16">
          {InstructionData?.map((item) => (
            <li className="mt-6">
              <div className="flex gap-8 items-center">
                <img className="w-[80px] h-[80px]" src={item.image} />
                <p className="font-[poppins] text-[24px] leading-normal font-[500]">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <div className="h-[50px] w-[218px]">
          <Button text1="Get Started" onclick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default Instruction;
