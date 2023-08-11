import React, { useState } from "react";
import { NavData } from "../../../../data/data";
import Button from "../../../../components/components/Button";
import logo from "../../../../images/tioologo.png";
import { AiOutlineDown } from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";
import { LiaTimesSolid } from "react-icons/lia";
import FlashButton from "../../../../components/components/FlashBtn";
import CenterModal from "../../../../components/components/CenterModal";
import DiscountModal from "../../../../components/components/DiscountModals";
import { Link, NavLink, useLocation, useRoutes } from "react-router-dom";
import mobilelogo from "./images/mobilelogo.png";
// import { Link } from "react-router-dom";

function Navbar() {
  const more = ["Pricing", "Referrals", "Testimonials", "Blog"];
  const [active, setActive] = useState(false);
  const [activenav, setActivenav] = useState(1);
  const [mobilenav, setMobilenav] = useState(false);

  const handleClick = () => {
    console.log("Do something");
  };
  const { pathname } = useLocation();
  const toggleurl = (ind: number) => {
    setActivenav(ind);
  };
  return (
    <>
      <div className=" w-full z-50 bg-[white] h-[70px] sm:h-[90px] fixed top-0">
        <img
          src={logo}
          className="absolute left-[2px] sm:left-[22px] top-[5px] w-[56px] sm:w-[70px] h-[46px] sm:h-[65px]"
        />
        <div className="block sm:hidden absolute top-[20px] right-[10px] w-[32px] h-[32px]">
          <HiMenuAlt2
            className="w-full h-full"
            onClick={() => setMobilenav(true)}
          />
        </div>
        <h5 className="absolute top-[50px] sm:top-[66px] left-[22px] sm:left-[50px] font-[600] text-[12px] sm:text-[18px] text-[#4F46E5]">
          BETA
        </h5>

        <div className="hidden sm:flex pt-5 w-[650px] m-[auto] h-full  gap-[24px] items-center   ">
          {NavData?.map((item, ind) => (
            <div className="flex flex-col items-center h-full">
              <Link
                to={item.url}
                className={`font-[600] font-[poppins] text-[18px] flex items-center   ${
                  pathname == item.url ? `text-[#4F46E5]` : `text-[#5c597d]`
                }`}
              >
                {item.text}
                {ind === NavData.length - 1 && <AiOutlineDown />}
              </Link>
              {pathname === item.url && (
                <button
                  className={`h-2 w-2 mx-1 rounded-full transition-colors bg-[#4F46E5]  `}
                ></button>
              )}
            </div>
          ))}
        </div>

        {/* for mobile */}
        {mobilenav && (
          <div className=" transition-transform duration-500 ease-in-out fixed flex flex-col sm:hidden pt-6 w-full h-[100vh] z-50 gap-[25px] bg-[#4F46E5] text-white     ">
            <div className="flex items-center justify-between px-2 mb-4">
              <img className="w-[65px] h-[65px]" src={mobilelogo} alt="" />
              <LiaTimesSolid
                className="w-[48px] h-[48px]"
                onClick={() => setMobilenav(false)}
              />
              <h3 className="absolute left-[35px] top-[75px]">BETA</h3>
            </div>

            {NavData?.map((item, ind) => (
              <div
                className="flex flex-col px-4"
                onClick={() => setMobilenav(false)}
              >
                {item.text !== "More" && (
                  <Link
                    to={item.url}
                    className={`font-[600] font-[poppins] text-[18px] flex items-center text-[white] `}
                  >
                    {item.text}
                  </Link>
                )}
              </div>
            ))}
            <hr />
            {/* {more?.map((item, ind) => (
              <div className="flex flex-col px-4">
                <Link
                  to={"/"}
                  className={`font-[500] font-[poppins] text-[16px] flex items-center text-[#E4E1E1] `}
                >
                  {item}
                </Link>
              </div>
            ))} */}
          </div>
        )}
        <div className=" sm:p-0 pt-5 static sm:absolute h-[60px] sm:h-[60px] w-[170px] sm:w-[210px] m-[auto]  sm:right-[22px] top-[15px] sm:top-[6px] ">
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
