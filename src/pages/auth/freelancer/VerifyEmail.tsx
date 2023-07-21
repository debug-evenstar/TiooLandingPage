import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import OTPInput from "react-otp-input";
import AuthLayout from "../../../components/layouts/AuthLayout";
import { useLazySendOtpQuery, useLazyVerifyOtpQuery } from "../../../services/api/authSlice";
import { useAppSelector } from "../../../redux/store";
import { toast } from "react-toastify";
import { HashSpinner, PulseSpinner } from "../../../components/Ui/Loading";
import Button from "../../../components/Ui/Button";

interface Props {
  openNext: (value: number) => void;
}
const VerifyEmailScreen: FC<Props> = ({openNext}) => {
  const [isBusy, setIsBusy] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendOtp] = useLazySendOtpQuery();
  const [verify] = useLazyVerifyOtpQuery();
  const email = useAppSelector((state) => state.user.user.email);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      otp: "",
      email: email
    },
  });
  const resendOtp = async () => {
    setIsSending(true);
    const payload = {
      email: email,
    };
    await sendOtp(payload).then((res) => {
      if (res.isSuccess) {
        toast.success(res.data.message);
        setIsSending(false);
      } else {
        toast.error(res?.data?.message);
        setIsSending(false);
      }
    });
  };
  const verifyOtp = async (data:any) => {
    setIsBusy(true)
    await verify(data)
    .then((res:any) => {
      if(res.isSuccess){
        toast.success(res.data.message)
        openNext(3)
        setIsBusy(false);
      }else {
        toast.error(res?.error?.data.message);
        setIsBusy(false);
      }
    })
    .catch((err) => {
      toast.error(err?.error?.data?.message);
      setIsBusy(false);
    });
  }
  return (
    <>
      <AuthLayout>
        <div>
          <div className="text-center w-7/12 mx-auto pb-3 border-b-[4px] border-[#4F46E5]">
            <p className="text-primary text-2xl fw-600">Verify your Account</p>
          </div>
          <div className="mt-6 lg:w-8/12 mx-auto text-center">
            <p>
              Enter the 6 digit code sent to{" "}
              <span className="fw-500">{email}</span> to verify your account.
            </p>
          </div>
          <div className="lg:px-12 my-8">
            <form onSubmit={handleSubmit(verifyOtp)}>
              <div>
                <Controller
                  name="otp"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Please enter your email",
                    },
                  }}
                  render={({ field }) => (
                    <OTPInput
                      numInputs={6}
                      renderSeparator={<span> </span>}
                      renderInput={(props) => <input {...props} />}
                      inputStyle="border !w-2/12 h-12 bg-[#EDEDED] outline-[#4f46e5] rounded-[4px]"
                      containerStyle="flex justify-between lg:gap-x-4"
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
                        "Continue"
                      )
                    }
                    disabled={!isValid}
                  />
                </div>
              </div>
            </form>
            <div className="text-center mt-4">
              <p>Not able to verify account?</p>
              <p>
                {isSending ? (
                  <PulseSpinner color="#4f46e5" />
                ) : (
                  <span
                    className="text-primary fw-500 cursor-pointer underline"
                    onClick={resendOtp}
                  >
                    Resend code
                  </span>
                )}{" "}
                or
                <Link to="/" className="text-primary fw-500 underline pl-2">
                  Update Email
                </Link>
              </p>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default VerifyEmailScreen;
