import React from "react";
import SimpleImageSlide from "../../../../components/components/SimpleImageSlide";
import Button from "../../../../components/components/Button";
import { GradeData, TopicsData } from "../../../../data/data";
import Slider from "../../../../components/components/Slider";
import slide1 from "../../../../images/sliderimg/slide1.png";
import slide2 from "../../../../images/sliderimg/slide2.png";
import { useNavigate } from "react-router-dom";

const images = [slide1, slide1];

function TopicsVariety() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="w-full relative px-5 sm:px-20 py-10">
      <div className=" w-full flex flex-col  sm:flex sm:flex-row justify-evenly gap-5 ">
        <div className=" w-full sm:w-[55%]  ">
          <div className="w-[90%] mt-10 font-[poppins] ">
            {" "}
            <h1 className="font-[600] text-[24px] sm:text-[56px]">
              A variety of Topics to choose from
            </h1>
            <p className="font-[500] text-[12px] sm:text-[14px]">
              Start learning any subject from the web or app, set a pace and
              stay on track!
            </p>
            <div className="h-[50px] w-[218px] mt-3 absolute top-[30rem] left-[5rem] sm:static">
              <Button text1="Get Started" onclick={handleClick} />
            </div>
          </div>
        </div>
        <div className=" w-full sm:w-[45%] flex justify-center   ">
          {/* <SimpleImageSlide /> */}
          <Slider images={images} autoplayInterval={4000} />
        </div>
      </div>
      <div className="flex flex-col sm:flex sm:flex-row justify-between gap-10 mt-28">
        {TopicsData?.map((item) => (
          <div className="font-[poppins] h-[472px] w-full sm:w-[375px] rounded-[16px] p-[11px] bg-[#FFF] border-solid border-1 border-black ">
            <div className="h-[284px] w-full  rounded-[8px]   ">
              <img
                className="w-full h-full shadow-lg rounded-[8px]"
                src={item.img}
              />
            </div>
            <div className="relative  h-[160px]">
              <h1 className="text-[24px] sm:text-[24px] font-[600] my-1">
                {item.heading}
              </h1>
              <p className=" text-[12px] sm:text-[12px] font-[500]">
                {item.text}
              </p>
              <a
                className="absolute  bottom-[8px] text-[14px] sm:text-[18px] font-[500] text-[#4F46E5]"
                href="#"
              >
                {" "}
                Get Started &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicsVariety;
