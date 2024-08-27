import React, { useState } from 'react'
import './style.css';
import heroBgImg from "../../../assets/images/hero-bg.svg"
import heroBgMobileImg from "../../../assets/images/hero-bg-mobile.svg"
import heroPicImg from "../../../assets/images/hero-pic.png";
import playIcon from "../../../assets/images/icons/play.svg";

import Typewriter from 'typewriter-effect';
import { NavLink } from 'react-router-dom';


const Doodles = () => {
  return (
    <div className="hidden sm:block absolute z-[20] w-full h-full px-3 mt-12 -left-16 pointer-events-none sm:px-28 ">
      <span className="">
        <svg
          width="67"
          height="67"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.1815 9.97657C30.1504 11.2452 33.4894 11.3435 36.5277 10.2515M10.4134 36.3657C11.5044 33.3178 11.4063 29.9707 10.1385 26.992C9.14624 24.6203 8.87777 22.008 9.36691 19.4841C9.85605 16.9601 11.0809 14.6372 12.8874 12.8079C14.7392 10.9752 17.0922 9.7318 19.6496 9.23438"
            stroke="black"
            strokeOpacity="0.3"
            strokeWidth="0.493386"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5601 27.7641C20.1299 27.2625 22.493 26.0092 24.3498 24.1631M24.3498 24.1631C26.1594 22.3357 27.3864 20.0128 27.8757 17.488C28.365 14.9632 28.0946 12.35 27.0986 9.97896C25.8567 6.99962 25.788 3.66074 26.9062 0.632812M24.3498 24.1631L12.997 12.8103M0.791992 26.747C3.83156 25.6499 7.17585 25.7581 10.1381 27.0494"
            stroke="black"
            strokeOpacity="0.3"
            strokeWidth="0.493386"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <span className="inline-block absolute bottom-32">
        <svg
          width="60"
          height="69"
          viewBox="0 0 50 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_7868_21059)">
            <path
              d="M36.2938 9.22509L31.0051 24.8473L36.3241 39.9107C36.5843 40.6411 36.6334 41.43 36.4657 42.1869C36.2979 42.9439 35.9201 43.6382 35.3757 44.1902C34.8313 44.7422 34.1423 45.1295 33.3877 45.3077C32.6331 45.4859 31.8436 45.4477 31.1098 45.1976L8.14507 37.4231C7.41018 37.176 6.75985 36.7267 6.26872 36.1268C5.77758 35.5269 5.46553 34.8007 5.36838 34.0315C5.27124 33.2623 5.39293 32.4813 5.7195 31.7781C6.04606 31.0749 6.56427 30.478 7.21464 30.056L20.5902 21.3215L25.879 5.69925M21.9734 4.37706L40.1994 10.5473"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="1.83802"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_7868_21059">
              <rect
                width="38.4841"
                height="38.4841"
                fill="white"
                transform="translate(13.3047 -0.0078125) rotate(18.7031)"
              />
            </clipPath>
          </defs>
        </svg>
      </span>

      <span className="absolute right-10 bottom-32">
        <svg
          width="54"
          height="54"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.7814 8.70138L24.8606 0.780562C24.6651 0.585109 24.4331 0.430066 24.1778 0.324286C23.9224 0.218507 23.6487 0.164062 23.3723 0.164062C23.0959 0.164062 22.8222 0.218507 22.5669 0.324286C22.3115 0.430066 22.0795 0.585109 21.8841 0.780562L0.938765 21.7228C0.743312 21.9183 0.588269 22.1503 0.482489 22.4057C0.37671 22.661 0.322266 22.9347 0.322266 23.2111C0.322266 23.4875 0.37671 23.7612 0.482489 24.0165C0.588269 24.2719 0.743312 24.5039 0.938765 24.6994L8.85958 32.6202C9.05501 32.8156 9.28703 32.9707 9.54239 33.0764C9.79774 33.1822 10.0714 33.2367 10.3478 33.2367C10.6242 33.2367 10.8979 33.1822 11.1533 33.0764C11.4086 32.9707 11.6407 32.8156 11.8361 32.6202L32.7814 11.6779C32.9768 11.4825 33.1319 11.2504 33.2377 10.9951C33.3434 10.7397 33.3979 10.466 33.3979 10.1896C33.3979 9.91323 33.3434 9.63954 33.2377 9.38419C33.1319 9.12883 32.9768 8.89681 32.7814 8.70138ZM31.5051 10.4016L10.5613 31.3439C10.5334 31.3718 10.5002 31.394 10.4637 31.4091C10.4272 31.4243 10.3881 31.4321 10.3486 31.4321C10.3091 31.4321 10.27 31.4243 10.2335 31.4091C10.197 31.394 10.1638 31.3718 10.1359 31.3439L2.21505 23.4246C2.1871 23.3966 2.16492 23.3635 2.14979 23.327C2.13466 23.2905 2.12688 23.2514 2.12688 23.2118C2.12688 23.1723 2.13466 23.1332 2.14979 23.0967C2.16492 23.0602 2.1871 23.0271 2.21505 22.9991L7.23904 17.9751L11.4122 22.1483C11.4947 22.2369 11.5943 22.308 11.705 22.3573C11.8156 22.4066 11.935 22.4331 12.0561 22.4352C12.1772 22.4373 12.2975 22.4151 12.4099 22.3697C12.5222 22.3243 12.6242 22.2568 12.7098 22.1712C12.7955 22.0855 12.863 21.9835 12.9084 21.8712C12.9537 21.7589 12.976 21.6386 12.9739 21.5175C12.9717 21.3964 12.9452 21.2769 12.8959 21.1663C12.8466 21.0556 12.7756 20.9561 12.6869 20.8735L8.51383 16.7004L12.0496 13.1646L16.2227 17.3378C16.3937 17.4971 16.6198 17.5838 16.8535 17.5797C17.0872 17.5756 17.3101 17.4809 17.4754 17.3157C17.6406 17.1504 17.7353 16.9274 17.7394 16.6938C17.7435 16.4601 17.6568 16.234 17.4975 16.063L13.3243 11.8898L16.8601 8.35562L21.0332 12.5272C21.2042 12.6866 21.4303 12.7733 21.664 12.7692C21.8977 12.7651 22.1206 12.6704 22.2859 12.5051C22.4511 12.3399 22.5458 12.1169 22.5499 11.8833C22.554 11.6496 22.4673 11.4234 22.308 11.2525L18.1364 7.07933L23.1588 2.05685C23.1868 2.0289 23.2199 2.00672 23.2564 1.99159C23.2929 1.97646 23.332 1.96867 23.3716 1.96867C23.4111 1.96867 23.4502 1.97646 23.4867 1.99159C23.5232 2.00672 23.5563 2.0289 23.5843 2.05685L31.5051 9.97616C31.533 10.0041 31.5552 10.0372 31.5703 10.0737C31.5855 10.1102 31.5933 10.1494 31.5933 10.1889C31.5933 10.2284 31.5855 10.2675 31.5703 10.304C31.5552 10.3405 31.533 10.3737 31.5051 10.4016Z"
            fill="black"
            fillOpacity="0.3"
          />
        </svg>
      </span>
    </div>
  );
};

