import React from "react";
interface PageLayoutprops {
  children?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutprops> = ({ children }) => {
  return (
    <div className="w-[100%] sm:max-w-[1440px] sm:min-w-[1024px] m-[auto] text-[#5c597d]">
      {children}
    </div>
  );
};

export default PageLayout;
