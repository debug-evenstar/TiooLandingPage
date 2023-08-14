import React, { useState } from "react";
import SectionLayout from "../../../../layouts/SectionLayout";
import headimg from "./images/headsideimg.png";

function Header() {
  const [active, setActive] = useState(false);
  const [readmore, setReadmore] = useState(false);

  const handleClick = () => {
    console.log("Do something");
  };
  return (
    <div className="relative px-3 pt-20 pb-16 sm:px-20 sm:pt-32 flippedbgimg">
      <div className=" bg-[#0E096C] rounded-[10px] sm:rounded-[24px] w-full flex flex-col sm:flex-row px-3 sm:px-10 pt-16 pb-10 sm:pb-32 box-border gap-5">
        <div>
          <h1 className="text-center sm:text-left text-[28px] sm:text-[52px] font-[600] text-[#FFF]">
            Revolutionizing Modern Learning;{" "}
            <span className="text-[#EC2958] text-[28px] sm:text-[52px] font-[600]">
              The Flipped Classroom Experience
            </span>
          </h1>
          <p className="text-[#FFF] text-center sm:text-left">
            According to a recent Schoology on the state of digital learning,
            28.5 percent of educators used some sort of flipped learning during
            the 2018-19 school year. The flipped classroom model improves
            student outcomes by increasing student engagement, increasing
            learning experiences, and supporting meaningful construction of
            active knowledge and experiential learning.
          </p>
        </div>
        <img
          className="h-[279px] sm:h-[450px] w-[430px] object-cover rounded-[16px]"
          src={headimg}
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
