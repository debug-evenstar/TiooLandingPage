import { FC, FormEvent, useState } from "react";
import { AuthHeader, Input } from "../../components/Auth";
import { useParams, useNavigate } from "react-router-dom";
import sideImg from "@/assets/images/signin.png"; // Assuming you want to use the same image, or replace with a new one

import { toast } from "react-toastify";
import { DotLoader } from "react-spinners";
import { useResetPasswordMutation } from "@/services/api/authSlice"; // Assuming you have a reset password mutation

interface FormErrorState {
  password?: string;
  confirmPassword?: string;
}

const NewPassword: FC = () => {
  const { token, email } = useParams<{ token: string; email: string }>();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrorState>({
    password: "",
    confirmPassword: "",
  });

  const validated = () => {
    const errors: FormErrorState = {};

    if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const navigate = useNavigate();

  const submitFormData = () => {
    resetPassword({
      code: token,
      email,
      password: formData.password,
    }).then((response: any) => {
      if (!response.data.error) {
        toast.success("Password successfully reset!");
        navigate("/login");
      } else {
        toast.error(response?.error?.data?.message || "Failed to reset password");
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
    <div className="flex flex-col sm:grid sm:grid-cols-2 h-full">
      <div className="sm:h-full bg-[#fbf4fc] relative flex-col justify-end sm:flex">
        <img src={sideImg} alt="Reset Password" className="w-[40%] sm:w-[80%] mx-auto" />
      </div>
      <div className="bg-white px-6 sm:px-16 flex flex-col justify-center pt-5 sm:pt-0">
        <AuthHeader>Reset Your Password</AuthHeader>
        <form onSubmit={handleSubmit}>
          <Input
            type="password"
            label="New Password"
            name="password"
            placeholder="Enter new password"
            errorMessage={formErrors.password}
            className="mb-5"
            handleChange={handleChange}
          />
          <Input
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Confirm new password"
            errorMessage={formErrors.confirmPassword}
            className="mb-5"
            handleChange={handleChange}
          />

          <div className="w-full flex items-center mt-4 justify-between">
            <button
              type="submit"
              className="bg-main rounded-[20px] px-10 py-2 flex text-white items-center font-[600]"
            >
              Reset Password
              {isLoading ? (
                <DotLoader color="white" size={12} className="w-[1.2rem] ml-2" />
              ) : (
                <img src="/path/to/arrow-right.svg" alt="" className="w-[1.2rem] ml-2" />
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
