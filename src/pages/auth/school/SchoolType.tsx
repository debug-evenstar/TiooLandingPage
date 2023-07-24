import React, { useState, FC } from "react";
import AuthLayout from "../../../components/layouts/AuthLayout";
import { useAppDispatch } from "../../../redux/store";
import { saveTypes } from "../../../redux/reducers/setupReducer";
import { toast } from "react-toastify";

interface Props {
  openNext: (value: number) => void;
}
const SchoolTypeScreen: FC<Props> = ({ openNext }) => {
  const [typeValue, setTypeValue] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const gotoNaming = () => {
    if (!!typeValue?.length) {
      dispatch(saveTypes(typeValue));
      toast.success("School type saved");
      openNext(4);
    } else {
      toast.error("Please check a school type");
    }
  };
  const selectSchoolType = (item:any) => {
    let sch = [...typeValue];
    const index = ["nursery", "primary"]
    if (item.param == "nursery" || item.param == "primary") {
      if(index.some(i => typeValue.includes(i))){
        sch.splice(typeValue.indexOf("nursery"));
        sch.splice(typeValue.indexOf("primary"));
      } else
      sch = [...typeValue, "nursery", "primary"];
    } else if(item.param == "secondary") {
      if(typeValue.includes("secondary")){
        sch.splice(typeValue.indexOf("secondary"), 1);
      }else
      sch = [...typeValue, "secondary"];
    }else {}
    setTypeValue(sch);
    console.log(typeValue);
    
  };
  const schoolTypes = [
    {
      name: "Nusery School",
      param: "nursery",
      id: "1",
    },
    {
      name: "Primary School",
      param: "primary",
      id: "2",
    },
    {
      name: "Secondary School",
      param: "secondary",
      id: "3",
    },
  ];
  return (
    <>
      <AuthLayout type="schtype">
        <div>
          <div className="text-center w-7/12 mx-auto pb-3 border-b-[4px] border-[#4F46E5]">
            <p className="text-primary text-2xl fw-600">Select School Type</p>
            <div className="mt-3 mb-3 text-center">
              <p>What type of school do you run</p>
            </div>
            <p className="absolute right-10 top-8 fw-600 fs-700">1 of 2</p>
          </div>
          <div className="mt-12 grid lg:grid-cols-3 gap-10">
            {schoolTypes.map((item) => (
              <div
                className={`types h-28 relative px-4 py-6 cursor-pointer ${
                  typeValue.indexOf(item.param) !== -1
                    ? "bg-[#4F46E5] outline-[#4F46E5] !text-white"
                    : "bg-white"
                }`}
                onClick={item.param == "secondary"? () => false : () => selectSchoolType(item)}
                key={item.param}
              >
                <p className="fw-500 text-lg pt-5">{item.name}</p>
                {item.param === "secondary" && (
                  <p className="text-[#FF006E] fw-500 fs-300 absolute top-2 right-3">
                    Coming Soon
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <div
              className={`py-[10px] cursor-pointer btn-shade rounded-t-[8px] rounded-bl-[8px] border border-[#312ECB33] w-5/12 bg-[#E3E2FF] text-[#87909EBD] text-center ${
                !!typeValue.length && "!bg-[#4F46E5] text-white"
              }`}
              onClick={gotoNaming}
            >
              Next
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default SchoolTypeScreen;
