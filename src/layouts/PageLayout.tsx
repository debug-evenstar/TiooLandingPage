import React, { Children } from "react";
import Navbar from "../components/layouts/Navbar";
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
      <div className="w-[100%] sm:max-w-[1440px] sm:min-w-[1024px] m-[auto]">
        <Navbar />
<<<<<<< HEAD
        {children}
=======

        {children}

>>>>>>> 23b0ced42b31b68035025483290df55ee28815dd
        {needfooter && <Footer />}
      </div>
    </>
  );
};

export default PageLayout;
