import React from "react";
import Button from "../../../../components/components/Button";
import tioimg from "./image/tiooimg.png";

function Whytioo2() {
  const handleclick = () => {};
  return (
    <div className="flex-col pl-0 py-6 sm:flex-row sm:px-20 sm:py-0 relative w-full h-[vh] flex  flex-wrap gap-8 mt-1 sm:mt-3">
      <div className="   w-full sm:w-[48%] flex flex-col gap-6">
        <div className="w-full px-5 sm:px-0">
          <h3 className="font-[600] text-[28px] sm:text-[47px] text-shade ">
            Flipped
            <span className="text-[#EC2958] font-[600] text-[28px] sm:text-[47px] ml-3">
              Classroom
            </span>
          </h3>
          <p className="font-[400] text-[14px] sm:text-[18px] mt-2">
            Explore the concept of flipped classroom. With our platform,
            students can access lesson notes and intros to each lesson ahead of
            the class, and attune themselves to the lesson concept. Therefore,
            giving teachers enough classroom time for emphasis, activities, and
            special care to students with learning difficulties.
          </p>
          <p className="font-[400] text-[14px] sm:text-[18px] mt-2">
            The goal is to create a seamless and dynamic learning experience
            that maximizes the benefits of both AI and traditional teaching
            approaches.
          </p>
        </div>
        <div className="px-5 w- sm:px-0">
          <div className="w-[212px] h-full">
            <Button text1="Discover More" hover={false} onclick={handleclick} />
          </div>
        </div>
      </div>
      <div className="   w-full sm:w-[48%] h-[228px] sm:h-[400px] relative px-5">
        <img
          className=" w-[100%] sm:w-full h-full rounded-[10px]"
          src={tioimg}
          alt=""
        />
      </div>
    </div>
  );
}

export default Whytioo2;
