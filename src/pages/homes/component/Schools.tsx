import React, { useEffect } from "react";
import schimg from "../../../images/homeimg/schoolimg.png";
import { Link } from "react-router-dom";
import { SchoolData } from "../../../data/data";
import { Button2 } from "../../../components/Ui/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Schools() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
    AOS.refresh();
  },[])
  return (
    <div className="w-full px-20 py-16 mt-20 gradient">
      <div className="flex flex-col items-center justify-center w-full ">
        <h1 className="text-[#1E1E1E] text-[48px] font-[600]" data-aos="fade-up">
          Tioo For schools
        </h1>
        <p className="text-[18px] font-[400]" data-aos="fade-up">
          Onboard your school on Tioo today
        </p>
      </div>
      <div className="flex gap-8 mt-8 ">
        <div className="flex-1 bg-[#FFF] h-[600px] rounded-[30px] flex items-center">
          <img src={schimg} className="w-full h-[60%] object-cover" />
        </div>
        <div className="flex-1 ">
          {SchoolData?.map((items) => (
            <div key={items.id} className=" border-[#87909E] border-b-2 mb-[40px]">
              <h1 data-aos="fade-left" className="text-[28px] font-[750] text-gray-900 mb-4">
                {items.title}
              </h1>
              <p data-aos="fade-left" className="text-[14px] sm:text-[16px] font-[500] mb-5 text-gray-900">
                {items.desc}
              </p>
            </div>
          ))}
          <div className="w-[200px] mt-10">
            <Button2 text1="Get Started" onclick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schools;
