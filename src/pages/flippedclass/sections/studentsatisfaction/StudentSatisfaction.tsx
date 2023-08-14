import React from "react";
import SectionLayout from "../../../../layouts/SectionLayout";
import stars from "./images/stars.png";
import satis from "./images/satisimg.png";

function StudentSatisfaction() {
  return (
    <SectionLayout>
      <div className="bg-[#0E096C] flex py-20 px-10 rounded-[24px] relative">
        <div className="w-[55%]">
          <p className="text-[20px] font-[500] text-[#FFF] mb-5">
            Flipped classroom is an instructional strategy that aims to increase
            student engagement and learning by having them complete readings or
            watch lectures at home and work on problem-solving or other
            activities during class time.{" "}
          </p>
          <p className="text-[20px] font-[500] text-[#FFF]">
            According to a 2017 survey by the Flipped Learning Global
            Initiative, about 16% of U.S. teachers have implemented flipped
            learning in their classrooms, and another 18% plan to try it in the
            next year.
          </p>
        </div>
        <div>
          <img className="absolute right-[100px]" src={stars} />
        </div>
      </div>
      <div className="flex w-full mt-6">
        <div>
          <h1 className="text-[50px] font-[600]">
            {" "}
            What About Student Satisfaction?
          </h1>
          <p className="text-[20px]">
            Flipped learning has been shown to have positive effects on student
            achievement, motivation, engagement, and satisfaction in various
            studies.
          </p>
        </div>
        <div>
          <div className="bg-[#0E096C] w-[513px] h-[266px] mt-[90px] relative">
            <div className="absolute h-[600px] w-[427px] bg-[#FFF] m-[auto] bottom-[34px] right-0 left-0 rounded-[8px]">
              <img
                className="w-full object-cover h-[90%] bottom-0 absolute rounded-br-[8px] rounded-bl-[8px]"
                src={satis}
              />
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default StudentSatisfaction;
