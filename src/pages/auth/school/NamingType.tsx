import React, { useState, FC } from "react";
import AuthLayout from "../../../components/layouts/AuthLayout";
import useModal from "../../../hooks/useModal";
import CustomNamingModal from "../../../components/auth/customNaming";

interface Props {
  openNext: (value: number) => void;
}
interface namingItem {
  name: string;
  param: string;
  desc: string;
  id: string;
}
const NamingTypeScreen: FC<Props> = ({ openNext }) => {
  const [namingType, setNamingType] = useState<string>();
  const { Modal, setShowModal } = useModal();
  const gotoRegister = () => {
    if (namingType) {
      //   navigate(`/${namingType}`);
    }
  };
  const openModal = (item:namingItem) => {
    setNamingType(item.param)
    setShowModal(true)
  };
  const selectNamingType = () => {};
  const namingTypes = [
    {
      name: "Grade 1 - 12",
      param: "gd",
      desc: "Use key stage system of grade 1-12",
      id: "1",
    },
    {
      name: "Primary 1-6 & JSS1-SS3",
      param: "ps",
      desc: "Use the Nigerian class naming style",
      id: "2",
    },
    {
      name: "Custom",
      desc: "Set your own school naming style",
      param: "cs",
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
            <p className="absolute right-10 top-8 fw-600 fs-700">2 of 2</p>
          </div>
          <div className="mt-12 grid lg:grid-cols-3 gap-10">
            {namingTypes.map((item) => (
              <div
                className={`types px-4 py-6 cursor-pointer ${
                  namingType === item.param
                    ? "bg-[#4F46E5] outline-[#4F46E5] !text-white"
                    : "bg-white"
                }`}
                onClick={
                  item.param === "cs"
                    ? () => openModal(item)
                    : () => setNamingType(item.param)
                }
              >
                <p className="fw-600 text-lg">{item.name}</p>
                <p
                  className={`mt-4 fs-400 ${
                    namingType === item.param ? "text-white" : "text-[#87909E]"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <div
              className={`py-[10px] cursor-pointer btn-shade rounded-t-[8px] rounded-bl-[8px] border border-[#312ECB33] w-5/12 bg-[#E3E2FF] text-[#87909EBD] text-center ${
                namingType && "!bg-[#4F46E5] text-white"
              }`}
              onClick={gotoRegister}
            >
              Next
            </div>
          </div>
        </div>
        <Modal title="Add Your School Naming Style" sidebar>
          <CustomNamingModal/>
        </Modal>
      </AuthLayout>
    </>
  );
};

export default NamingTypeScreen;
