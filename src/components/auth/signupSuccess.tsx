import React, { useState } from "react";
import Button from "../Ui/Button";
import { toast } from "react-toastify";
import { useLazySendOtpQuery } from "../../services/api/authSlice";
import { HashSpinner } from "../Ui/Loading";

const SignupSuccessModal = ({ email }: { email: string }) => {
  const [isBusy, setIsBusy] = useState(false);
  const [sendOtp] = useLazySendOtpQuery();
  const ResendOtp = () => {
    setIsBusy(true)
    const payload = {
      email: email,
    };
    console.log(isBusy);
    
    sendOtp(payload)
      .then((res: any) => {
        if (res.isSuccess) {
          toast.success(res.data.message);
          setIsBusy(false);
        }else {
            toast.success(res.error.data.message)
            setIsBusy(false);}
      })
      .catch((err) => {
        setIsBusy(false);
    });
  };
  return (
    <>
      <div>
        <p className="text-2xl fw-500 text-center">
          Account Created Successfully
        </p>
        <div className="mt-8 text-center">
          <img
            src="https://res.cloudinary.com/dic7regoe/image/upload/v1690187491/praxeum/verify_i9bd3y.png"
            alt="email"
            className="w-24 mx-auto"
          />
          <p className="mt-5">Verify Your Email</p>
          <p className="text-gray-600">
            Check your email & click on the link to activate your account
          </p>
          <div className="flex justify-center mt-6 gap-x-5">
            <div className="w-5/12">
            <Button
              title={
                isBusy ? (
                  <HashSpinner size={20} color="white" />
                ) : (
                  "Resend Email"
                )
              }
              onClick={ResendOtp}
              altClassName="py-2 btn-like"
            />
            </div>
            <div className="w-5/12">
            <Button
              title="Contact Support"
              altClassName="py-2 border-2 rounded-xl"
            />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupSuccessModal;
