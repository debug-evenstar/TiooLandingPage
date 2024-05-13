import { ReactNode } from "react";
import whyImg1 from '../../../assets/images/why-1.png';
import whyImg2 from '../../../assets/images/why-2.png';
import whyImg3 from '../../../assets/images/why-3.png';

import whySvg1 from '../../../assets/images/icons/why-1.svg';
import whySvg2 from '../../../assets/images/icons/why-2.svg';
import whySvg3 from '../../../assets/images/icons/why-3.svg';
import moleculeImg from '../../../assets/images/icons/molecule.svg';
import cellImg from '../../../assets/images/icons/cell.svg';

import AnimatedText from "../../common/AnimatedText/animatedText";


const WhyCard = ({
  className,
  image,
  title,
  content,
  children,
  background,
  border,
  angle,
}: {
  className?: string;
  image: any;
  title: string;
  content: string;
  children?: ReactNode;
  background: string;
  border: string;
  angle: number;
}) => {
  return (
    <div
      className={`flex w-[45%] sm:w-[320px] px-1 py-3 sm:py-0 sm:px-4 relative text-center h-[249px] sm:h-[380px] border-[3px] rounded-[8px] items-center justify-center ${className}`}
      style={{ borderColor: border, backgroundColor: background, transform: `rotate(${angle}deg)` }}
    >
      <div className="w-full relative" style={{transform: `rotate(${ -1 *angle}deg)`}}>
        <img
          src={`${image ? image : "https://robohash.org/something"} `}
          alt=""
          className="w-[70px] sm:w-[137px]"
        />
        <p className="capitalize font-semibold outfit-font text-base sm:text-[24px] text-main">
          {title}
        </p>
        <p className="mt-2 text-dark text-[12px] sm:text-sm text-center">{content}</p>
      </div>
      {children}
    </div>
  );
};

export default function WhyTioo() {
  return (
    <div className="py-20 relative z-[100]">
      <div className="z-[10] absolute w-full h-full px-3 sm:px-20">
        <AnimatedText className="-rotate-[10deg] text-gray-400 absolute sm:left-[14rem] font-bold" type="typewriter" text="a=v/t" />
        <AnimatedText className="text-gray-400 absolute right-28 sm:right-[20rem] font-bold levitate custom-delay-1">
          <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.7275 30H0.963867L13.5146 6.47754H0.963867V0.591797H23.7275L11.2178 24.1143H23.7275V30Z" fill="#710A85" fillOpacity="0.15"/>
          </svg>
        </AnimatedText>
        <AnimatedText className="text-gray-400 absolute right-10 sm:right-[12rem] -top-[3rem] levitate custom-delay-2">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.7207 30H23.8555V9C23.8555 8.58984 23.7734 8.20703 23.6094 7.85156C23.459 7.49609 23.2471 7.18848 22.9736 6.92871C22.7139 6.65527 22.4062 6.44336 22.0508 6.29297C21.6953 6.14258 21.3125 6.06738 20.9023 6.06738C20.4922 6.06738 20.1094 6.14258 19.7539 6.29297C19.3984 6.44336 19.084 6.65527 18.8105 6.92871C18.5508 7.18848 18.3457 7.49609 18.1953 7.85156C18.0449 8.20703 17.9697 8.58984 17.9697 9V30H12.084V9C12.084 8.58984 12.0088 8.20703 11.8584 7.85156C11.708 7.49609 11.4961 7.18848 11.2227 6.92871C10.9629 6.65527 10.6553 6.44336 10.2998 6.29297C9.94434 6.14258 9.56152 6.06738 9.15137 6.06738C8.74121 6.06738 8.3584 6.14258 8.00293 6.29297C7.64746 6.44336 7.33301 6.65527 7.05957 6.92871C6.7998 7.18848 6.59473 7.49609 6.44434 7.85156C6.29395 8.20703 6.21875 8.58984 6.21875 9V30H0.333008V9C0.333008 7.7832 0.558594 6.6416 1.00977 5.5752C1.47461 4.49512 2.10352 3.55859 2.89648 2.76562C3.70312 1.95898 4.63965 1.33008 5.70605 0.878906C6.78613 0.414062 7.93457 0.181641 9.15137 0.181641C10.2451 0.181641 11.2979 0.379883 12.3096 0.776367C13.3213 1.15918 14.2305 1.71973 15.0371 2.45801C15.8438 1.71973 16.7461 1.15918 17.7441 0.776367C18.7559 0.379883 19.8086 0.181641 20.9023 0.181641C22.1191 0.181641 23.2607 0.414062 24.3271 0.878906C25.4072 1.33008 26.3438 1.95898 27.1367 2.76562C27.9434 3.55859 28.5723 4.49512 29.0234 5.5752C29.4883 6.6416 29.7207 7.7832 29.7207 9V30Z" fill="#413E49" fillOpacity="0.15"/>
          </svg>
        </AnimatedText>
        <AnimatedText className="text-gray-400 absolute right-3 sm:right-[4rem] top-[2rem] font-bold levitate custom-delay-3">
          <img src={moleculeImg} alt="" />
        </AnimatedText>
        <div className="w-9 hidden sm:block h-9 rounded-full background-change right-20 top-[16rem] absolute"></div>

        <img src={cellImg} alt="" className="bottom-[10rem] absolute" />
      </div>
      <div className="text-dark outfit-font mx-auto w-fit text-center" data-aos="fade-down">
        <p className=" font-semibold text-[35px] sm:text-[45px]">Why Tioo?</p>
        <p className=" text-base sm:text-[24px]">
          Transform learning into an exciting and <br /> interactive experience.
        </p>
      </div>

      <div className="mt-10 flex items-center justify-center flex-row flex-wrap sm:space-x-10" data-aos="fade-up">
        <WhyCard
             background="#FFE68C"
          border="#EECD56"
          image={whyImg1}
          angle={-1.5}
          title="AI Powered Learning"
          content="Tioo leverages artificial intelligence to personalize and enhance your child’s educational experiences."
          className=""
        >
          <img src={whySvg1} alt="" className="w-[50px] absolute -right-5 top-10"/>
        </WhyCard>

        <WhyCard
          background="#FFC9F0"
          border="#F384D4"
          image={whyImg2}
          angle={1.5}
          title="Extensive Library"
          content="Our extensive textbook library provides access to a wide range of educational books and materials, offering diverse learning opportunities."
          className=""
        >
          <img src={whySvg2} alt="" className="w-[50px] absolute -right-5 bottom-10"/>
        </WhyCard>

        <WhyCard
          background="#9DDCFF"
          border="#5AB5E8"
          image={whyImg3}
          angle={-1.5}
          title="Interactive Workbooks"
          content="Our extensive textbook library provides access to a wide range of educational books and materials, offering diverse learning opportunities."
          className=""
        >
          <img src={whySvg3} alt="" className="w-[50px] absolute right-20 -top-6"/>
        </WhyCard>
      </div>
    </div>
  );
}
