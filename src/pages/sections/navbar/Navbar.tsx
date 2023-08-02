import React, { useState } from "react";
import { NavData } from "../../../data/data";
import Button from "../../../components/components/Button";
import logo from "../../../images/tioologo.png";
import { AiOutlineDown } from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";
import FlashButton from "../../../components/components/FlashBtn";
import CenterModal from "../../../components/components/CenterModal";
import DiscountModal from "../../../components/components/DiscountModals";

function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    console.log("Do something");
  };
  return (
    <>
      <div className=" w-full relative h-[60px] ">
        <img
          src={logo}
          className="absolute left-[2px] sm:left-[22px] top-[5px] w-[56px] sm:w-[130px] h-[46px] sm:h-[100px]"
        />
        <div className="block sm:hidden absolute top-[20px] right-[10px] w-[32px] h-[32px]">
          <HiMenuAlt2 className="w-full h-full" />
        </div>
        <h5 className="absolute top-[50px] sm:top-[110px] left-[22px] sm:left-[65px] font-[600] text-[12px] sm:text-[18px] text-[#4F46E5]">
          BETA
        </h5>
        {/* <div className=" flex w-[650px] m-[auto] h-full  gap-[24px] items-center ">
          {NavData?.map((item, ind) => (
            <a
              href="#"
              className={`font-[600] font-[poppins] text-[18px] flex items-center gap-2 ${
                ind == 0 && `text-[#4F46E5]`
              }`}
            >
              {item.text}
              <br />
              {ind === NavData.length - 1 && <AiOutlineDown />}
            </a>
          ))}
        </div> */}
        <div className="hidden sm:flex pt-5 w-[650px] m-[auto] h-full  gap-[24px] items-center   ">
          {NavData?.map((item, ind) => (
            <div className="   h-full flex items-center flex-col ">
              <a
                href="#"
                className={`font-[600] font-[poppins] text-[18px] flex items-center ${
                  ind == 0 && `text-[#4F46E5] flex-col item-center`
                }`}
              >
                {item.text}
                {ind === NavData.length - 1 && <AiOutlineDown />}
              </a>
              <button
                className={`h-2 w-2 mx-1 rounded-full transition-colors bg-[#4F46E5] ${
                  ind !== 0 && `hidden`
                }`}
              ></button>
            </div>
          ))}
        </div>

        <div className=" absolute h-[40px] sm:h-[60px] w-[170px] sm:w-[210px] right-[120px] sm:right-[22px] top-[15px] sm:top-[6px] ">
          <Button
            text1="Join Discount List"
            onclick={() => {
              setActive(true);
            }}
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
        <DiscountModal
          close={() => {
            setActive(false);
          }}
        />
      </CenterModal>
    </>
  );
}

export default Navbar;
