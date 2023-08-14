import React from "react";
import { BenefitDataTypes } from "../../../../types/types";

const BenefitCard: React.FC<BenefitDataTypes> = ({
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
        <div className="  w-full  grid grid-cols-[repeat(1fr)] sm:grid-cols-[repeat(2,1fr)] gap-[20px] sm:h-[390px]  mt-5 sm:mt-10">
          <div className="hidden h-full sm:block">
            <img
              src={img}
              className=" w-[479px] h-[390px] rounded-[10px] object-cover"
            />
          </div>
          <div className="w-full pt-3 sm:pt-5">
            <h1 className="font-[poppins] font-[600] text-[18px] sm:text-[39px] text-[rgba(3, 0, 54, 0.74)] mb-4 sm:mb-8 text-shade">
              {h1}
            </h1>
            <div className=" h-[260px] p-8 border-[8px] border-[#998BBF] rounded-[16px]">
              <p className="font-[poppins] font-[500] text-[12px] sm:text-[16px] text-[#7C7B7B]">
                {p1}
              </p>
            </div>
          </div>
          <div className="block sm:hidden">
            <img
              src={img}
              className=" w-full sm:w-[500px] h-[220px] sm:h-full rounded-[10px] object-cover"
            />
          </div>
        </div>
      ) : (
        <div className="   w-full grid grid-cols-[repeat(1fr)] sm:grid-cols-[repeat(2,1fr)] gap-[20px] sm:h-[390px] mt-5 sm:mt-16">
          <div className="w-full pt-3 sm:pt-5">
            <h1 className="font-[poppins] font-[600] text-[18px] sm:text-[39px] text-[rgba(3, 0, 54, 0.74)] mb-4 sm:mb-8 text-shade">
              {h1}
            </h1>
            <div className=" h-[260px] p-8 border-[8px] border-[#998BBF] rounded-[16px]">
              <p className="font-[poppins] font-[500] text-[12px] sm:text-[16px] text-[#7C7B7B]">
                {p1}
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <img
              src={img}
              className=" w-full sm:w-[479px] h-[220px] sm:h-[390px] rounded-[10px] object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BenefitCard;
