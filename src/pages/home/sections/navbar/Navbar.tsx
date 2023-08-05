import React, { useState } from "react";
import { NavData } from "../../../../data/data";
import Button from "../../../../components/components/Button";
import logo from "../../../../images/tioologo.png";
import { AiOutlineDown } from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";
import FlashButton from "../../../../components/components/FlashBtn";
import CenterModal from "../../../../components/components/CenterModal";
import DiscountModal from "../../../../components/components/DiscountModals";
import { Link, NavLink, useLocation, useRoutes } from "react-router-dom";
// import { Link } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState(false);
  const [activenav, setActivenav] = useState(1);

  const handleClick = () => {
    console.log("Do something");
  };
  const { pathname } = useLocation();
  const toggleurl = (ind: number) => {
    setActivenav(ind);
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

        <div className="hidden sm:flex pt-5 w-[650px] m-[auto] h-full  gap-[24px] items-center   ">
          {NavData?.map((item, ind) => (
            <div
              className="flex flex-col items-center h-full"
              // onClick={() => {
              //   toggleurl(ind + 1);
              // }}
            >
              <Link
                to={item.url}
                className={`font-[600] font-[poppins] text-[18px] flex items-center ${
                  pathname == item.url && `text-[#4F46E5] flex-col item-center`
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
