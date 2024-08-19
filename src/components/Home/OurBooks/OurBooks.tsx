import { FC } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa6';


const SlideContainer = () => {
  return (
    <div>
      <div className='bg-[#FCEBFF] w-full h-[40px] p-1 font-[500] rounded-[5px] grid-cols-1 items-center justify-center'>
        <button className="bg-white w-full h-full rounded-[5px]">
          K12 Books
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className='text-[27px] font-[500] text-gray-600 '>K12 Books</h1>
        <div className="flex items-center gap-x-3">
          <button className="w-12 h-12 flex items-center justify-center bg-white border rounded-full"><FaChevronLeft /></button>
          <button className="w-12 h-12 flex items-center justify-center bg-white border rounded-full"><FaChevronRight /></button>
        </div>
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
        <p className="text-[20px] text-[#696984] w-[80%] mx-auto">We’re thrilled to introduce our revolutionary Interactive Library—where reading meets innovation! Dive into a world where books are more than just pages and ink; they’re dynamic, engaging experiences that come to life at your fingertips.</p>
      </div>
      <div className="px-16">
        <SlideContainer />
      </div>
    </section>
  )
}

export default OurBooks;