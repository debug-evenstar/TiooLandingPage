import React from "react";
import SectionLayout from "../../../../layouts/SectionLayout";
import { flippedData } from "../../data/data";

function Flipped() {
  return (
    <SectionLayout>
      <h1 className="text-[52px] font-[600] mb-12">
        Flipped Classroom:
        <br /> The Essence
      </h1>
      <div className="flex gap-5">
        {flippedData?.map((item) => (
          <div className="w-[400px] h-[400px] bg-[#E3E2FF] relative rounded-[16px] p-[10px] ">
            <div className=" bg-[#FFF] rounded-[100px] h-[120px] w-[120px] relative m-[auto] top-[-60px] overflow-hidden flex justify-center items-center">
              <img className="w-[100px] h-[100px]" src={item.img} />
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
