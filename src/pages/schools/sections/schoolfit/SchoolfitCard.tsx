import React from "react";
import { BenefitDataTypes } from "../../../../types/types";

const SchoolfitCard: React.FC<BenefitDataTypes> = ({
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
        <div className="  w-full  grid grid-cols-[repeat(1fr)] sm:grid-cols-[repeat(2,1fr)] gap-[20px] sm:h-[390px]  mt-5 sm:mt-16">
          <div className="hidden h-full sm:block">
            <img src={img} className=" w-full h-[390px] rounded-[10px]" />
          </div>
          <div className="w-full pt-3 sm:pt-5">
            <h1 className="font-[poppins] font-[600] text-[18px] sm:text-[39px] text-[rgba(3, 0, 54, 0.74)] mb-4 sm:mb-8 text-shade">
              {h1}
            </h1>
            <p className="font-[poppins] font-[500] text-[12px] sm:text-[16px] text-[#7C7B7B]">
              {p1}
            </p>
            {h2 && (
              <h1 className=" mt-16 font-[poppins] font-[600] text-[24px] sm:text-[42px] text-[rgba(3, 0, 54, 0.74)] mb-4 sm:mb-8">
                {h2}
              </h1>
            )}
            {p2 && (
              <p className="font-[poppins] font-[500] text-[12px] sm:text-[16px] mt-6 text-[#7C7B7B]">
                {p2}
              </p>
            )}
          </div>
          <div className="block sm:hidden">
            <img
              src={img}
              className=" w-full sm:w-[500px] h-[280px] sm:h-full rounded-[10px]"
            />
          </div>
        </div>
      ) : (
        <div className="   w-full grid grid-cols-[repeat(1fr)] sm:grid-cols-[repeat(2,1fr)] gap-[20px] sm:h-[390px] mt-5 sm:mt-16">
          <div className="w-full pt-3 sm:pt-5">
            <h1 className="font-[poppins] font-[600] text-[18px] sm:text-[39px] text-[rgba(3, 0, 54, 0.74)] mb-4 sm:mb-8 text-shade">
              {h1}
            </h1>
            <p className="font-[poppins] font-[500] text-[12px] sm:text-[16px] text-[#7C7B7B]">
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
              <p className="font-[poppins] font-[500] text-[12px] sm:text-[16px] mt-6 text-[#7C7B7B]">
                {p2}
              </p>
            )}
          </div>
          <div className="">
            <img
              src={img}
              className=" w-full sm:w-full h-[280px] sm:h-[390px] rounded-[10px]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SchoolfitCard;
