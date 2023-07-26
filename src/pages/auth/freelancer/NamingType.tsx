import React, { useState, useEffect } from "react";
import AuthLayout from "../../../components/layouts/AuthLayout";
import useModal from "../../../hooks/useModal";
import CustomNamingModal from "../../../components/auth/customNaming";
import { useAppSelector } from "../../../redux/store";
import { useLazySetupSchoolQuery } from "../../../services/api/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { HashSpinner } from "../../../components/Ui/Loading";

interface namingItem {
  name: string;
  param: string;
  desc: string;
  id: string;
}
const FreelanceNamingTypeScreen = () => {
  const [namingType, setNamingType] = useState<string>();
  const [isBusy, setIsBusy] = useState(false);
  const { Modal, showModal, setShowModal } = useModal();
  const user = useAppSelector((state) => state.user.user);
  const sch = useAppSelector((state) => state.setup);
  const [update] = useLazySetupSchoolQuery();
  const navigate = useNavigate()

  const openModal = (item: namingItem) => {
    setNamingType(item.param);
    setShowModal(true);
  };
  useEffect(() => {
    if(namingType === "C" && !sch.naming.length && !showModal){
      setNamingType('')
    }// eslint-disable-next-line
  }, [setShowModal])
  const updateSchool = async () => {
    setIsBusy(true)
    const payload = {
      email: user.email,
      school_types: sch.types,
      naming_types: namingType ? namingType : "",
      ...(namingType === "C" && { class_naming: sch.naming }),
    };
    await update(payload)
    .then((res:any) => {
      if (res.isSuccess) {
        toast.success(res.data.message);
        setIsBusy(false);
        navigate('/login')
      } else {
        toast.error(res?.error?.data?.message);
      }
    })
    .catch((err) => {
      toast.error(err?.error?.data?.message);
      setIsBusy(false);
    });
  };
  const namingTypes = [
    {
      name: "Custom",
      desc: "Set up your institution’s class naming style",
      param: "C",
      id: "3",
    },
  ];
  return (
    <>
      <AuthLayout type="schtype">
        <div>
          <div className="text-center w-7/12 mx-auto pb-3 border-b-[4px] border-[#4F46E5]">
            <p className="text-primary text-2xl fw-600">Naming Type</p>
            <div className="mt-3 mb-3 text-center">
              <p>Choose your school’s naming style</p>
            </div>
          </div>
          <div className="mt-12 w-10/12 mx-auto">
            {namingTypes.map((item) => (
              <div
                className={`types px-4 py-6 cursor-pointer ${
                  namingType === item.param
                    ? "bg-[#4F46E5] outline-[#4F46E5] !text-white"
                    : "bg-white"
                }`}
                onClick={
                  item.param === "C"
                    ? () => openModal(item)
                    : () => setNamingType(item.param)
                }
                key={item.param}
              >
                <p className="fw-600 text-lg">{item.name}</p>
                <p
                  className={`fs-400  ${
                    namingType === item.param ? "text-white" : "text-[#87909E]"
                  } ${item.param === "ps" ? "mt-1" : "mt-4"}`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <div
              className={`py-[10px] cursor-pointer btn-shade rounded-t-[8px] rounded-bl-[8px] border border-[#312ECB33] w-5/12 flex justify-center bg-[#E3E2FF] text-[#87909EBD] text-center ${
                namingType && "!bg-[#4F46E5] text-white"
              }`}
              onClick={namingType? updateSchool : () => false}
            >
              {isBusy? <HashSpinner size={20} color="white"/> : "Continue"}
            </div>
          </div>
        </div>
        <Modal title="Add Your School Naming Style" sidebar>
          <CustomNamingModal close={() => setShowModal(false)} />
        </Modal>
      </AuthLayout>
    </>
  );
};

export default FreelanceNamingTypeScreen;
