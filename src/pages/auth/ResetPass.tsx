import React, {useState} from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from '../../components/Ui/TextInput';
import { HashSpinner } from '../../components/Ui/Loading';
// import {Button} from '../../components/Ui/Button';
import { toast } from 'react-toastify';
import { useResetPasswordMutation } from '../../services/api/authSlice';
import Button from '../../utils/Button';

const ResetPasswordScreen = () => {
  const { id, email } = useParams();
  const navigate = useNavigate();
  const [isBusy, setIsBusy] = useState(false)
  const [reset] = useResetPasswordMutation()
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      password: "",
      password2: "",
    },
  });
  const onSubmit = async (data:any) => {
    setIsBusy(true)
    const payload = {
      email: email,
      password: data.password,
      code: id
    }
    await reset(payload)
    .then((res:any) => {
      if (res.data) {
        toast.success(res.data.response);
        setIsBusy(false);
        navigate('/login')
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
        <div className='text-center lg:w-7/12 mx-auto pb-3 border-b-[4px] border-[#4F46E5]'>
            <p className='text-primary text-2xl fw-600'>Create New Password</p>
            <p className='mt-1 fw-500'>Enter new password</p>
          </div>
          <div className='lg:px-12 mt-6 lg:mt-12'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div>
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
                label="New Password"
                labelClassName="text-[#4A5568] mb-2 fw-500"
                placeholder="*********"
                error={errors.password?.message}
                type={InputType.password}
                {...field}
              />
            )}
          />
        </div>
        <div>
            <Controller
            name="password2"
            control={control}
            rules={{
                required: {
                  value: true,
                  message: "Re-enter your password",
                },
                validate: (val) => {
                  if (watch('password') !== val) {
                    return "Your passwords do no match";
                  }
                },
              }}
            render={({ field }) => (
              <TextInput
                label="Confirm new password"
                labelClassName="text-[#4A5568] mb-2 fw-500"
                placeholder="*********"
                error={errors.password2?.message}
                type={InputType.password}
                {...field}
              />
            )}
          />
        </div>
        <div className="mt-8">
          <Button title={isBusy ? <HashSpinner size={20} color="white"/> : "Reset Password"} disabled={!isValid} />
        </div>
            </form>
            <div className='text-center mt-4'>
            Switch back to? <Link to='/' className='text-primary fw-500'>Login</Link>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  )
}

export default ResetPasswordScreen