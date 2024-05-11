// import React from "react";
import { useLazySendOtpQuery } from "./api/authSlice";
import { toast } from "react-toastify";

export const SendOtp = (email: string) => {
  const [sendOtp] = useLazySendOtpQuery();
  const payload = {
    email: email,
  };
  sendOtp(payload)
    .then((res: any) => {
      if (res.isSuccess) {
        toast.success(res.data.message);
      }
    })
    .catch((err) => { console.log(err)});
};
