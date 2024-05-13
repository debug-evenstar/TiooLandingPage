import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export default function Button({
  className,
  to,
  link = false,
  children,
  type = "small",
}: {
  children: ReactNode;
  to?: string;
  link?: boolean;
  type?: string;
  className?: string;
}) {
  return link ? (
    <NavLink target="_blank" to={to ? to : ""} className="">
      <button
        className={`bg-main hover:bg-[#B902DC] duration-300 font-semibold text-[20px] text-white px-3 rounded-r-[8px] rounded-tl-[8px] ${
          type == "big" ? "px-3 py-2" : ""
        } ${className}`}
      >
        {children}
      </button>
    </NavLink>
  ) : (
    <button
      className={`bg-main hover:bg-[#B902DC] duration-300 font-semibold text-[20px] text-white px-3 rounded-r-[8px] rounded-tl-[8px] ${
        type == "big" ? "px-3 py-2" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}
