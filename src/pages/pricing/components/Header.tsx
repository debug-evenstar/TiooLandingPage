import React from "react";
import pricingimg from "../../../images/pricingimg/pricingbg.png";
import imgbg from "../../../images/pricingimg/img bg.png";
import book from "../../../images/pricingimg/book.png";

function Header() {
  return (
    <div className="w-full px-3 lg:px-16 mt-28 rounded">
      <div className="bg-[#0E096C] rounded-[48px] h-[250px] relative flex gap-4 text-white">
        <img
          src={pricingimg}
          alt="price"
          className="hidden lg:block rounded-l-[48px] h-full object-cover "
        />
        <img src={book} alt="book" className="absolute z-[2] right-8 top-12 lg:right-16  lg:top-12" />
        <img
          src={imgbg}
          alt="background"
          className="absolute bottom-0 h-full right-0 rounded-[48px] "
        />
        <div className="lg:w-[500px] px-4 lg:px-0 h-full flex flex-col justify-center gap-4">
          <h1 className="lg:text-[40px] w-[80%] lg:w-full text-2xl font-[750] z-[4] lg:leading-[50px]">
            One subscription, Unlimited access
          </h1>
          <p className=" text-[#E4E1E1] text-[16px] font-inter">
            A single subscription gives you access to all the gamified textbooks
            and workbooks available in our library.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
