import React from "react";
import Button from "../../../../components/components/Button";
import offerimg from "./image/offerimg.png";

function Offer2() {
  const handleclick = () => {};
  return (
    <div className="flex-col pl-0 py-0 sm:flex-row sm:p-20 sm:py-14 relative w-full h-[vh] flex  flex-wrap gap-8 mt-0 sm:mt-32">
      <div className="hidden sm:block    w-[40%] h-[400px] relative">
        <img
          className=" absolute left-0 top-0 w-[90%] h-[90%] rounded-[10px]"
          src={offerimg}
          alt=""
        />
      </div>
      <div className="   w-full sm:w-[57%] flex flex-col gap-2">
        <div className="w-full px-4 sm:px-0">
          <h3 className="font-[600] text-[29px] sm:text-[47px]">
            What We Offer
            <span className="text-[#EC2958] font-[600] ml-3 text-[28px] sm:text-[47px]">
              Schools
            </span>
          </h3>
          <p className="font-[400] text-[18px] sm:text-[18px] mt-2">
            Our platform offer schools and teachers the comfort of curating and
            organizing lesson contents in seconds! Also, with our AI, teachers
            can access instructions and varying ways to teach a lesson. Lessons
            can also be generated based on any curricula (British, American or
            Nigerian)
          </p>
          <p className="font-[400] text-[18px] sm:text-[18px] mt-2">
            And what's more? With our platform, teachers have the option of
            printing these classroom activities or sharing them with students
            who now access these lessons in a gamified and interactive format.
          </p>
        </div>
        <div className="w-full px-4 sm:px-0">
          <div className="w-[212px]">
            <Button text1="Get Started" hover={false} onclick={handleclick} />
          </div>
        </div>
      </div>
      <div className="block sm:hidden    w-[348px] h-[228px] relative px-4">
        <img
          className=" absolute left-0 top-0 w-full h-[90%] rounded-[10px] mx-4"
          src={offerimg}
          alt=""
        />
      </div>
    </div>
  );
}

export default Offer2;
