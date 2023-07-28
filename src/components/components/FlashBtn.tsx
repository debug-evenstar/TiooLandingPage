import React, { useState, useEffect } from "react";
import { button } from "../../types/types";

const FlashButton: React.FC<button> = ({ height, width, text1, onclick }) => {
  const [bgColor, setBgColor] = useState("#4F46E5");

  useEffect(() => {
    // Change the background color every 1 second (1000ms)
    const interval = setInterval(() => {
      setBgColor((prevColor) =>
        prevColor === "#4F46E5" ? "#EC2958" : "#4F46E5"
      );
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex text-center py-[15px] px-[33px] justify-center items-center font-[poppins] h-full w-full rounded-[16px] text-[white] cursor-pointer"
      style={{ backgroundColor: bgColor }}
      onClick={onclick}
    >
      <p className="text-[16px] font-[500]">{text1}</p>
    </div>
  );
};

export default FlashButton;
