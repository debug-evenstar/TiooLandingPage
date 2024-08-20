import { FC, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa6';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { books } from '@/contants/books';

const SlideContainer = () => {
  let sliderRef: any = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const handlePrev = () => {
    sliderRef.slickPrev();
  }

  const handleNext = () => {
    sliderRef.slickNext();
  }

  return (
    <div>
      <div className='bg-[#FCEBFF] w-full h-[40px] p-1 font-[500] rounded-[5px] grid-cols-1 items-center justify-center'>
        <button className="bg-white w-full h-full rounded-[8px]">
          K12 Books
        </button>
      </div>
      <div className="flex justify-between items-center mt-12">
        <h1 className='text-[30px] font-[500] text-gray-600 '>K12 Books</h1>
        <div className="flex items-center gap-x-3">
          <button onClick={handlePrev} className="w-12 h-12 flex items-center justify-center bg-white border rounded-full"><FaChevronLeft /></button>
          <button onClick={handleNext} className="w-12 h-12 flex items-center justify-center bg-white border rounded-full"><FaChevronRight /></button>
        </div>
      </div>

      {/* <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 grid-rows-1  mt-10"> */}
      <Slider ref={(slider: any) => { sliderRef = slider }} {...settings} className="mt-10">

        {books.map(({ image, title, author }: any, index: number) => (
          <div className="w-full  " key={index}>
            <img src={image} alt="" className="sm:w-[14rem]" />
            <p className="text-sm sm:text-base font-bold">{title}</p>
            <p className="text-sm">{author} </p>
          </div>
        ))}
      </Slider>
      {/* </div> */}

      <div className="mt-10 flex justify-center">
        <button className="border border-main px-8 py-3 font-[600] text-[21px] text-slate-600">
          View All
        </button>

      </div>

    </div>
  );
}


const OurBooks = () => {
  return (
    <section className="mt-20 bg-[#FFF9FF] py-20 ">
      <div className="urbanist w-[80%] mb-4 mx-auto text-center">
        <h1 className="text-[38px] quicksand font-[600] text-[#1F3D4F] mb-4">
          <span className="text-[30px]">📚✨</span>
          Welcome to the Future of Books!<span className="text-[30px]">✨📚</span> </h1>
        <p className="text-[20px] text-[#696984] mx-auto">We’re thrilled to introduce our revolutionary Interactive Library—where reading meets innovation! Dive into a world <br /> where books are more than just pages and ink; they’re dynamic, engaging experiences that come to life at your<br /> fingertips.</p>
      </div>
      <div className="px-12 mt-2">
        <SlideContainer />
      </div>
    </section>
  )
}

export default OurBooks;