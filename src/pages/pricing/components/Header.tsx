import React from "react";
import pricingimg from "../../../images/pricingimg/pricingbg.png";
import imgbg from "../../../images/pricingimg/img bg.png";
import book from "../../../images/pricingimg/book.png";

function Header() {
  return (
    <div className="w-full px-16 mt-40 rounded">
      <div className="bg-[#0E096C] rounded-[48px] h-[300px] relative flex gap-4 text-white">
        <img
          src={pricingimg}
          className="rounded-l-[48px] h-full object-cover "
        />
        <img src={book} className="absolute right-16 top-12" />
        <img
          src={imgbg}
          className="absolute bottom-0 right-0 rounded-[48px] "
        />
        <div className="w-[500px] h-full flex flex-col justify-center gap-4">
          <h1 className="text-[40px] font-[750] leading-[50px]">
            One subscription, Unlimited access
          </h1>
          <p className=" text-[#E4E1E1] text-[16px]">
            A single subscription gives you access to all the gamified textbooks
            and workbooks available in our library.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
