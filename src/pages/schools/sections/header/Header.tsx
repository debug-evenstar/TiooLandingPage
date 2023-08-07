import React, { useState } from "react";
import headerimg from "./image/headerimg1.png";
import Button from "../../../../components/components/Button";
import CenterModal from "../../../../components/components/CenterModal";
import DiscountModal from "../../../../components/components/DiscountModals";
import Getstarted from "../../../../components/components/Getstarted";

function Header() {
  const [active, setActive] = useState(false);
  const handleclick = () => {
    setActive(true);
  };
  return (
    <>
      <div className="flex-col pl-0 py-24 sm:flex-row  sm:py-14 relative w-full h-[vh] flex  flex-wrap gap-8 mt-0 sm:mt-10 sm:px-20  ">
        <div className=" hidden sm:block   w-[40%] h-[440px] relative">
          <div className="absolute rounded-[10px] w-[90%] h-[90%] right-0 bottom-0 gradientbg  "></div>
          <img
            className="absolute left-0 top-0 w-[90%] h-[90%] rounded-[10px]"
            src={headerimg}
            alt=""
          />
        </div>
        <div className="  w-full sm:w-[57%] flex flex-col gap-4 ">
          <div className="w-full p-3">
            <h3 className="font-[600] text-[30px] sm:text-[47px] text-center sm:text-left text-[#45426a] leading-[130%]">
              Transform Your School With Our{" "}
              <span className="text-[#EC2958] font-[600] text-[30px] sm:text-[47px] ml-3 ">
                AI-Powered Resource Centre
              </span>
            </h3>
            <p className="font-[400] text-[18px] mt-2 text-center sm:text-left text-[#45426a]">
              Generate lesson notes, class activities, and assessment questions
              in seconds with the option of sharing them with students! Level up
              your institution's education with our cutting-edge smart resource
              centre fuelled by AI.
            </p>
          </div>
          <div className="flex justify-center w-full sm:block">
            <div className="w-[70%] flex flex-col justify-center sm:block sm:w-[312px]  ">
              <Button text1="Get Started" hover={false} onclick={handleclick} />
              <p className="font-[600] text-[12px] sm:text-[16px] text-center text-[#ECAC0E] sm:text-left">
                Register & onboard your school today in preparation for the new
                school year and get a special discount offer
              </p>
            </div>
          </div>
        </div>
        <div className=" block sm:hidden   w-full sm:w-[40%] h-[380px] relative ">
          <div className="absolute rounded-[10px] w-[80%] h-[70%] right-5 bottom-14 gradientbg   "></div>
          <img
            className="absolute left-5 top-10 w-[80%] h-[70%] rounded-[10px]"
            src={headerimg}
            alt=""
          />
        </div>
      </div>
      <CenterModal
        // variant={large}
        isOpen={active}
        onClose={() => {
          setActive(false);
        }}
      >
        <Getstarted
          close={() => {
            setActive(false);
          }}
        />
      </CenterModal>
    </>
  );
}

export default Header;
