import React, { useEffect, useState } from "react";
import AuthLayout from "../../../components/layouts/AuthLayout";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import TextInput, { InputType } from "../../../components/Ui/TextInput";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";
import { HashSpinner } from "../../../components/Ui/Loading";
import Button from "../../../components/Ui/Button";
import { toast } from "react-toastify";
import { useLazyAcceptTeachInviteQuery, useLazyAcceptTeachMagicQuery, useLazyGetTeacherInviteInfoQuery, useLazyGetTeacherInviteQuery } from "../../../services/api/routineSlice";
import { saveEmail } from "../../../redux/reducers/userReducer";
import { useAppDispatch } from "../../../redux/store";
import useModal from "../../../hooks/useModal";
import SignupSuccessModal from "../../../components/auth/signupSuccess";

const TeacherSignup = () => {
  const [isBusy, setIsBusy] = useState(false);
  const [userData, setUserData] = useState<any>();
  const [email, setEmail] = useState('')
  const {Modal, setShowModal} = useModal()
  const [fetchDetail] = useLazyGetTeacherInviteQuery();
  const [fetchDetails] = useLazyGetTeacherInviteInfoQuery();
  const [acceptInvite] = useLazyAcceptTeachInviteQuery()
  const [acceptMagic] = useLazyAcceptTeachMagicQuery()
  const dispatch = useAppDispatch()
  const { id } = useParams();
  const navigate = useNavigate();
  const isMagic = () => {
    return id && id.length < 15;
  };
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      school: "",
      cpassword: "",
      schoolId: "",
      phone: "",
      subjects: [],
      classes: [],
      arm: "",
      account_type: "teacher",
      accountId: "",
    },
  });
  useEffect(() => {
    fetchTeacherDetail(id)
    // eslint-disable-next-line
  }, [id])
  useEffect(() => {
    reset({
      name: isMagic()
        ? ""
        : userData?.account.name,
      email: isMagic()
        ? ""
        : userData?.account.email,
      school: userData?.classarms
        .map((el: any) => el.naming)
        .join(","),
      account_type: isMagic()
        ? "teacher"
        : userData?.account.account_type,
      ...(isMagic()
        ? {
            schoolId: userData?.schoolId,
            subjects: userData?.Subjects,
            classes: userData?.classarms
            .map((el: any) => el.id)
          }
        : {
            accountId: id,
          }),
    });
    // eslint-disable-next-line
  }, [userData]);

  

  const fetchTeacherDetail = async (id: any) => {
    isMagic()?( await fetchDetails(id)
      .then((res: any) => {
        if (res.isSuccess) {
          setUserData(res.data.data);
        }else{toast.error('Failed to fetch invite info')}
      })
      .catch((err) => {}))
      : (await fetchDetail(id).then((res: any) => {
        if (res.isSuccess) {
          setUserData(res.data.data);
        }else{toast.error('Failed to fetch invite info')}
      })
      .catch((err) => {
        toast.error(err.data.message)
      }))
  };
  const onSubmit = async (data: any) => {
    setIsBusy(true);
    isMagic()? (await acceptMagic(data)
      .then((res: any) => {
        if (res.isSuccess) {
          toast.success(res.data.message);
          setEmail(data.email)
          setShowModal(true)
          dispatch(saveEmail({
            email: data.email
          }))
          setIsBusy(false)
        } else {
          toast.error(res?.error?.data.message);
          setIsBusy(false);
        }
      })
      .catch((err) => {
        toast.error(err?.error?.data?.message);
        setIsBusy(false);
      }))  : (await acceptInvite(data).then((res: any) => {
        if (res.isSuccess) {
          toast.success(res.data.message);
          navigate("/login");
        } else {
          toast.error(res?.error?.data.message);
          setIsBusy(false);
        }
      })
      .catch((err) => {
        toast.error(err?.error?.data?.message);
        setIsBusy(false);
      }))
  };
  return (
    <>
      <AuthLayout type="register">
      <div>
        <div className="text-center lg:w-9/12 mx-auto pb-3 border-b-[4px] border-[#4F46E5]">
          <p className="text-primary text-2xl fw-600">Teacher Sign Up</p>
          <p className="mt-1 fw-500">
            Create an account to get started on
            <Link to={"/"} className="text-primary pl-1">
              Tioo
            </Link>
          </p>
        </div>
        <div className="lg:px-12 mt-7">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Controller
                name="name"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Please enter your name",
                  },
                }}
                render={({ field }) => (
                  <TextInput
                    label="Full Name"
                    labelClassName="text-[#4A5568] mb-2 fw-500"
                    placeholder="Enter your full name"
                    error={errors.name?.message}
                    type={InputType.text}
                    {...field}
                    disabled={isMagic() ? false : true}
                  />
                )}
              />
            </div>
            <div className="mt-5">
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
                    disabled={isMagic() ? false : true}
                  />
                )}
              />
            </div>
            <div className="mt-5">
              <Controller
                name="school"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Please enter your class arm",
                  },
                }}
                render={({ field }) => (
                  <TextInput
                    label="Class"
                    labelClassName="text-[#4A5568] mb-2 fw-500"
                    error={errors.school?.message}
                    type={InputType.text}
                    {...field}
                    disabled
                  />
                )}
              />
            </div>
            <div className="mt-5">
              <label className="text-[#4A5568] mb-2 fw-500">Phone Number</label>
              <PhoneInputWithCountry
                international
                defaultCountry="NG"
                name="phone"
                control={control}
                rules={{ required: true }}
                className="lg:p-2 p-2 border-2 border-[#DA70D65E] rounded outline-none mt-1"
              />
              {errors.phone && (
                <p className="error text-red-500 fw-500">
                  Invalid Phone Number
                </p>
              )}
            </div>
            <div className="mt-5 grid lg:grid-cols-2 gap-5">
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
              <Controller
                name="cpassword"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  validate: (val) => {
                    if (watch("password") !== val) {
                      return "Your passwords do no match";
                    }
                  },
                }}
                render={({ field }) => (
                  <TextInput
                    label="Confirm Password"
                    labelClassName="text-[#4A5568] mb-2 fw-500"
                    placeholder="*********"
                    error={errors.cpassword?.message}
                    type={InputType.password}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="mt-8">
              <div className="w-10/12 mx-auto">
                <Button
                  title={
                    isBusy ? <HashSpinner size={20} color="white" /> : "Sign Up"
                  }
                  disabled={!isValid}
                />
              </div>
            </div>
          </form>
          <div className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-primary fw-500">
              Login
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
    <Modal title="" noHeadWide>
    <SignupSuccessModal email={email} />
  </Modal>
    </>
  );
};

export default TeacherSignup;
