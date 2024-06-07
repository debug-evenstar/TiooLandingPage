import { FC, FormEvent } from "react";

import loginImg from "@/assets/images/signin.png";
import arrowRight from "@/assets/images/icons/arrow-right.svg";
import facebookImg from "@/assets/images/icons/facebook2.svg";
import googleImg from "@/assets/images/icons/google.svg";
import appleImg from "@/assets/images/icons/apple.svg";
import { AuthHeader, Input } from "../components/Auth";
import { CheckboxInput } from "../components/Auth";
import { SocialButton } from "../components/Auth";

import { NavLink } from "react-router-dom";

const FormArea: FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: any) => {
    const name = e.target.name;
  };

  const sendRequest = () => {};

  return (
    <div className="bg-white px-16 flex flex-col justify-center">
      <AuthHeader>Reset your password</AuthHeader>

      <form onSubmit={handleSubmit}>
        <Input
          type="password"
          label="New Password"
          name="password"
          placeholder="Password"
          handleChange={handleChange}
          className="mb-5"
        />
        <Input
          type="password"
          label="Confirm password"
          name="password_confirmation"
          placeholder="Confirm Password"
          handleChange={handleChange}
        />

        <div className="w-full flex items-center mt-4 justify-center">
          <button className="bg-main rounded-[20px] px-7 py-2.5 flex text-white items-center font-[600] ">
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default function PasswordReset() {
  return (
    <div className="grid grid-cols-2 h-full">
      <div className="h-full bg-[#fbf4fc] relative flex flex-col justify-end">
        <img src={loginImg} alt="" className="w-[80%] mx-auto" />
      </div>
      <FormArea />
    </div>
  );
}
