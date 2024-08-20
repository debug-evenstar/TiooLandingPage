import { FC } from 'react';
import bookImg from "@/assets/images/library-book-2.png";

const FeaturedContent = () => {
   return (
      <section className="px-3 sm:px-12 py-16">
         <div className="urbanist mb-5 mx-auto text-start">
            <h1 className="text-[35px] quicksand font-[600] text-[#1F3D4F] mb-4">
               <span className="text-[30px]">📚🌟</span>
               Step Into the Spotlight with Our Featured Books!
               <span className="text-[30px]">🌟📚</span> </h1>
            <p className="text-[20px] text-[#696984] mx-auto">We’re excited to showcase our handpicked selection of Featured Books—each one a gateway to captivating<br /> adventures and immersive experiences! Our curated collection highlights the best of what our Interactive<br /> Library has to offer. Discover stories that not only entertain but also engage and inspire.</p>
         </div>
         <div className="flex flex-col sm:flex-row gap-x-16 items-center">
            <div className="sm:w-[36%]  bg-[#FCEBFF] flex items-center rounded-[10px] justify-center py-5">
               <img src={bookImg} alt="" className="sm:w-[300px] bg-[#FCEBFF]" />
            </div>
            <div className='quicksand sm:w-[64%]'>
               <h2 className="text-[30px] sm:w-[64%] font-[600] mb-4">Early Coding For Kids 1 - 5</h2>
               <p className="urbanist text-[20px] text-[#696984]">
                  Unleash the excitement of coding with our interactive textbook designed for young learners. Dive into engaging lessons, real-world examples, and hands-on activities that make coding fun and accessible for all ages. Start your coding adventure today! 🚀💻
               </p>
               <div className="flex items-center justify-between">
                  <div className="flex items-center">
                     <div className="h-6 w-6 bg-purple-500 rounded-full mr-2"></div>
                     <p className="text-sm font-medium text-gray-700">Slides:</p>
                     <p className="text-sm text-gray-500 ml-2">586 slides</p>
                  </div>
                  <div className="flex items-center">
                     <div className="h-6 w-6 bg-purple-500 rounded-full mr-2"></div>
                     <p className="text-sm font-medium text-gray-700">Duration:</p>
                     <p className="text-sm text-gray-500 ml-2">10 Hours</p>
                  </div>
               </div>
               <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Preview
               </button>
            </div>
         </div>
      </section>
   );
}

export default FeaturedContent;