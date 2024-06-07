import { NavLink, useLocation} from "react-router-dom";
import Button from "@/components/common/Buttons/button";
import logo from "@/assets/images/logo/logo1.png";
import { useState } from "react";

export default function LoginNav() {
  const [navOpen, setNavOpen] = useState(false);
  const {pathname} = useLocation();

  

  return (
    <>
      <div className="h-[90px] urbanist flex px-3 border-b sm:px-24 shadow sm:shadow-none justify-between items-center bg-white">
        <a href="/">
          <img src={logo} className="w-[80%]" alt="" />
        </a>
        <button className="lg:hidden outline-none" onClick={() => setNavOpen(true)}>
          <svg
            width="32"
            height="24"
            viewBox="0 0 32 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M31.5 12C31.5 11.6022 31.342 11.2206 31.0607 10.9393C30.7794 10.658 30.3978 10.5 30 10.5H2C1.60218 10.5 1.22064 10.658 0.93934 10.9393C0.658035 11.2206 0.5 11.6022 0.5 12C0.5 12.3978 0.658035 12.7794 0.93934 13.0607C1.22064 13.342 1.60218 13.5 2 13.5H30C30.3978 13.5 30.7794 13.342 31.0607 13.0607C31.342 12.7794 31.5 12.3978 31.5 12ZM31.5 2C31.5 1.60218 31.342 1.22064 31.0607 0.93934C30.7794 0.658035 30.3978 0.5 30 0.5H2C1.60218 0.5 1.22064 0.658035 0.93934 0.93934C0.658035 1.22064 0.5 1.60218 0.5 2C0.5 2.39783 0.658035 2.77936 0.93934 3.06066C1.22064 3.34197 1.60218 3.5 2 3.5H30C30.3978 3.5 30.7794 3.34197 31.0607 3.06066C31.342 2.77936 31.5 2.39783 31.5 2ZM31.5 22C31.5 21.6022 31.342 21.2206 31.0607 20.9393C30.7794 20.658 30.3978 20.5 30 20.5H2C1.60218 20.5 1.22064 20.658 0.93934 20.9393C0.658035 21.2206 0.5 21.6022 0.5 22C0.5 22.3978 0.658035 22.7794 0.93934 23.0607C1.22064 23.342 1.60218 23.5 2 23.5H30C30.3978 23.5 30.7794 23.342 31.0607 23.0607C31.342 22.7794 31.5 22.3978 31.5 22Z"
              fill="black"
            />
          </svg>
        </button>
        <div className="hidden lg:flex items-center space-x-4">
          <p>
          Already have an account?
          </p>
          <NavLink to={ !pathname.includes('signup') ? '/signup': '/login'}>
            <button className="bg-[#EED2F4] px-7 py-2 rounded-[4px] font-[700] text-main">
              { !pathname.includes('signup') ? "Sign Up": "Sign In"}
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
