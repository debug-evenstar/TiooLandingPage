import React from "react";
import Benefits from "../../pages/home/sections/benefits/Benefits";
import Grades from "../../components/components/Grades";
import Navbar from "./sections/navbar/Navbar";
import TopicsVariety from "./sections/topics/TopicsVariety";
import FAQ from "./sections/faq/FAQ";
import Footer from "./sections/footer/Footer";
import HowItWorks from "./sections/how it works/HowItWorks";
import Header from "./sections/header/Header";

function LandingPage() {
  return (
    <div className="w-[100%] sm:max-w-[1440px] sm:min-w-[1024px] m-[auto] text-[#5c597d]">
      <Header />
      <HowItWorks />
      {/* <PhoneAdvert />
      <Instruction /> */}
      <Benefits />
      <Grades />
      <TopicsVariety />
      <FAQ />
      <Footer />
    </div>
  );
}

export default LandingPage;
