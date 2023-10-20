import React from "react";
import Navbar from "../components/layouts/Navbar";
import MobileNavbar from '../components/layouts/MobileNavbar';
import Footer from "../components/layouts/Footer";

// import Footer from "../components/layouts/Footer";
// import Cookie from "../components/UI/CookieBanner";
// import NoticeBanner from "../components/UI/NoticeBanner";
interface PageLayoutprops {
  children?: React.ReactNode;
  needfooter?: boolean;
}

const PageLayout: React.FC<PageLayoutprops> = ({
  children,
  needfooter = true,
}) => {
  return (
    <>
     {/* <div className="w-[100%] sm:max-w-[1440px] sm:min-w-[1024px] m-[auto]">
*/}      <div className="">
        <Navbar />
        <MobileNavbar />
        {children}
        {needfooter && <Footer />}
      </div>
    </>
  );
};

export default PageLayout;
