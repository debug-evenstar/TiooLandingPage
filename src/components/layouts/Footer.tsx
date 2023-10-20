import React from "react";
import ButtonCustom from "../components/ButtonCustom";
import apple from "../../images/apple.png";
import play from "../../images/play.png";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsFacebook } from "react-icons/bs";
import logo from "../../images/tioologo.png";

function Footer() {
  const handleClick = () => {
    console.log("Do something");
  };
  return (
    <div className="bg-[#FAFAFA]  w-full relative  px-5 lg:px-20 mt-12 mb-5  ">
      <div className="flex flex-col lg:flex lg:flex-row border-b-2 border-[#CECDFD] w-full ">
        <div className=" w-[15%] ">
          <img
            className="w-[120px] lg:w-[140px] absolute top-0 lg:top-9 left-5"
            src={logo}
            alt=""
          />
          <h5 className="absolute left-[70px] lg:left-[90px] bottom-[180px] lg:bottom-[80px] font-[500] text-[12px] text-[#4F46E5]">
            By Praxeum
          </h5>
        </div>
        <div className="  flex flex-col lg:flex lg:flex-row  mt-[8rem] lg:mt-[4rem] gap-[1px] lg:gap-5 w-[90%]  mb-[20px]   justify-left lg:justify-evenly">
          <div className="h-full pl-4 lg:p-0 w-full lg:w-[50%] ">
            <div className="flex gap-5 mb-5 ">
              <button
                className="font-[500] text-[rgba(3,0,54,0.74)] text-[14px] lg:text-[18px]"
              >
                About
              </button>
              <button
                className="font-[500] text-[rgba(3,0,54,0.74)] text-[14px] lg:text-[18px]"
              >
                Privacy
              </button>
              <button
                className="font-[500] text-[rgba(3,0,54,0.74)] text-[14px] lg:text-[18px]"
              >
                Terms
              </button>
            </div>
            <div className="hidden lg:flex gap-10  h-[60px] w-full      ">
              <ButtonCustom
                height={10}
                width={190}
                image={play}
                // text1="Get app on"
                text2="Google play"
                bg={"2C2C30"}
                onclick={handleClick}
              />
              <ButtonCustom
                image={apple}
                height={10}
                width={190}
                // text1="Get app on"
                text2="apple store"
                bg={"2C2C30"}
                onclick={handleClick}
              />
            </div>
          </div>
          <div className="h-full w-full lg:w-[50%]  flex flex-col justify-center items-end pt-5 ">
            <div className="absolute top-[50px] text-primary mb-5 left-[140px] lg:static flex  gap-3 w-[130px] items-end justify-end lg:mr-10">
              <AiOutlineTwitter />
              <SlSocialLinkedin />
              <AiOutlineInstagram />
              <BsFacebook />
            </div>
            <div className="w-full lg:w-[418px] flex items-start lg:items-end mr-0 ">
              <p className=" pl-4 lg:p-0 text-primary font-[400] text-sm lg:text-primary text-left lg:text-right">
                3 Atabara Street, off cairo street, Ademola Adetukonbo,
                Crescent, Wuse 2, Abuja, FCT
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-5">
        <p className="text-[10px] lg:text-[16px] text-center text-sm text-primary">
          &copy; 2023 Praxeum Limited. All rights reserved
          {/* © 2023 Praxeum Limited. All rights reserved */}
        </p>
      </div>
    </div>
  );
}

export default Footer;
