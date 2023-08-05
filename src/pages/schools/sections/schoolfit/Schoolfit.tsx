import React from "react";
import SchoolfitCard from "./SchoolfitCard";
import { SChoolFitData } from "../../../../data/data";

function Schoolfit() {
  return (
    <div className="relative w-full px-5 py-0 sm:py-5 sm:px-20">
      <div className="w-full ">
        <h1 className="font-[poppins] font-[600] text-[24px] sm:text-[42px] text-[rgba(3, 0, 54, 0.74)] mb-4 ">
          How your School Fits in
        </h1>
      </div>
      {SChoolFitData?.map((item, ind) => (
        <SchoolfitCard
          key={ind}
          id={item.id}
          h1={item.h1}
          h2={item.h2}
          p1={item.p1}
          p2={item.p2}
          img={item.img}
          rightrender={item.rightrender}
        />
      ))}
    </div>
  );
}

export default Schoolfit;
