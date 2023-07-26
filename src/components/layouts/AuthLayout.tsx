import React from "react";

interface AuthLayoutProps {
  children?: React.ReactNode;
  type?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, type }) => {
  return (
    <div
      className={`h-[100vh] px-2 fixed lg:grid place-content-center overflow-y-auto w-full bg-[#E3E2FF] ${
        type === "register" && "pb-16"
      }`}
    >
      <div className="fixed">
        <h3 className="font-semibold text-[22px] pt-4 lg:pt-10 lg:mx-12 mx-2">
          Company's Logo
        </h3>
      </div>
      <div
        className={`w-full bg-white min-h-[450px] relative round-box z-30 mt-24 lg:mt-0 ${
          type === "signup" || type === "schtype"
            ? "lg:min-w-[850px]"
            : "lg:min-w-[650px]"
        }`}
      >
        <div
          className={`min-h-[450px] shades w-full round-box absolute z-20 p-8 ${
            type === "signup"
              ? "bg-[#E3E2FF] lg:border border-[#4F46E5]"
              : type === "schtype"
              ? "w-full bg-white"
              : "bg-white max-w-[717px]"
          }`}
        >
          {children}
        </div>
        <div
          className={`hidden lg:block min-h-[450px] rotates shades w-full round-box absolute z-10  ${
            type === "signup"
              ? "bg-[#E3E2FF] lg:border border-[#4F46E5]"
              : type === "schtype"
              ? "w-full bg-white"
              : "bg-white max-w-[717px]"
          } ${
            type === "register"
              ? "h-[750px]"
              : type === "complete"
              ? "h-[650px]"
              : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default AuthLayout;
