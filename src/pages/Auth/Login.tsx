import { FC, FormEvent } from "react";
import loginImg from "@/assets/images/signin.png";

import arrowRight from "@/assets/images/icons/arrow-right.svg";
// import facebookImg from "@/assets/images/icons/facebook2.svg";
import googleImg from "@/assets/images/icons/google.svg";
// import appleImg from "@/assets/images/icons/apple.svg";
import { AuthHeader, Input } from "../../components/Auth";
import { CheckboxInput } from "../../components/Auth";
import { SocialButton } from "../../components/Auth";

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
    <div className="bg-white px-6 sm:px-16 flex flex-col justify-center">
      <AuthHeader>Sign in to your account</AuthHeader>

      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          label="Email or username"
          name="email"
          placeholder="Email address"
          className="mb-5"
          handleChange={handleChange}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          placeholder="Password"
          handleChange={handleChange}
        />
        <div className="flex justify-end">
          <NavLink className="font-[500] mt-2" to="#">
            Forgot Password
          </NavLink>
        </div>

        <div className="w-full flex items-center mt-4 justify-between">
          <div className="flex items-center space-x-3 ">
            {/* <input type="checkbox" name="remember" /> */}
            <CheckboxInput name="remember" />
            <label className="text-gray-400" htmlFor="">
              Remember me
            </label>
          </div>
          <button className="bg-main rounded-[20px] px-10 py-2 flex text-white items-center font-[600] ">
            Sign In
            <img src={arrowRight} alt="" className="w-[1.2rem] ml-2" />
          </button>
        </div>

        <div className="w-full border-t relative mt-8 flex justify-center">
          <span className="text-sm text-gray-600 inline-block border rounded-lg py-0 px-3 relative bg-white -top-3">
            Sign in with
          </span>
        </div>

        <div className="mt-3 flex  flex-col lg:flex-row items-center justify-center">
          <SocialButton name="Google" image={googleImg} handler={() => null} />
          {/* <SocialButton
            name="Facebook"
            image={facebookImg}
            handler={() => null}
          />
          <SocialButton name="Apple" image={appleImg} handler={() => null} /> */}
        </div>
      </form>
    </div>
  );
};

export default function Login() {
  return (
    <div className="grid md:grid-cols-2 h-full">
      <div className="h-full bg-[#fbf4fc] relative flex-col justify-end hidden sm:flex">
        <img src={loginImg} alt="" className="w-[80%] mx-auto" />
      </div>
      <FormArea />
    </div>
  );
}
