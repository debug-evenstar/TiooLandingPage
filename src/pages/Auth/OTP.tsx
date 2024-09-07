import { FC, FormEvent, useEffect, useRef, useState } from "react";
import loginImg from "@/assets/images/signin.png";

import arrowRight from "@/assets/images/icons/arrow-right.svg";
import googleImg from "@/assets/images/icons/google.svg";
import { AuthHeader, Input } from "../../components/Auth";
import { SocialButton } from "../../components/Auth";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {
  useLazySendOtpQuery,
  useLazyVerifyOtpQuery,
} from "@/services/api/authSlice";
import { toast } from "react-toastify";
import { DotLoader } from "react-spinners";

const OTPInputField = ({
  setValues,
  inputRefs,
  activeIndex,
  setActiveIndex,
}: {
  inputRefs: any[];
  setValues: Function;
  activeIndex: number;
  setActiveIndex: Function;
}) => {
  const setState = () => {
    const values = inputRefs.map((ref: any) => ref.current?.value);
    setValues(values.join(""));
  };

  useEffect(() => {
    if (activeIndex > inputRefs.length - 1) {
      return;
    }
    if (inputRefs[activeIndex].current) {
      inputRefs[activeIndex].current.focus();
    }
  }, [activeIndex]);

  const handlePasteEvent = (e: any) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text");
    const textArray = pastedText.split("");
    inputRefs.forEach((ref, index) => {
      if (ref.current) {
        ref.current.value = textArray[index];
        console.log(ref.current.value);
      }
    });

    setState();

    setActiveIndex(inputRefs.length - 1);
  };

  return (
    <div className="flex items-center space-x-3 w-fit mx-auto">
      {inputRefs.map((ref, index) => (
        <OTPInput
          key={index}
          inputRef={ref}
          fetchValues={setState}
          handlePaste={handlePasteEvent}
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
          index={index}
        />
      ))}
    </div>
  );
};

const OTPInput = ({
  index,
  inputRef,
  fetchValues,
  activeIndex,
  setActiveIndex,
  handlePaste,
}: any) => {
  const handleKeyDown = (e: any) => {
    // if(e.key == "Control" || e.key == 'v'){
    if (e.key == "v" && e.ctrlKey) {
      return true;
    }
    e.preventDefault();
    if (e.key == "Backspace") {
      e.target.value = "";
      if (index == 0) return;
      setActiveIndex(index - 1);
    } else {
      const digitRegex = /^\d+$/;
      if (!digitRegex.test(e.key)) return true;
      if (e.target.value == "") e.target.value = e.key;
    }
    fetchValues();
    if (e.target.value == "") return;
    setActiveIndex(index != 5 ? index + 1 : index);
  };

  return (
    <div>
      <input
        data-id={index}
        ref={inputRef}
        maxLength={1}
        onPaste={handlePaste}
        onKeyDown={handleKeyDown}
        className={`${
          index != activeIndex ? "pointer-events-none" : "metallic-bong"
        } w-12 h-12 inline-block rounded cursor-pointer outline-main text-center text-3xl font-[600] border border-main`}
      />
    </div>
  );
};

const FormArea: FC = () => {
  const [sendOtp] = useLazySendOtpQuery();
  const [verifyOtp, { isLoading }] = useLazyVerifyOtpQuery();
  const [values, setValues] = useState("");
  const [canResend, setCanResend] = useState(true);
  const [count, setCount] = useState(60);
  const [toggleField, setToggleField] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const { email } = useParams<{ email: string }>();

  const inputRefs: any[] = Array(6)
    .fill(null)
    .map(() => useRef<HTMLInputElement>());

  if (!email) {
    return;
  }

  const clearInputs = () => {
    const timeouts = inputRefs.reverse().map((ref, index) => {
      return setTimeout(() => {
        if (ref.current) ref.current.value = "";
      }, (index + 1) * 60);
    });
    setActiveIndex(0);
    setValues("");
  };

  const handleSubmit = () => {
    verifyOtp({ otp: values, email: email }).then((response: any) => {
      if (response.isSuccess) {
        toast.success(response.data.message);
        navigate('/login');
      } else {
        toast.error(response.error.data.message);
        clearInputs();
      }
    });
  };

  useEffect(() => {
    if (!canResend) {
      const timeout = setTimeout(() => {
        if (count > 0) {
          setCount((count) => count - 1);
        } else {
          clearTimeout(timeout);
          setCount(60);
          setCanResend(true);
        }
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [canResend, count]);

  const resendOTP = () => {
    const payload = {
      email: email,
    };

    sendOtp(payload)
      .then((res: any) => {
        if (res.isSuccess) {
          toast.success(res.data.message);
          setCanResend(false);
          setCount(60);
          setToggleField(!toggleField);
        }
      })
      .catch(() => {});
  };

  return (
    <div className="bg-white px-6 sm:px-16 flex flex-col justify-center">
      <AuthHeader>Verify your email</AuthHeader>
      <p className="my-3 text-center text-base font-[500]">
        Please enter the code we just sent to <b>{email}</b>
        {/* Please enter the code we just sent to <b>sta***@tioo.com</b> */}
      </p>

      <div>
        <OTPInputField
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          inputRefs={inputRefs}
          setValues={setValues}
        />

        <div className="flex justify-end"></div>

        <div className="w-full flex items-center mt-4 justify-center">
          <button
            disabled={values.length != 6}
            onClick={handleSubmit}
            className={`${
              values.length != 6 ? "bg-main-light" : "bg-main"
            } rounded-[20px] px-10 py-2.5 flex text-white items-center font-[600] `}
          >
            Verify and proceed
            {
              isLoading
              ? <DotLoader color="white" size={12} className="w-[1.2rem] ml-2" />
              : <img src={arrowRight} alt="" className="w-[1.2rem] ml-2" />
            }
          </button>
        </div>

        <p className="my-3 text-center text-base font-[500]">
          Didn't receive an OTP?{" "}
          <button
            onClick={resendOTP}
            disabled={!canResend}
            className={`mr-3 ${canResend ? "text-main" : "text-gray-500"}`}
          >
            Resend OTP
          </button>
          {!canResend && <span className="w-8 inline-block">({count}s)</span>}
        </p>

        <div className="w-full border-t relative mt-8 flex justify-center">
          <span className="text-sm text-gray-600 inline-block border rounded-lg py-0 px-3 relative bg-white -top-3">
            Sign in with
          </span>
        </div>

        <div className="mt-3 flex  flex-col lg:flex-row items-center justify-center">
          <SocialButton name="Google" image={googleImg} handler={() => null} />
        </div>
      </div>
    </div>
  );
};

export default function OTP() {
  return (
    <div className="grid md:grid-cols-2 h-full">
      <div className="h-full bg-[#fbf4fc] relative flex-col justify-end hidden sm:flex">
        <img src={loginImg} alt="" className="w-[80%] mx-auto" />
      </div>
      <FormArea />
    </div>
  );
}
