import { FC, FormEvent, useEffect, useRef, useState } from "react";
import loginImg from "@/assets/images/signin.png";

import arrowRight from "@/assets/images/icons/arrow-right.svg";
import googleImg from "@/assets/images/icons/google.svg";
import { AuthHeader, Input } from "../../components/Auth";
import { SocialButton } from "../../components/Auth";
import { useLazyAcceptStudMagicQuery } from "@/services/api/routineSlice";

const OTPInputField = () => {
  const [values, setValues] = useState<string[]>(Array(6).fill("1"));

  const inputRefs: any[] = Array(6)
    .fill(null)
    .map(() => useRef<HTMLInputElement>());

  const [activeIndex, setActiveIndex] = useState(0);

  console.log(activeIndex);

  useEffect(() => {
    if (activeIndex > inputRefs.length - 1) {
      return;
    }
    if (inputRefs[activeIndex].current) {
      inputRefs[activeIndex].current.focus();
    }
  }, [activeIndex]);


  const handlePasteEvent = ( e: any ) => {
    const pastedText = e.clipboardData.getData('text');
    const textArray = pastedText.split('');

    inputRefs.forEach((ref,index) => {
      if(ref.current){
       ref.current.value = textArray[index];
      }
    });

    setActiveIndex(inputRefs.length - 1)
  }

  return (
    <div className="flex items-center space-x-3 w-fit mx-auto">
      {inputRefs.map((ref, index) => (
        <OTPInput
          inputRef={ref}
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
  activeIndex,
  setActiveIndex,
  handlePaste,
}: any) => {
  const handleClick = () => {
    // setActiveIndex(index);
  };

  const onChange = (index: number, e: any) => {};

  const handleKeyDown = (e: any) => {
    if (e.key == "Backspace") {
      if (index == 0) return;
      e.target.value == "";
      setActiveIndex(index - 1);
    }
    if (e.target.value == "") return;
    setActiveIndex(index + 1);
  };

  return (
    <div>
      <input
        onClick={handleClick}
        data-id={index}
        ref={inputRef}
        maxLength={1}
        onPaste={handlePaste}
        onKeyDown={handleKeyDown}

        className={`${index != activeIndex && 'pointer-events-none'} w-12 h-12 inline-block rounded cursor-pointer outline-main text-center text-3xl font-[600] border border-main`}
        onChange={(e) => onChange(index, e)}
      />
    </div>
  );
};

const FormArea: FC = () => {
  const sendRequest = () => {};

  return (
    <div className="bg-white px-6 sm:px-16 flex flex-col justify-center">
      <AuthHeader>Verify your email</AuthHeader>
      <p className="my-3 text-center text-base font-[500]">
        Please enter the code we just sent to <b>sta***@tioo.com</b>
      </p>
      <form>
        <OTPInputField />
        <div className="flex justify-end"></div>

        <div className="w-full flex items-center mt-4 justify-center">
          <button className="bg-main rounded-[20px] px-10 py-2.5 flex text-white items-center font-[600] ">
            Verify and proceed
            <img src={arrowRight} alt="" className="w-[1.2rem] ml-2" />
          </button>
        </div>

        <p className="my-3 text-center text-base font-[500]">
          Didn't receive an OTP? <span className="text-main">Resend OTP</span>
        </p>

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
