import React from "react";
import SectionLayout from "../../../../layouts/SectionLayout";
import { teacherData } from "../../data/data";

function TeacherSay() {
  return (
    <SectionLayout>
      <h1 className="mb-16 text-center text-[30px] sm:text-[56px] font-[600]">
        What Teachers Say
      </h1>
      <div className="flex flex-col items-center justify-center w-full gap-3 sm:gap-5 sm:flex-row">
        {teacherData.map((item, ind) => (
          <div className="   w-[90%] sm:w-[300px] h-[340px] shadow-xl p-5 relative rounded-[8px] border-b-[4px] border-b-[#EC9127]">
            <img className="mb-4" src={item.img} />
            <h1 className="text-[15px] font-[500]">{item.title}</h1>
            <a
              href="#"
              className="text-[12px] font-[500] absolute bottom-2 underline"
            >
              {item.desc}
            </a>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}

export default TeacherSay;
