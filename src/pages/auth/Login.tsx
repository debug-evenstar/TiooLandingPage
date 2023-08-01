import React, { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../components/Ui/TextInput";
import Button from "../../components/Ui/Button";
import { HashSpinner } from "../../components/Ui/Loading";
import { useLazyLoginQuery } from "../../services/api/authSlice";
import { toast } from "react-toastify";
import useModal from "../../hooks/useModal";
import VerifyEmailModal from "../../components/auth/verifyEmail";

const LoginScreen = () => {
  
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const {Modal, setShowModal} = useModal()
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const [login] = useLazyLoginQuery()
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigateTo = (res:any) => {
    
    if(res.data.profile.account_type === "school" || res.data.profile.account_type === "teacher"){
      if(res.data.profile.status === "active"){
        window.location.replace(`${res.data.profile.redirect}/${res.data.token}`)
      }else if(res.data.profile.status === "verified"){
        navigate('/school-complete')
      }else {
        //
      }
    }if(res.data.profile.account_type === "freelancer"){
      if(res.data.profile.status === "active"){
        window.location.replace(`${res.data.profile.redirect}/${res.data.token}`)
      }else if(res.data.profile.status === "verified"){
        navigate('/freelancer-complete')
      }else {
        //
      }
    }if(res.data.profile.account_type === "parent" || res.data.profile.account_type === "student"){
      if(res.data.profile.status === "active"){
        window.location.replace(`${res.data.profile.redirect}/${res.data.token}`)
      }else if(res.data.profile.status === "verified"){
        navigate('/parent-complete')
      }else {
        //
      }
    }
  }
  const onSubmit = async (data:any) => {
    setIsBusy(true);
    await login(data)
      .then((res:any) => {
        if (res.isSuccess) {
          toast.success(res.data.message)
          navigateTo(res)
          setIsBusy(false)
        }else {
          toast.error(res.error.data.message);
          if(res.error.data.action === "verify"){
            setEmail(data.email)
            setShowModal(true)
          }
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
        <div className="">
          <div className="text-center lg:w-7/12 mx-auto pb-3 border-b-[4px] border-[#4F46E5]">
            <p className="text-primary text-2xl fw-600">Log In</p>
            <p className="mt-1 fw-500">
              Login to your{" "}
              <Link to={"/"} className="text-primary">
                Tioo
              </Link>{" "}
              account
            </p>
          </div>
          <div className="lg:px-12 mt-6">
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
              <div className="mt-6">
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Password is too short",
                    },
                  }}
                  render={({ field }) => (
                    <TextInput
                      label="Password"
                      labelClassName="text-[#4A5568] mb-2 fw-500"
                      placeholder="*********"
                      error={errors.password?.message}
                      type={InputType.password}
                      {...field}
                    />
                  )}
                />
                <div className="text-end">
                  <Link to="/forget" className="text-[#FF006E]">
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <div className="mt-8">
                <div className="w-10/12 mx-auto">
                  <Button
                    title={
                      isBusy ? (
                        <HashSpinner size={20} color="white" />
                      ) : (
                        "Login"
                      )
                    }
                    disabled={!isValid}
                  />
                </div>
              </div>
            </form>
            <div className="text-center mt-4">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-primary fw-500">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </AuthLayout>
      <Modal title="" noHeadWide>
        <VerifyEmailModal email={email} />
      </Modal>
    </>
  );
};

export default LoginScreen;
