import React, { FC, useState } from "react";
import AuthLayout from "../../../components/layouts/AuthLayout";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";
import TextInput, { InputType } from "../../../components/Ui/TextInput";
import Button from "../../../components/Ui/Button";
import { HashSpinner } from "../../../components/Ui/Loading";
import { useAppDispatch } from "../../../redux/store";
import { saveParent } from "../../../redux/reducers/userReducer";
import { toast } from "react-toastify";
import { useLazySendOtpQuery } from "../../../services/api/authSlice";

interface Props {
  openNext: (value: number) => void;
}
const ParentSignupScreen: FC<Props> = ({ openNext }) => {
  const [isBusy, setIsBusy] = useState();
  const dispatch = useAppDispatch();
  const [sendOtp] = useLazySendOtpQuery();
  const {
    control,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      parentName: "",
      email: "",
      password: "",
      phone: "",
      confirm_password: "",
    },
  });

  const onSave = (data: any) => {
    dispatch(saveParent(data));
    const payload = {
      email: data.email,
    };
    sendOtp(payload)
      .then((res: any) => {
        if (res.isSuccess) {
          toast.success(res.data.message);
          openNext(2)
        }
      })
      .catch((err) => {});
  };
  return (
    <>
      <AuthLayout type="complete">
        <div>
          <div className="text-center lg:w-9/12 mx-auto pb-3 border-b-[4px] border-[#4F46E5]">
            <p className="text-primary text-2xl fw-600">Sign Up</p>
            <p className="mt-1 fw-500">
              Create an account to get started on
              <Link to={"/"} className="text-primary pl-1">
                SabiKid
              </Link>
            </p>
          </div>
          <div className="lg:px-12 mt-7">
            <form onSubmit={handleSubmit(onSave)}>
              <div>
                <Controller
                  name="parentName"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Please enter your name",
                    },
                  }}
                  render={({ field }) => (
                    <TextInput
                      label="Full Name"
                      labelClassName="text-[#4A5568] mb-2 fw-500"
                      placeholder="Enter your full name"
                      error={errors.parentName?.message}
                      type={InputType.text}
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="mt-5">
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Please enter your email",
                    },
                  }}
                  render={({ field }) => (
                    <TextInput
                      label="Email"
                      labelClassName="text-[#4A5568] mb-2 fw-500"
                      placeholder="Enter your email address"
                      error={errors.email?.message}
                      type={InputType.email}
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="mt-5">
                <label className="text-[#4A5568] mb-2 fw-500">
                  Phone Number
                </label>
                <PhoneInputWithCountry
                  international
                  defaultCountry="NG"
                  name="phone"
                  control={control}
                  rules={{ required: true }}
                  className="lg:p-2 p-2 border-2 border-[#DA70D65E] rounded outline-none mt-1"
                />
                {errors.phone && (
                  <p className="error text-red-500 fw-500">
                    Invalid Phone Number
                  </p>
                )}
              </div>
              <div className="mt-5 grid lg:grid-cols-2 gap-5">
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Password is too short",
                    },
                  }}
                  render={({ field }) => (
                    <TextInput
                      label="Password"
                      labelClassName="text-[#4A5568] mb-2 fw-500"
                      placeholder="*********"
                      error={errors.password?.message}
                      type={InputType.password}
                      {...field}
                    />
                  )}
                />
                <Controller
                  name="confirm_password"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    validate: (val) => {
                      if (watch("password") !== val) {
                        return "Your passwords do no match";
                      }
                    },
                  }}
                  render={({ field }) => (
                    <TextInput
                      label="Confirm Password"
                      labelClassName="text-[#4A5568] mb-2 fw-500"
                      placeholder="*********"
                      error={errors.confirm_password?.message}
                      type={InputType.password}
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="mt-8">
                <div className="w-10/12 mx-auto">
                  <Button
                    title={
                      isBusy ? (
                        <HashSpinner size={20} color="white" />
                      ) : (
                        "Sign Up"
                      )
                    }
                    disabled={!isValid}
                  />
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

export default ParentSignupScreen;
