import { MouseEvent, ReactNode, useRef, useState } from "react";

import { FiEye, FiEyeOff } from "react-icons/fi";
import "react-phone-input-2/lib/style.css";
import OldPhoneInput from "react-phone-input-2";
import Select from "react-dropdown-select";

export const SocialButton = ({ name, image, handler = () => null }: any) => {
  // currently hidden
  return (
    <button
      onClick={handler}
      type="button"
      className="lg:w-fit mb-3 w-full hidden items-center border rounded"
    >
      <img src={image} alt="" className="w-10 p-2 h-10 rounded border-r" />
      <span className="text-sm mx-auto font-[500] inline-block w-[8rem] text-center">
        {name}
      </span>
    </button>
  );
};

export const CheckboxInput = ({ name, active, setActive }: any) => {
  const ref = useRef<any>();

  const handleInputClick = (e: MouseEvent<HTMLInputElement>) => {};

  const handleClick = () => {
    setActive(!active);
    if (ref.current) {
      ref.current.value = !active ? "On" : "Off";
      ref.current.click();
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={`border border-gray-400 outline-none h-6 w-6 rounded ${
          ref.current && ref.current.value == "On" && "bg-main border-white"
        }`}
      >
        {ref.current && ref.current.value == "On" && (
          <div className="w-2 h-2 flex items-center text-lg justify-center text-white rounded-full mx-auto">
            ✔
          </div>
        )}
      </button>
      <input
        ref={ref}
        name={name}
        onClick={handleInputClick}
        type="checkbox"
        className="hidden"
      />
    </>
  );
};

export const Input = ({
  type = "text",
  placeholder,
  handleChange,
  name,
  errorMessage,
  label,
  className,
}: any) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={`w-full ${className}`}>
      <label className="text-sm" htmlFor={name}>
        {label}
      </label>
      <div className="relative">
        <input
          type={type == "password" ? (!visible ? "password" : "text") : type}
          placeholder={placeholder}
          onChange={handleChange}
          name={name}
          className="outline-none focus:border-main mt-2 w-full px-3 py-2 border border-gray-300 rounded"
        />
        {type == "password" && (
          <button
            type="button"
            onClick={() => setVisible(!visible)}
            tabIndex={-1}
            className="right-3 absolute top-5 "
          >
            {!visible ? (
              <FiEye size={16} color="#313131" />
            ) : (
              <FiEyeOff size={16} color="#313131" />
            )}
          </button>
        )}
      </div>
      <p className="text-red-500 h-4 text-sm">{errorMessage}</p>
    </div>
  );
};

export const AuthHeader = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="font-[600] text-2xl sm:text-3xl mb-10 text-center">
      {children}
    </h3>
  );
};

export const PhoneInput = ({
  placeholder,
  handleChange,
  errorMessage,
  value,
  label,
  name,
  country,
  className,
}: any) => {
  const [countryState, setCountryState] = useState<any>();

  const [ focused, setFocused ] = useState(false);
  return (
    <div className={`w-full ${className}`}>
      <label className="">{label}</label>
      <div className="relative mt-2">
        <OldPhoneInput
          inputProps={{
            name: name,
            maxLength: countryState?.countryCode == "234" ? 18 : 20,
            onFocus: () => setFocused(true),
            onBlur: () => setFocused(false)
          }}
          inputStyle={{
            width: "100%",
          }}
          isValid={(value: any, country: any) => {
            setCountryState(country);
            if (country.countryCode == "234") {
              return value.length <= 13;
            }
            return true;
          }}
          placeholder={placeholder}
          containerClass="w-full"
          country={country?.toLowerCase() ?? "ng"}
          value={value}
          countryCodeEditable={false}
        />
        { !focused && <span className="text-zinc-400/80 pointer-events-none absolute top-[8px] text-[14px] font-[500] font-sans left-[84px]">{placeholder}</span> }
      </div>
      <p className="text-red-500 h-4 text-sm">{errorMessage}</p>
    </div>
  );
};

export const SelectInput = ({
  placeholder,
  handleChange,
  errorMessage,
  label,
  options,
  values,
  className,
}: any) => {
  return (
    <div className={`w-full ${className}`}>
      <label className="">{label}</label>
      <div className="relative mt-2">
        <Select
          sortBy="name"
          options={options}
          className="hover:border-main outline-none ring-0 focus:border-main"
          values={values}
          onChange={handleChange}
        />
      </div>
      <p className="text-red-500 h-4 text-sm">{errorMessage}</p>
    </div>
  );
};
