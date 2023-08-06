import React, { useState } from "react";
import image from "../../../../images/image 35.png";
import image3 from "../../../../images/img3.png";
import Button from "../../../../components/components/Button";
import FlashButton from "../../../../components/components/FlashBtn";
import CenterModal from "../../../../components/components/CenterModal";
import DiscountModal from "../../../../components/components/DiscountModals";
import sty from "../../../style/style.module.css";

function Header() {
  const [active, setActive] = useState(false);
  const [readmore, setReadmore] = useState(false);

  const handleClick = () => {
    console.log("Do something");
  };
  return (
    <>
      <div className="flex-col pl-0 py-14 sm:flex-row sm:pl-20 sm:py-14 relative w-full h-[vh] flex  flex-wrap ">
        {/* <div className="w-[677px]     flex flex-col"> */}
        <div className="w-full sm:w-[55%] flex flex-col pt-2 sm:pt-10 ">
          <h3
            className={` text-center sm:text-left font-[poppins] font-[600] text-[30px] sm:text-[54px]  leading-[45px] sm:leading-[75px] text-shade `}
          >
            Self-tutoring App
            <span className="font-sans text-[#EC2958] ml-4 font-[600] text-[30px] sm:text-[54px]">
              For <br />
              Kids And Teens
            </span>
          </h3>
          <div className="  mt-2 mb-12 border-none sm:border-l-4 sm:border-[#FBCECE] w-full px-2">
            <p className=" text-center sm:text-left text-[13px] sm:text-[14px] font-[500] text-[#7C7B7B]">
              Introducing our self-tutoring app, an AI tool that empowers
              primary and secondary school students to independently study their
              school curriculum and explore extra-curricular lessons with no
              need for human supervision. It ensures their learning remains on
              track beyond the classroom.{" "}
              {!readmore && (
                <a
                  onClick={() => setReadmore(true)}
                  className="text-[#EC2958] underline cursor-pointer"
                >
                  Read More
                </a>
              )}
            </p>
            {readmore && (
              <p className="text-center sm:text-left text-[13px] sm:text-[14px] font-[500] mt-5 text-[#7C7B7B]">
                Harnessing the capabilities of AI and gamification, our platform
                customizes the learning experience for each child, matching
                their unique learning style, pace, and preferences. This
                personalized approach tailors the content and activities,
                catering precisely to their individual needs. <br />
                <span className="font-[500] text-[14px] sm:text-[18px] text-[#D42E2E] block mt-2">
                  Coming in September 2023{" "}
                </span>
                <a
                  onClick={() => setReadmore(false)}
                  className="text-[#EC2958] underline cursor-pointer"
                >
                  Read Less
                </a>{" "}
              </p>
            )}
          </div>
          <div className="w-[192px] sm:w-[292px] h-[50px] sm:h-[80px] ml-[6rem] sm:ml-0">
            <Button
              hover={true}
              text1="Join Discount List."
              onclick={() => {
                setActive(true);
              }}
            />
            <p className="hidden sm:block text-[#EC2958] font-[600] text-[14px] text-center sm:text-left">
              N/B: Joining the discount list is FREE! No advance payment needed
            </p>
          </div>
          <p className=" block sm:hidden text-[#EC2958] font-[600] text-[13px] sm:text-[18px] text-center sm:text-left mt-3">
            N/B: Joining the discount list is FREE! No advance payment needed
          </p>
        </div>

        <img
          // className="w-[587px] h-[607px]     "
          className=" w-[100%] sm:w-[45%] h-[303px] sm:h-[507px]"
          alt="a"
          src={image}
        />

        <img
          className=" hidden sm:block w-[72px] h-[72px] absolute bottom-[60px] right-[15px]"
          alt="a"
          src={image3}
        />
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

export default Header;