const TypeHeader = () => {

  // const [cursor, setCursor] = useState(true);
  let cursor = true;
  return <Typewriter
    options={{
      deleteSpeed: 4,
      cursor: '',
      delay: 50,
    }}

    onInit={(typewriter) => {
      typewriter
        .start()
        .typeString('Your <span class="text-main">one-stop shop</span> <br /> for smart textbooks')
        .pauseFor(500)
        .deleteAll()
        .typeString('<span class="text-main">Enhance</span> your learning <br /> with Tioo')
        .start()
    }}
  />
}



export default function NewHero() {
  return (
    <>
      <Doodles />
      <div className="h-[80vh] bg-[#F6D7FC]  sm:mb-[10rem] relative ">
        <img src={heroBgImg} alt="" className='hidden sm:block relative inset-0 w-full' />
        <img src={heroBgMobileImg} alt="" className='block sm:hidden h-[100vh] relative inset-0 w-full' />
        <div className="absolute inset-0 w-full h-full px-3 sm:px-20">
          <div className="flex items-center justify-between flex-col md:flex-row relative">
            <div className="order-2 md:order-1 font-[700]">
              <div className="text-[32px] h-[8rem] lg:text-[48px] sm:leading-[4rem]">
                <TypeHeader />
                {/* <span className="text-main">Revolutionize</span> your <br /> learning with Tioo */}
              </div>
              <p className="text-[16px] sm:text-[23px] urbanist text-gray-600 font-[400] mt-4  ">
                Discover thousands of interactive smart textbooks <br className="hidden sm:block" />across various subjects and exams preparations
              </p>
              <div className="py-10 sm:py-20 flex items-center justify-center sm:justify-start gap-x-4 relative">
                <NavLink to="/signup">
                  <button className="px-8 py-4 text-[17px] lg:text-[23px] rounded-full bg-main text-white weight-[700] urbanist">Get Started</button>
                </NavLink>
                <button className="flex items-center gap-x-1 text-gray-600">
                  <div className='lg:w-[48px] lg:h-[48px] shrink p-4 flex items-center justify-center rounded-full bg-white shadow-2xl'>
                    <img src={playIcon} alt="" className='' />
                  </div>
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img src={heroPicImg} alt="" className='relative w-[85%] mx-auto  md:w-[390px] lg:w-[560px] -top-0 sm:-top-14 pointer-events-none' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 
