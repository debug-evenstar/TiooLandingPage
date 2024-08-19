import { useEffect } from "react";
import AboutTioo from "../components/Home/AboutTioo/aboutTioo";
// import Demo from "../components/Home/Demo/demo";
import FAQ from "../components/Home/FAQ/faq";
// import FeaturedBook from "../components/Home/FeaturedBook/FeaturedBook";
import ForSchools from "../components/Home/ForSchools/forSchools";
import Hero from "../components/Home/Hero/newHero";
// import WhyTioo from "../components/Home/WhyTioo/why";
import CallToAction from "../components/common/CallToAction/callToAction";

import AOS from 'aos';

import 'aos/dist/aos.css';
import NewAboutTioo from "@/components/Home/AboutTioo/newAbout";
import TiooJAMBPrep from "@/components/Home/Tioojamb/TiooJambPrep";
import FeaturedContent from "@/components/Home/FeaturedContent/FeaturedContent";
import OurBooks from "@/components/Home/OurBooks/OurBooks"


export default function Home() {

  useEffect(() => {
    AOS.init({
      delay: 500,
      offset: 120,
      duration: 1000,
      easing: 'new-easing' as any
    });
  }, []);

  return (
    <div className="">
      <div className="header-container pb-16 mb-10">
        <Hero /> 
      </div>
      <NewAboutTioo />
      <OurBooks />
      {/* // <WhyTioo />2 */}
      {/* // <FeaturedBook/> */}
      <TiooJAMBPrep />
      {/* <FeaturedContent/> */}
      <ForSchools />
      <FAQ />
      <CallToAction />
    </div>
  );
}


// return (
//   <div className="">
//     <div className="header-container pb-16">
//       <Hero />
//       <Demo />
//     </div>
//     <AboutTioo />
//     <WhyTioo />
//     <FeaturedBook />
//     <ForSchools />
//     <FAQ />
//     <CallToAction />
//   </div>
// );
// }
