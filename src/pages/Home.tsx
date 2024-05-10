import { useEffect } from "react";
import AboutTioo from "../components/Home/AboutTioo/aboutTioo";
import Demo from "../components/Home/Demo/demo";
import FAQ from "../components/Home/FAQ/faq";
import FeaturedBook from "../components/Home/FeaturedBook/FeaturedBook";
import ForSchools from "../components/Home/ForSchools/forSchools";
import Hero from "../components/Home/Hero/hero";
import WhyTioo from "../components/Home/WhyTioo/why";
import CallToAction from "../components/common/CallToAction/callToAction";

import AOS from 'aos';

import 'aos/dist/aos.css';

export default function Home() {

  useEffect(() => {
    AOS.init({
      delay: 500,
      offset: 120,
      duration: 1000,
      easing: 'new-easing'
    });
  },[]);

  return (
    <div className="">
      <div className="header-container pb-32">
        <Hero />
        <Demo />
      </div>
      <WhyTioo />
      <FeaturedBook/>
      <ForSchools/>
      <AboutTioo/>
      <FAQ/>
      <CallToAction/>
    </div>
  );
}
