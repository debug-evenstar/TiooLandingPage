import React, { useState, useEffect } from "react";
import slide1 from "../../images/sliderimg/slide1.png";
import slide2 from "../../images/sliderimg/slide2.png";

interface Img {
  images: any[];
  autoplayInterval: number;
}
const images = [slide1, slide2];

const Slider: React.FC<Img> = ({ images, autoplayInterval }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBulletClick = (index: any) => {
    setCurrentSlide(index);
  };
  useEffect(() => {
    const autoplayTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, autoplayInterval);

    return () => {
      clearInterval(autoplayTimer);
    };
  }, [images.length, autoplayInterval]);

  return (
    // <div className="relative    ">
    //   <div className="overflow-hidden    ">
    //     <div
    //       className="flex transition-transform duration-300 ease-in-out  "
    //       style={{ transform: `translateX(-${currentSlide * 100}%)` }}
    //     >
    //       {images.map((image, index) => (
    //         <div key={index} className="   ">
    //           <img
    //             src={image}
    //             alt={`Slide ${index + 1}`}
    //             className="w-full h-auto"
    //           />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    //   <div className="flex justify-center mt-4">
    //     {images.map((_, index) => (
    //       <button
    //         key={index}
    //         onClick={() => handleBulletClick(index)}
    //         className={`h-2 w-2 mx-1 rounded-full transition-colors ${
    //           currentSlide === index ? "bg-black" : "bg-gray-400"
    //         }`}
    //       ></button>
    //     ))}
    //   </div>
    // </div>
    <div className="   w-full overflow-hidden sm:overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out  w-[672px]  sm:w-[990px] "
        style={{
          transform: `translateX(-${
            currentSlide == 0 ? currentSlide * 100 : currentSlide * 50
          }%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            // style={{ width: "100rem" }}
            className="    w-full"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 mx-1 rounded-full transition-colors ${
              currentSlide === index ? "bg-[#4F46E5]" : "bg-[#E3E2FF]"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
