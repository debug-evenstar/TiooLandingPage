import { FC } from "react";
import bookImg from "@/assets/images/jamb-maths.png";
// import bookImg from "@/assets/images/library-book-2.png";

const FeaturedContent = () => {
  return (
    <section className="px-3 sm:px-12 py-16">
      <div className="urbanist mb-5 mx-auto text-center sm:text-start">
        <h1 className="text-[23px] sm:text-[35px] quicksand font-[600] text-[#1F3D4F] mb-4">
          <span className="text-[30px]">📚🌟</span>
          Step Into the Spotlight with Our Featured Books!
          <span className="text-[30px]">🌟📚</span>{" "}
        </h1>
        <p className="text-[20px] text-[#696984] mx-auto">
          Our curated collection highlights the best of what our interactive
          library has to offer. <br />
          Discover stories that not only entertain but also engage and inspire.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row  gap-x-16 mt-16 items-center">
        <div className="w-full sm:w-[36%]  bg-[#FCEBFF] flex items-center rounded-[10px] justify-center py-5">
          <img src={bookImg} alt="" className="sm:w-[300px] bg-[#FCEBFF]" />
        </div>
        <div className="quicksand mt-5 sm:mt-0 sm:w-[64%]">
          <h2 className="text-[23px] sm:text-[30px] sm:w-[64%] font-[600] mb-4">
            JAMB mathematics
          </h2>
          <p className="urbanist text-[14px] sm:text-[20px] text-[#696984]">
            Master JAMB Mathematics with ease using our interactive textbook
            designed for exam success. Explore comprehensive lessons,
            step-by-step problem-solving techniques, and engaging activities
            that make learning math fun and effective. Begin your journey to
            acing JAMB today! 📘✏️ 
          </p>
          <div className="flex items-center gap-x-4 my-6">
            <div className="flex gap-x-2">
              <div className="h-4 shrink-0 grow w-4 bg-main rounded-full mr-2"></div>
              <div>
                <p className="font-[600] text-slate-800">Slides:</p>
                <p className="text-sm text-gray-500">586 slides</p>
              </div>
            </div>
            <div className="flex gap-x-2">
              <div className="h-4 shrink-0 grow w-4 bg-main rounded-full mr-2"></div>
              <div>
                <p className="font-[600] text-slate-800">Duration:</p>
                <p className="text-sm text-gray-500">10 Hours</p>
              </div>
            </div>
          </div>

          <a
            href="/signup"
            className="border capitalize border-main px-8 py-3 font-[600] text-[21px] text-slate-600"
          >
            start learning
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
