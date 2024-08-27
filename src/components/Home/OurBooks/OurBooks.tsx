import { FC, useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa6';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { books } from '@/contants/books';

const SlideContainer = () => {
  let sliderRef: any = useRef(null);

  const [tab, setTab] = useState('k-12');
  const [display, setDisplay] = useState(books ?? []);
  useEffect(() => {
    setDisplay(tab == 'k-12' ? books : [])
  }, [tab, display]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handlePrev = () => {
    sliderRef.slickPrev();
  }

  const handleNext = () => {
    sliderRef.slickNext();
  }

  return (
    <div>
      <div className='bg-[#FCEBFF] w-full h-[40px] p-1 font-[500] rounded-[5px] grid grid-cols-2 gap-x-2 items-center justify-center'>
        <button onClick={() => { setTab('k-12'); handlePrev() }} className={`w-full h-full rounded-[8px] ${tab == 'k-12' && 'bg-white'} `}>
          K-12 Books
        </button>
        <button onClick={() => setTab('exam')} className={`w-full h-full rounded-[8px] ${tab == 'exam' && 'bg-white'}`}>
          Exams Prep
        </button>
      </div>
      <div className="flex justify-between items-center mt-12">
        <h1 className='text-[30px] font-[500] text-gray-600 '>K-12 Books</h1>
        <div className="flex items-center gap-x-3">
          <button onClick={handlePrev} className="w-12 h-12 flex items-center justify-center bg-white border rounded-full"><FaChevronLeft /></button>
          <button onClick={handleNext} className="w-12 h-12 flex items-center justify-center bg-white border rounded-full"><FaChevronRight /></button>
        </div>
      </div>

      {
        display.length ?
          <Slider ref={(slider: any) => { sliderRef = slider }} {...settings} className="mt-10 min-h-[25rem] ">
            {display.map(({ image, title, author }: any, index: number) => (
              <div className="w-full  " key={index}>
                <img src={image} alt="" className="sm:w-[14rem]" />
                <p className="text-sm sm:text-base font-bold">{title}</p>
                <p className="text-sm">{author} </p>
              </div>
            ))}
          </Slider>
          :

          <div className="min-h-[25rem] flex items-center justify-center w-full">
            <p className="text-2xl text-gray-500 px-12 py-3 rounded-full border-b shadow">Coming soon</p>
          </div>
      }
      {/* </div> */}

      < div className="mt-10 flex justify-center" >
        <button className="border border-main px-8 py-3 font-[600] text-[21px] text-slate-600">
          View All
        </button>
      </div >

    </div >
  );
}


const OurBooks = () => {
  return (
    <section className="mt-20 bg-[#FFF9FF] py-10 sm:py-20 px-4   ">
      <div className="urbanist w-full sm:w-[80%] mb-4 mx-auto text-center">
        <h1 className="text-[24px] sm:text-[38px] quicksand font-[600] text-[#1F3D4F] mb-4">
          <span className="text-[30px]">📚✨</span>
          Welcome to the Future of Books!<span className="text-[30px]">✨📚</span>
        </h1>
        <p className="text-[20px] text-[#696984] mx-auto">
          Dive into a world  where books are more than just pages and ink; they’re dynamic, engaging experiences that come to life at your fingertips.
        </p>
      </div>
      <div className="px-3 sm:px-12 mt-2">
        <SlideContainer />
      </div>
    </section>
  )
}

export default OurBooks;