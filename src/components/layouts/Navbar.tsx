import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import logo from "../imagess/homeimg/";
// import logos from "../../images/sliderimg/";
import log from "../../images/homeimg/logoimg.png";
import log2 from "../../images/homeimg/logoimg2.png";
// import log from ""
import { NAV_DATA } from "../../data/data";
import { Button2, Button4 } from "../Ui/Button";

function Navbar() {
  const { pathname } = useLocation();
  const paths = pathname.split('/');
  const [colorchange, setcolorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setcolorchange(true);
    } else {
      setcolorchange(false);
    }
  };

  const nav = useNavigate();
  const doSignin = () => {};
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div>
      <div
        className={`pl-[150px] w-full z-[40]  h-[70px] sm:h-[80px] fixed top-0  left-0   ${
          colorchange || pathname !== "/" ? `bg-[#FFF]` : `bg-[#0E096C]`
        }`}
      >
        <div className="block sm:hidden absolute top-[20px] right-[10px] w-[32px] h-[32px] "></div>

        <div className="items-center hidden w-full h-full mb-10 sm:flex">
          <img
            src={pathname !== "/" || colorchange ? log2 : log}
            className="h-[64px] w-[81px] cursor-pointer absolute left-5 fill-[#0E096C]"
            onClick={() => nav("/", { replace: true })}
          />
          <p
            className={`text-[10px] absolute  left-[100px] top-[45px] ${
              colorchange || pathname !== "/" ? `text-[#0E096C]` : `text-white`
            }`}
          >
            BETA
          </p>
          <div className="flex items-center justify-between w-full h-full">
            <div className="flex items-center h-[55%] gap-10 ">
              {NAV_DATA.map((item: any, index: number) => (
                <div key={index} className="flex flex-col items-center h-full text-white mt-6">
                  <Link
                    to={item.url}
                    className={`hover:scale-[1.1] font-[600] ease-in hover:font-[500] duration-300 ${
                      colorchange || pathname !== "/"
                        ? ` text-[#4F46E5] border-[#4F46E5]`
                        : `text-[#FFF] ]`
                    } ${paths[1] == item.url.replace('/','') && `font-[700] border-b-2`}`}
                  >
                    {item.text}
                  </Link>
                  {/* {pathname === item.url && (
                    <button
                      className={`h-2 w-2 mx-1 rounded-full transition-colors bg-[#4F46E5]  `}
                    ></button>
                  )} */}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-5 mr-4">
              <Link
                to="/login"
                className={`font-[600] ${
                  colorchange || pathname !== "/"
                    ? `text-[#4F46E5]`
                    : `text-white`
                }`}
              >
                Log in
              </Link>
              <div className="h-[60px]">
                <Button4
                  text1="Get started"
                  onclick={doSignin}
                  variant={colorchange || pathname !== "/" ? "sec" : "default"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
