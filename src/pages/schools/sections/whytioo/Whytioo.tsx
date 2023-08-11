import React, { useState } from "react";
import { TIOOData } from "../../../../data/data";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

function Whytioo() {
  const [activeright, setActiveright] = useState(true);
  const [activeleft, setActiveleft] = useState(false);
  const [activeitem, setActiveitem] = useState(1);
  const toggleNav = (val: string) => {
    if (val == "r") {
      console.log("its been toogled right");
      setActiveright(true);
      setActiveleft(false);
      if (activeitem == 5) {
        setActiveitem(1);
      } else {
        setActiveitem(activeitem + 1);
      }
    }
    if (val == "l") {
      console.log("its been toogled left");
      setActiveright(false);
      setActiveleft(true);
      if (activeitem == 1) {
        setActiveitem(5);
      } else {
        setActiveitem(activeitem - 1);
      }
    }
  };
  return (
    <div className="relative justify-around w-full p-5 py-6 mt-10 overflow-hidden sm:mt-3 sm:p-20 sm:py-14">
      <div className="flex mb-5">
        <div className=" w-[50%]">
          <h3 className="text-[30px] sm:text-[56px] font-[600]">Why Tioo?</h3>
          <p className="text-[10px] sm:text-[16px] font-[500]">
            With Tioo, we take your school and teacher’s productivity to the
            next level
          </p>
        </div>
        <div className=" w-[50%] flex gap-[20px] justify-end  items-end">
          <div
            className={`  w-[48px] h-[48px] rounded-[44px] border border-[#b5b1b8] flex items-center justify-center text-[#b5b1b8] ${
              activeleft && `bg-[#4F46E5]  text-[white]`
            }  text-[white]`}
            onClick={() => toggleNav("l")}
          >
            <AiOutlineLeft
              className={`${activeleft ? `text-[white]` : `text-[#b5b1b8]`}`}
            />
          </div>
          <div
            className={`w-[48px] h-[48px] rounded-[44px] border border-[#b5b1b8] flex items-center justify-center text-[#b5b1b8] ${
              activeright && `bg-[#4F46E5] text-[white]`
            }  text-[white]`}
            onClick={() => toggleNav("r")}
          >
            <AiOutlineRight
              className={`${activeright ? `text-[white]` : `text-[#b5b1b8]`}`}
            />
          </div>
        </div>
      </div>
      <div className="flex w-[1000px] sm:w-[2120px]    gap-2 sm:gap-[30px] h-[200px] sm:h-[316px] overflow-hidden">
        {TIOOData?.map((item, ind) => (
          <div
            key={ind}
            className={`transition-transform duration-500 ease-in-out w-[200px] sm:w-[400px] h-[95%] flex flex-col  gap-5 justify-center items-center  rounded-[8px] shadow-lg  p-1 sm:p-5 ${
              ind + 1 == activeitem && `bg-[#4F46E5] text-[#FFF]`
            }`}
            style={{
              transform: `translateX(-${
                activeitem !== 1 ? activeitem * 50 : activeitem * 0
              }%)`,
            }}
          >
            <img
              className="w-[60px] sm:w-[100px] h-[60px] sm:h-[100px]"
              src={item.img}
              alt=""
            />

            <p className="text-[12px] sm:text-[18px] text-center">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {TIOOData.map((_, index) => (
          <button
            key={index}
            onClick={() => {}}
            className={`h-2 w-2 mx-1 rounded-full transition-colors ${
              activeitem === index + 1 ? "bg-[#4F46E5]" : "bg-[#E3E2FF]"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Whytioo;
