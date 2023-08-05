import React from "react";
import Benefits from "../../pages/home/sections/benefits/Benefits";
import Grades from "../../components/components/Grades";
import Navbar from "../home/sections/navbar/Navbar";
import FAQ from "../home/sections/faq/FAQ";
import Footer from "../home/sections/footer/Footer";
import Header from "./sections/header/Header";
import Offer from "./sections/offer/Offer";
import Offer2 from "./sections/offer2/Offer2";
import Whytioo from "./sections/whytioo/Whytioo";
import Whytioo2 from "./sections/whytioo2/Whytioo2";
import Whytioo3 from "./sections/whytioo3/Whytioo3";
import Schoolfit from "./sections/schoolfit/Schoolfit";
import HowitWorks from "./sections/howitworks/HowitWorks";

function Schools() {
  return (
    <div className="w-[100%] sm:max-w-[1440px] sm:min-w-[1024px] m-[auto] text-[#5c597d]">
      <Header />
      <Offer />
      <Offer2 />
      <HowitWorks />
      <Whytioo />
      <Whytioo2 />
      <Whytioo3 />
      <Schoolfit />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Schools;
