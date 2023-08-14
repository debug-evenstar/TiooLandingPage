import React from "react";
import SectionLayout from "../../../../layouts/SectionLayout";
import fit1 from "./images/fit1.png";
import fit2 from "./images/fit2.png";
import Button from "../../../../components/components/Button";

function Tioofits() {
  return (
    <>
      <div className="relative p-20 mb-[380px]">
        <h1 className="text-[50px] font-[600]">How Tioo Fits In</h1>
        <div className="flex gap-5">
          <div className=" w-[55%] flex flex-col">
            <p className="mb-4">
              With our platform, students can access lesson notes and intros to
              each lesson ahead of the class, and attune themselves to the
              lesson concept. Therefore, giving teachers enough classroom time
              for emphasis, activities, and special care to students with
              learning difficulties.
            </p>
            <p className="mb-4">
              The goal is to create a seamless and dynamic learning experience
              that maximizes the benefits of both AI and traditional teaching
              approaches.
            </p>
            <p className="mb-4">
              Our AI self-learning app also provides personalized, adaptive, and
              interactive learning experiences for students thereby greatly
              enhancing the implementation of a flipped classroom model.
            </p>
            <p className="mb-4">
              Incorporating an AI self-learning app into the flipped classroom
              model enhances the student learning experience, enables teachers
              to provide more targeted support, and promotes active engagement
              both inside and outside the classroom.
            </p>
            <div className="relative h-full ">
              <div className="w-[30%] h-[70%] absolute bottom-0">
                {" "}
                <Button text1="Get Started" onclick={() => {}} />
              </div>
            </div>
          </div>
          <div className="bg-[#998BBF] w-[500px] p-3 ">
            <img src={fit1} className="object-cover w-full rounded-[10px]" />
          </div>
        </div>
        <div className="bg-[#998BBF] w-[500px] bottom-[-300px]  left-[350px] absolute p-3">
          <img src={fit2} className="object-cover w-full rounded-[10px] " />
        </div>
      </div>
      <div className="w-full bg-[#0E096C] p-2">
        <p className="text-center text-[18px] font-[500] text-[#FFF]">
          Sign up on Tioo today and get a special discount offer
        </p>
      </div>
    </>
  );
}

export default Tioofits;
