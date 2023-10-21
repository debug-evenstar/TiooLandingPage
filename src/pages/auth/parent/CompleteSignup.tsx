import React, { useState } from "react";
import AuthLayout from "../../../components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../../components/Ui/TextInput";
import { HashSpinner } from "../../../components/Ui/Loading";
import { toast } from "react-toastify";
import { useLazyCompleteRegisterParentQuery } from "../../../services/api/authSlice";
import { useAppSelector } from "../../../redux/store";
import dropdown from '../../../images/drop.svg'
import { BsInfoCircle } from "react-icons/bs";
import { useGetTioClassesQuery } from "../../../services/api/routineSlice";
import Button from "../../../utils/Button";

const ParentCompleteSignupScreen = () => {
  const [isBusy, setIsBusy] = useState(false)
  const [toolTip, setTooltip] = useState(false);
  const {data:grade} = useGetTioClassesQuery()
  const navigate = useNavigate()
  const [complete] = useLazyCompleteRegisterParentQuery()
  const savedData = useAppSelector((state) => state.user.otp)
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      token: "",
      name: "",
      school: "",
      class: "",
      age: "",
    },
  });
  const onSubmit = async (data:any) => {
    setIsBusy(true)
    const payload ={
      ...data,
      token: savedData.token
    }
    await complete(payload)
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
  return (
    <>
      <AuthLayout type="complete">
        <div>
          <div className="text-center lg:w-9/12 mx-auto pb-3 border-b-[4px] border-[#4F46E5]">
            <p className="text-primary text-2xl fw-600">Complete Sign up</p>
            <p className="mt-1 fw-500">
              Create ana account to get started on 
              <Link to={"/"} className="text-primary">
                Tioo
              </Link>
            </p>
          </div>
          <div className="lg:px-12 mt-7">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Controller
                  name="name"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Please enter child name",
                    },
                  }}
                  render={({ field }) => (
                    <TextInput
                      label="Child&apos;s Name"
                      labelClassName="text-[#4A5568] mb-2 fw-500"
                      placeholder="Enter child&apos;s full name"
                      error={errors.name?.message}
                      type={InputType.text}
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="mt-5">
                <Controller
                  name="school"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Please enter your child school",
                    },
                  }}
                  render={({ field }) => (
                    <TextInput
                      label="Child&apos;s School"
                      labelClassName="text-[#4A5568] mb-2 fw-500"
                      placeholder="Enter child&apos;s school"
                      error={errors.school?.message}
                      type={InputType.text}
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="mt-5 relative">
                  {
                    toolTip && <div className="bg-[#4F46E5] w-[240px] lg:w-[280px] text-center absolute left-2 lg:-left-2 -top-[60px] text-white px-2 py-2 rounded-lg">
                    <p className="fs-300">Your child&apos;s class should align with the Grade 1-12 naming convention</p>
                    <img
                      src={dropdown}
                      alt="pointer"
                      className="w-12 absolute -bottom-[25px] left-[35%]"
                    />
                  </div>
                  }
                  <BsInfoCircle className="fs-500 text-[#4F46E5] top-[4px] absolute left-[110px] cursor-pointer" onMouseEnter={() => setTooltip(true)} onMouseLeave={() => setTooltip(false)} onClick={() => setTooltip(!toolTip)}/>
                  <label className="text-[#4A5568] mb-2 fw-500 block">Child&apos;s Class</label>
                <Controller
                  name="class"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Please enter child's class",
                    },
                  }}
                  render={({ field }) => (
                    <select className="w-full p-2 outline-none border-2 border-[#DA70D65E] rounded-[4px]" {...field}>
                      <option></option>
                      {
                        grade && grade.data.map((item:any, i:number) => (
                          <option value={item.id} key={i}>{item.naming}</option>
                        ))
                      }
                    </select>
                  )}
                />
              </div>
              <div className="mt-5">
                <Controller
                  name="age"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Please enter child's age",
                    },
                  }}
                  render={({ field }) => (
                    <TextInput
                      label="Child&apos;s Age"
                      labelClassName="text-[#4A5568] mb-2 fw-500"
                      error={errors.age?.message}
                      type={InputType.number}
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="mt-8">
                <div className="w-10/12 mx-auto">
                <Button title={isBusy ? <HashSpinner size={20} color="white"/> : "Get Started"} disabled={!isValid} />
                </div>
              </div>
            </form>
            <div className="text-center mt-4">
              Already have an account?{" "}
              <Link to="/" className="text-primary fw-500">
                Login
              </Link>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default ParentCompleteSignupScreen;