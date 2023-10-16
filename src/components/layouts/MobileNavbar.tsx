import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import log from "../../images/homeimg/logoimg.png";
import log2 from "../../images/homeimg/logoimg2.png";
import { NAV_DATA } from "../../data/data";
import { FaBars } from 'react-icons/fa';


function MobileNavbar() {
  const { pathname } = useLocation();
  const paths = pathname.split('/');
  const [ active, setActive ] = useState<boolean>(false);
  const [colorchange, setcolorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setcolorchange(true);
    } else {
      setcolorchange(false);
    }
  };

  const nav = useNavigate();
  // const doSignin = () => {};
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div className="sm:md:lg:hidden">
      <SideBar {...{active, setActive, pathname, paths}}/>
      <div
        className={`flex w-full z-[40] items-center justify-between  h-[75px] sm:h-[80px] fixed top-0  left-0  ${
          colorchange || pathname !== "/" ? `bg-[#FFF]` : `bg-[#0E096C]`
        }`}
      >
        <div className="items-center w-full p-2 h-full mb-10 items-center flex">
          <img
            src={pathname !== "/" || colorchange ? log2 : log}
            className="h-[50px] w-[70px] top-2.5 cursor-pointer absolute left-5 fill-[#0E096C]"
            onClick={() => nav("/", { replace: true })}
            alt=""
          />
          <p
            className={`text-[10px] absolute  left-[90px] top-[45px] ${
              colorchange || pathname !== "/" ? `text-[#0E096C]` : `text-white`
            }`}
          >
            BETA
          </p>
        </div>

        <button onClick={() => setActive(true)}className={`px-4 py-3.5 rounded-[4px] font-[600] text-white
              outline-none duration-300
            `}>
              <FaBars
                className={`text-3xl
                  ${colorchange || pathname !== '/'? 'text-main':'text-white'}
                `}
              />
          </button>
        </div>
    </div>
  );
}


function SideBar({pathname, paths, active, setActive}: any){
  const nav = useNavigate();
  return (
    <div className={`h-screen w-screen fixed z-[100] inset-0 bg-white duration-300
      ${active? '': 'translate-x-full' }`
    }>
      <div className="flex py-4 px-4 border-b items-center justify-between">
        <img
          src={log2}
          className="h-[64px] w-[81px] cursor-pointer fill-[#0E096C]"
          onClick={() => nav("/", { replace: true })}
          alt=""
        />
        <button onClick={() => setActive(false)} className="text-3xl font-[600] px-2 py-2 text-gray-800">
          &#9932;
        </button>
      </div>
      <div className="flex flex-col items-center mt-5">
        {NAV_DATA.map((item: any, index: number) => (
            <Link
              key={index}
              to={item.url}
              className={`text-center w-full py-6 my-2 text-2xl font-[600] ease-in-out duration-300
               ${paths[1] === item.url.replace('/','') 
                ? `font-[700] text-active border-active bg-gray-100`
                : 'text-gray-700 border-white'
              }`}
            >
              {item.text}
            </Link>
        ))}
        <Link
          key={NAV_DATA.length}
          to={'/login'}
          className={`text-center w-full py-6 my-2 text-2xl font-[600] ease-in-out duration-300
            text-gray-700 border-white`}
        >
          Log In
        </Link>

      </div>
    </div>
  );
}

export default MobileNavbar;
