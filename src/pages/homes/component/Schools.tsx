import React from "react";
import schimg from "../../../images/homeimg/schoolimg.png";
import { Link } from "react-router-dom";
import { SchoolData } from "../../../data/data";
import { Button2 } from "../../../components/Ui/Button";

function Schools() {
  return (
    <div className="w-full px-20 py-16 gradient">
      <div className="flex flex-col items-center justify-center w-full ">
        <h1 className="text-[#1E1E1E] text-[48px] font-[600]">
          Tioo For schools
        </h1>
        <p className="text-[18px] font-[400]">
          Onboard your school on Tioo today{" "}
        </p>
      </div>
      <div className="flex gap-8 mt-8 ">
        <div className="flex-1 bg-[#FFF] h-[600px] rounded-[30px] flex items-center">
          <img src={schimg} className="w-full h-[60%] object-cover" />
        </div>
        <div className="flex-1 ">
          {SchoolData?.map((items) => (
            <div key={items.id} className=" border-[#87909E] border-b-2 mt-5">
              <h1 className="text-[28px] font-[750] text-[rgba(3,0,54,0.74)] mb-4">
                {items.title}
              </h1>
              <p className="text-[14px] sm:text-[16px] font-[400] mb-5 text-[rgba(3,0,54,0.74)]">
                {items.desc}
              </p>
            </div>
          ))}
          <div className="w-[200px] mt-10">
            <Button2 text1="Get Started" onclick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schools;
