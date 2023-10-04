import React, { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../components/Ui/TextInput";
import { HashSpinner } from "../../components/Ui/Loading";
import { toast } from "react-toastify";
import { useForgetPasswordMutation } from "../../services/api/authSlice";
import Button from "../../utils/Button";

const ForgetPasswordScreen = () => {
  const [isBusy, setIsBusy] = useState(false);
  const [forget] = useForgetPasswordMutation()
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = async (data:any) => {
    setIsBusy(true)
    await forget(data)
    .then((res:any) => {
      if (res.data) {
        toast.success(res.data.response);
        setIsBusy(false);
        reset()
      } else {
        toast.error(res?.error?.data?.message);
        setIsBusy(false);
      }
    })
    .catch((err) => {
      toast.error(err?.error?.data?.message);
      setIsBusy(false);
    });
  };
  return (
    <>
      <AuthLayout>
        <div>
          <div className="text-center lg:w-7/12 mx-auto pb-3 border-b-[4px] border-[#4F46E5]">
            <p className="text-primary text-2xl fw-600">Forgot Password</p>
          </div>
          <div className="mt-6 lg:px-12 text-center">
            <p>
              Enter the Email associated with your account and we’ll send an
              email with instructions to reset your password
            </p>
          </div>
          <div className="lg:px-12 mt-6 lg:mt-12">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Please enter your email",
                    },
                  }}
                  render={({ field }) => (
                    <TextInput
                      label="Email"
                      labelClassName="text-[#4A5568] mb-2 fw-500"
                      placeholder="Enter your email address"
                      error={errors.email?.message}
                      type={InputType.email}
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
                        "Send Reset Mail"
                      )
                    }
                    disabled={!isValid}
                  />
                </div>
              </div>
            </form>
            <div className="text-center mt-4">
              Switch back to?{" "}
              <Link to="/login" className="text-primary fw-500">
                Login
              </Link>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default ForgetPasswordScreen;