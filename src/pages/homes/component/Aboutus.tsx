import React from "react";
import Learning from "./Learning";

function Aboutus() {
  return (
    <div className="px-4 sm:px-20 mt-16">
      <div className="flex flex-col items-center justify-center sm:px-16 gap-y-3">
        <h1 className="text-[#1E1E1E] text-[34px] sm:text-[50px] font-[600]" data-aos="fade-up">About us</h1>
        <p className="text-[18px] w-full sm:w-[70%] text-center" data-aos="fade-up">
          Tioo is an AI-driven platform designed to transform K-12 education by offering adaptive textbooks and workbooks tailored to each student’s learning style.
        </p>
        <p className="text-[18px] w-full sm:w-[70%] text-center" data-aos="fade-up">
            Furthermore, This platform offers insight and analytics to help educators pinpoint areas of improvement.
        </p>
        <p className="text-[18px] w-full sm:w-[70%] text-center" data-aos="fade-up">
          Tioo boosts engagement, comprehension. And academic achievement, elevating the standard of K-12 education.
        </p>

      </div>
      <Learning />
    </div>
  );
}

export default Aboutus;
