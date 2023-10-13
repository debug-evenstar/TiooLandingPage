import React from "react";
import Learning from "./Learning";

function Aboutus() {
  return (
    <div className="px-20 mt-16">
      <div className="flex flex-col items-center justify-center px-16 gap-3">
        <h1 className="text-[#1E1E1E] text-[50px] font-[600]" data-aos="fade-up">About us</h1>
        <p className="text-[18px] text-center" data-aos="fade-up">
          Tioo is an AI-driven platform designed to transform K-12 education by offering adaptive textbooks and workbooks tailored to each student’s learning style.
        </p>
        <p className="text-[18px] text-center" data-aos="fade-up">
            Furthermore, This platform offers insight and analytics to help educators pinpoint areas of improvement.
        </p>
        <p className="text-[18px] text-center" data-aos="fade-up">
          Tioo boosts engagement, comprehension. And academic achievement, elevating the standard of K-12 education.
        </p>
{/*        <p className="text-[18px] text-center">
          Tioo, is an AI-Powered platform that aims to revolutionize K–12
          education with AI-powered textbooks and workbooks that adapt to each
          student's unique learning style.
        </p>
        <p className="text-[18px] text-center">
          <p className="text-[18px]">
            Tioo, is an AI-Powered platform that aims to revolutionize K–12
            education with AI-powered textbooks and workbooks that adapt to each
            student's unique learning style.
          </p>
        </p>
        <p className="text-[18px] text-center">
          By empowering students, educators, and authors with AI-driven tools,
          Tioo enhances student engagement, comprehension, and overall academic
          success, ultimately advancing the quality of K–12 education.
        </p>
*/}
      </div>
      <Learning />
    </div>
  );
}

export default Aboutus;
