import { FC, FormEvent } from "react";
import signupImg from "@/assets/images/signup.png";

import arrowRight from "@/assets/images/icons/arrow-right.svg";
import facebookImg from "@/assets/images/icons/facebook2.svg";
import googleImg from "@/assets/images/icons/google.svg";
import appleImg from "@/assets/images/icons/apple.svg";
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
    <div className="bg-white px-6 md:px-16 flex flex-col justify-center">
      <AuthHeader>Create your account</AuthHeader>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center flex-col sm:flex-row justify-between md:space-x-3">
          <Input
            type="text"
            label="First name"
            name="first_name"
            placeholder="Enter first name"
            className="mb-5"
            handleChange={handleChange}
          />
          <Input
            type="text"
            label="Last name"
            name="last_name"
            placeholder="Enter last name"
            className="mb-5"
            handleChange={handleChange}
          />
        </div>
        <div>
          <Input
            type="email"
            label="Email or username"
            name="email"
            placeholder="Email address"
            className="mb-5"
            handleChange={handleChange}
          />
        </div>
        <div className="flex items-center flex-col sm:flex-row  justify-between md:space-x-3">
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
            className="mb-5"
            handleChange={handleChange}
          />
        </div>

        <div className="w-full flex items-center mt-4 flex-col sm:flex-row justify-between">
          <div className="flex items-center space-x-3 ">
            {/* <input type="checkbox" name="remember" /> */}
            <CheckboxInput name="remember" />
            <label className="text-gray-500" htmlFor="">
              I Agree with all of your Terms & Conditions
            </label>
          </div>
          <button className="bg-main mt-5 md:mt-0 rounded-[20px] px-6 py-2 flex text-white items-center font-[600] ">
            Create Account
            <img src={arrowRight} alt="" className="w-[1.2rem] ml-2" />
          </button>
        </div>

        <div className="w-full border-t relative mt-8 flex justify-center">
          <span className="text-sm text-gray-600 inline-block border rounded-lg py-0 px-3 relative bg-white -top-3">
            Sign up with
          </span>
        </div>

        <div className="mt-3 flex  flex-col lg:flex-row items-center justify-center">
          <SocialButton name="Google" image={googleImg} handler={() => null} />
          {/* <SocialButton
            name="Facebook"
            image={facebookImg}
            handler={() => null}
          /> */}
          {/* <SocialButton name="Apple" image={appleImg} handler={() => null} /> */}
        </div>
      </form>
    </div>
  );
};

export default function SignUp() {
  return (
    <div className="grid md:grid-cols-2 h-full">
      <div className="h-full bg-[#fbf4fc] relative hidden sm:flex flex-col justify-center items-center">
        <img src={signupImg} alt="" className="w-[80%] mx-auto" />
      </div>
      <FormArea />
    </div>
  );
}
