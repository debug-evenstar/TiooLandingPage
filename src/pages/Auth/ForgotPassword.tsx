import { FC, FormEvent, useState } from "react";
import forgotPasswordImg from "@/assets/images/signin.png"; // Assuming you want to use the same image, or replace with a new one
import arrowRight from "@/assets/images/icons/arrow-right.svg";
import { AuthHeader, Input } from "../../components/Auth";
import { NavLink, useNavigate } from "react-router-dom";
import { useLazyForgotPasswordQuery } from "@/services/api/authSlice"; // Update to the appropriate forgot password query
import { toast } from "react-toastify";
import { DotLoader } from "react-spinners";

interface FormErrorState {
  email?: string;
}

const FormArea: FC = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrorState>({
    email: "",
  });

  const validated = () => {
    const errors: FormErrorState = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    setFormErrors(errors);
    return Object.keys(errors).length == 0;
  };

  const [forgotPassword, { isLoading }] = useLazyForgotPasswordQuery();
  const navigate = useNavigate();

  const submitFormData = () => {
    forgotPassword({ email: formData.email }).then((response: any) => {
      if (response.isSuccess) {
        toast.success("Password reset link sent to your email.");
        navigate("/forgot-password/sent");
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
    <div className="bg-white px-6 sm:px-16 flex flex-col pt-20">
      <AuthHeader>Forgot Password</AuthHeader>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          label="Email"
          name="email"
          placeholder="Email address"
          errorMessage={formErrors.email}
          className="mb-5"
          handleChange={handleChange}
        />

        <div className="w-full flex items-center mt-4 justify-end">
          <button
            type="submit"
            className="bg-main rounded-[20px] px-10 py-2 flex text-white items-center font-[600]"
          >
            Send Reset Link
            {isLoading ? (
              <DotLoader color="white" size={12} className="w-[1.2rem] ml-2" />
            ) : (
              <img src={arrowRight} alt="" className="w-[1.2rem] ml-2" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default function ForgotPassword() {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 h-full">
      <div className="sm:h-full bg-[#fbf4fc] relative flex-col justify-end sm:flex">
        <img src={forgotPasswordImg} alt="Forgot Password" className="w-[40%] sm:w-[80%] mx-auto" />
      </div>
      <FormArea />
    </div>
  );
}
