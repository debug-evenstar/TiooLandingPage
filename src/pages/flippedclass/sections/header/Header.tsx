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
    <div className="relative px-20 pt-32 pb-16 flippedbgimg">
      <div className=" bg-[#0E096C] rounded-[24px] w-full flex px-10 pt-16 pb-32 box-border gap-5">
        <div>
          <h1 className="text-[52px] font-[600] text-[#FFF]">
            Revolutionizing Modern Learning;{" "}
            <span className="text-[#EC2958] text-[52px] font-[600]">
              The Flipped Classroom Experience
            </span>
          </h1>
          <p className="text-[#FFF]">
            According to a recent Schoology on the state of digital learning,
            28.5 percent of educators used some sort of flipped learning during
            the 2018-19 school year. The flipped classroom model improves
            student outcomes by increasing student engagement, increasing
            learning experiences, and supporting meaningful construction of
            active knowledge and experiential learning.
          </p>
        </div>
        <img
          className="h-[450px] w-[430px] object-cover rounded-[16px]"
          src={headimg}
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
