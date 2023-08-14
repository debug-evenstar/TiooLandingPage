import React from "react";
interface Sectionlayout {
  children?: React.ReactNode;
}

const SectionLayout: React.FC<Sectionlayout> = ({ children }) => {
  return <div className="relative p-3 sm:p-20 ">{children}</div>;
};

export default SectionLayout;
