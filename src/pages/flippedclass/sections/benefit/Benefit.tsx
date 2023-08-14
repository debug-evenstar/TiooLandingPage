import React from "react";
import SectionLayout from "../../../../layouts/SectionLayout";
import { benefitData } from "../../data/data";
import BenefitCard from "./BenefitCard";

function Benefit() {
  return (
    <div className="relative px-4 pt-0 pb-10 sm:px-20 ">
      {benefitData.map((item, ind) => (
        <BenefitCard
          h1={item.h1}
          p1={item.p1}
          img={item.img}
          rightrender={item.rightrender}
          id={item.id}
          key={ind}
        />
      ))}
    </div>
  );
}

export default Benefit;
