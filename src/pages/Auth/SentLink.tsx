import { FC } from "react";
import resetLinkSentImg from "@/assets/images/signin.png"; // Assuming you want to use the same image, or replace with a new one

import { AuthHeader } from "../../components/Auth";
import { NavLink, useNavigate } from "react-router-dom";

const ResetLinkSent: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 h-full">
      <div className="sm:h-full bg-[#fbf4fc] relative flex-col justify-end sm:flex">
        <img src={resetLinkSentImg} alt="Reset link sent" className="w-[40%] sm:w-[80%] mx-auto" />
      </div>
      <div className="bg-white px-6 sm:px-16 text-center flex flex-col justify-center pt-5 sm:pt-0">
        <AuthHeader>Check your email</AuthHeader>
        <p className="text-gray-600 mb-4">
          A password reset link has been sent to your email. Please check your inbox and follow the instructions to reset your password.
        </p>

        <button
          className="bg-main rounded-[20px] px-10 py-2 flex w-fit mx-auto text-white items-center font-[600] mb-4"
          onClick={() => navigate("/login")}
        >
          Back to Login
        </button>

        <div className="text-gray-600">
          Didn’t receive the email?{" "}
          <NavLink to="/forgot-password" className="text-main font-[500]">
            Resend Password Reset
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ResetLinkSent;
