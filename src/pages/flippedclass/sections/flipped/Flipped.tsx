import React from "react";
import SectionLayout from "../../../../layouts/SectionLayout";
import { flippedData } from "../../data/data";

function Flipped() {
  return (
    <SectionLayout>
      <h1 className="text-[30px] sm:text-[52px] font-[600] mb-12">
        Flipped Classroom:
        <br /> The Essence
      </h1>
      <div className="flex flex-col gap-10 sm:gap-5 sm:flex-row">
        {flippedData?.map((item) => (
          <div className="w-full sm:w-[400px] h-[350px] sm:h-[400px] bg-[#E3E2FF] relative rounded-[16px] p-[10px] ">
            <div className=" bg-[#FFF] rounded-[100px] h-[90px] sm:h-[120px] w-[100px] sm:w-[120px] relative m-[auto] top-[-40px] sm:top-[-60px] overflow-hidden flex justify-center items-center">
              <img
                className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px]"
                src={item.img}
              />
            </div>
            <h3 className="text-center text-[20px] font-[600] mb-2">
              {item.title}
            </h3>
            <p className="text-center text-[16px] font-[400]">{item.desc}</p>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}

export default Flipped;
