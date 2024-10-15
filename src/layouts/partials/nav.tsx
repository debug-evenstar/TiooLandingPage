import { NavLink, useLocation } from "react-router-dom";
import Button from "@/components/common/Buttons/button";
import logo from "@/assets/images/logo/logo.png";
import { navs } from "@/contants/nav";
import { useState, useEffect } from "react";

function SideNav({ navOpen, setNavOpen }: any) {
  const location = useLocation();

  const checkActive = (path: string) => {
    return path === location.pathname
      ? "border-main font-[500] text-main"
      : "border-white text-dark";
  };

  return (
    <div
      className={`flex duration-1000 ease-in-out ${
        navOpen ? "" : "translate-x-full"
      } fixed inset-0 px-4 bg-white h-screen w-full z-[2000] flex-col items-center gap-y-4 text-md border-b`}
    >
      <div className="flex py-4 items-center w-full justify-end">
        <button
          onClick={() => setNavOpen(false)}
          className="w-fit text-3xl text-main"
        >
          &#x2715;
        </button>
      </div>
      <div className="w-full flex flex-col gap-y-7">
        <nav className="flex flex-col mx-auto items-center outfit-font justify-between gap-y-6 w-[45%]">
          {navs.map(({ name, path }: any) => (
            <NavLink
              to={path}
              key={path}
              onClick={() => setNavOpen(false)}
              className={`text-xl text-dark border-b rounded pb-1 w-fit hover:text-main duration-300 ${checkActive(
                path
              )}`}
            >
              {name}
            </NavLink>
          ))}
        </nav>
        <div className="flex space-y-3 w-full flex-col">
          <NavLink to="/login">
            <button className="px-3 w-full rounded-r-[4px] rounded-tl-[4px] h-[42px] border font-semibold text-[20px] border-main text-main">
              Login
            </button>
          </NavLink>
          <Button className="h-[42px]">Start Learning</Button>
        </div>
      </div>
    </div>
  );
}

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const checkActive = (path: string) => {
    return path === location.pathname
      ? "border-main font-[500] text-main"
      : !isHome
      ? "border-white"
      : "border-[#F6D7FC] text-dark";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <SideNav {...{ navOpen, setNavOpen }} />
      <div
        className={`h-[85.84px] z-[1000] flex px-3 sm:px-10 ${
          sticky
            ? "fixed top-0 left-0 w-full bg-white shadow-md z-50"
            : "relative"
        } justify-between items-center ${
          isHome ? "bg-[#F6D7FC]" : ""
        }`}
      >
        <a href="/">
          <img src={logo} className="w-[80%]" alt="Logo" />
        </a>
        <nav className="hidden text-[17px] lg:flex items-center outfit-font relative gap-x-20 mx-auto">
          {navs.map(({ name, path }: { name: string; path: string }) => (
            <NavLink
              to={path}
              key={path}
              className={`border-b rounded pb-1 w-fit hover:text-main duration-300 ${checkActive(
                path
              )}`}
            >
              {name}
            </NavLink>
          ))}
        </nav>
        <button className="lg:hidden" onClick={() => setNavOpen(true)}>
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
        <div className="hidden lg:flex items-center space-x-2">
          <NavLink to="/login">
            <button className="px-7 rounded-full h-[42px] border urbanist font-[500] text-[18px] bg-white border-main text-main">
              Login
            </button>
          </NavLink>
          <NavLink to="/signup">
            <button className="px-5 rounded-full h-[42px] border urbanist font-[500] text-[18px] bg-main border-main text-white">
              Sign Up
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
