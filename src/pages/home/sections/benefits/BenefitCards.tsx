import React from "react";
import { BenefitDataTypes } from "../../../../types/types";
import DummySlideBtn from "../../../../components/components/DummySlideBtn";

const BenefitCards: React.FC<BenefitDataTypes> = ({
  h1,
  h2,
  p1,
  p2,
  img,
  rightrender,
}) => {
  return (
    <div>
      {rightrender ? (
        <div className="   w-full grid grid-cols-[repeat(1fr)] sm:grid-cols-[repeat(2,1fr)] gap-[20px] ">
          <div className="w-full pt-12  sm:pt-28">
            <h1 className="font-[poppins] font-[600] text-[24px] sm:text-[39px] text-[rgba(3, 0, 54, 0.74)] mb-4 sm:mb-8">
              {h1}
            </h1>
            <p className="font-[poppins] font-[600] text-[12px] sm:text-[14px] text-[#7C7B7B]">
              {p1}
            </p>
            {h2 && (
              <h1
                className={` mt-16 font-[poppins] font-[600] text-[24px] sm:text-[42px] text-[rgba(3, 0, 54, 0.74)] mb-4 sm:mb-8`}
              >
                {h2}
              </h1>
            )}
            {p2 && (
              <p className="font-[poppins] font-[600] text-[12px] sm:text-[14px] mt-6 text-[#7C7B7B]">
                {p2}
              </p>
            )}
          </div>
          <div className="">
            <img
              src={img}
              className=" w-[280px] sm:w-[500px] h-[280px] sm:h-[400px] image "
            />
            <DummySlideBtn />
          </div>
        </div>
      ) : (
        <div className="  w-full  grid grid-cols-[repeat(1fr)] sm:grid-cols-[repeat(2,1fr)] gap-[20px] ">
          <div className="hidden sm:block">
            <img src={img} className=" w-[450px] h-[380px] image" />
            <DummySlideBtn />
          </div>
          <div className="w-full pt-12  sm:pt-28">
            <h1 className="font-[poppins] font-[600] text-[24px] sm:text-[39px] text-[rgba(3, 0, 54, 0.74)] mb-4 sm:mb-8">
              {h1}
            </h1>
            <p className="font-[poppins] font-[600] text-[12px] sm:text-[14px] text-[#7C7B7B]">
              {p1}
            </p>
            {h2 && (
              <h1 className=" mt-16 font-[poppins] font-[600] text-[24px] sm:text-[42px] text-[rgba(3, 0, 54, 0.74)] mb-4 sm:mb-8">
                {h2}
              </h1>
            )}
            {p2 && (
              <p className="font-[poppins] font-[600] text-[12px] sm:text-[14px] mt-6 text-[#7C7B7B]">
                {p2}
              </p>
            )}
          </div>
          <div className="block sm:hidden">
            <img
              src={img}
              className=" w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] image "
            />
            <DummySlideBtn />
          </div>
        </div>
      )}
    </div>
  );
};

export default BenefitCards;
