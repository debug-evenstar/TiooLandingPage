import { FC, FormEvent, useState } from "react";
import loginImg from "@/assets/images/signin.png";

import arrowRight from "@/assets/images/icons/arrow-right.svg";
// import facebookImg from "@/assets/images/icons/facebook2.svg";
import googleImg from "@/assets/images/icons/google.svg";
// import appleImg from "@/assets/images/icons/apple.svg";
import { AuthHeader, Input } from "../../components/Auth";
import { CheckboxInput } from "../../components/Auth";
import { SocialButton } from "../../components/Auth";

import { NavLink, useNavigate } from "react-router-dom";
import { useLazyLoginQuery } from "@/services/api/authSlice";
import { toast } from "react-toastify";
import { DotLoader } from "react-spinners";
import { STUDENT_FRONT_BASE } from "@/services/constants";

interface FormErrorState {
  email?: string;
  password?: string;
}

const FormArea: FC = () => {
  const [tos, setTos] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrorState>({
    email: "",
    password: "",
  });

  const validated = () => {
    const errors: FormErrorState = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (formData.password.length < 6) {
      errors.password = "Password must at least 6 chars long";
    }

    setFormErrors(errors);

    return Object.keys(errors).length == 0;
  };

  const [registerUser, { isLoading }] = useLazyLoginQuery();
  const navigate = useNavigate();

  const submitFormData = () => {
    registerUser(formData).then((response: any) => {
      if (response.isSuccess) {
        toast.success(response.data.message);
        localStorage.setItem(
          "profile",
          JSON.stringify({ email: formData.email, token: response.data.token })
        );

        if (true == response.data.profile.onboarded) {
          window.location.assign(
            `${STUDENT_FRONT_BASE}/auth/${response.data.token}`
          );
        } else {
          navigate("/onboarding");
        }
        // console.log(response.data.data);
      } else {
        toast.error(response?.error?.data?.message);
      }
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validated()) {
      return submitFormData();
    }
  };

  const handleChange = (e: any) => {
    const name = e.target.name;
    setFormData({ ...formData, [name]: e.target.value });
  };

  return (
    <div className="bg-white px-6 sm:px-16 flex flex-col justify-center pt-5 sm:pt-0">
      <AuthHeader>Sign in to your account</AuthHeader>

      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          label="Email or username"
          name="email"
          placeholder="Email address"
          errorMessage={formErrors.email}
          className="mb-5"
          handleChange={handleChange}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          placeholder="Password"
          errorMessage={formErrors.password}
          handleChange={handleChange}
        />
        <div className="flex justify-end">
          <NavLink to="password-reset" className="font-[500] mt-2">
            Forgot Password
          </NavLink>
        </div>

        <div className="w-full flex items-center mt-4 justify-between">
          <div className="flex items-center space-x-3 ">
            {/* <input type="checkbox" name="remember" /> */}
            <CheckboxInput name="remember" active={tos} setActive={setTos} />
            <label className="text-gray-400" htmlFor="">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="bg-main rounded-[20px] px-10 py-2 flex text-white items-center font-[600] "
          >
            Sign In
            {isLoading ? (
              <DotLoader color="white" size={12} className="w-[1.2rem] ml-2" />
            ) : (
              <img src={arrowRight} alt="" className="w-[1.2rem] ml-2" />
            )}
          </button>
        </div>

        <div className="w-full border-t relative mt-8 flex justify-center">
          <span className="text-sm text-gray-600 inline-block border rounded-lg py-0 px-3 relative bg-white -top-3">
            Sign in with
          </span>
        </div>

        <div className="mt-3 flex  flex-col lg:flex-row items-center justify-center">
          <SocialButton name="Google" image={googleImg} handler={() => null} />
        </div>
      </form>
    </div>
  );
};

export default function Login() {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 h-full">
      <div className="sm:h-full bg-[#fbf4fc] relative flex-col justify-end sm:flex">
        <img src={loginImg} alt="" className="w-[40%] sm:w-[80%] mx-auto" />
      </div>
      <FormArea />
    </div>
  );
}
