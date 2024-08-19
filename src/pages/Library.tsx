import PhotoRobbin from "../components/LIbrary/PhotoRobbin/photoRobbin";
import Button from "../components/common/Buttons/button";

import libraryImg1 from "../assets/images/library-book-1.png";
import libraryImg2 from "../assets/images/library-book-2.png";

const BookShowcase = ({ title, books }: { title: string; books: any }) => {
  return (
    <div>
      <h3 className="outfit-font font-semibold text-[34px] sm:text-[44px] text-dark">
        {title}
      </h3>
      {/* <div className="flex justify-center sm:justify-between flex-wrap sm:flex-nowrap mt-10"> */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5 grid-rows-1  mt-10">
        {books.map(({ image, title, author }: any, index: number) => (
          <div className="w-full  " key={index}>
            <img src={image} alt="" className="sm:w-[12rem]" />
            <p className="text-sm sm:text-base font-bold">{title}</p>
            <p className="text-sm">{author} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Library() {
  const books = [
    {
      title: "A Children Book Ab...",
      author: "By Joe Barry",
      image: libraryImg1,
    },

    {
      title: "Early Coding For Kids",
      author: "By David Ogunshola",
      image: libraryImg2,
    },

    {
      title: "A Children Book Ab...",
      author: "By Joe Barry",
      image: libraryImg1,
    },

    {
      title: "Early Coding For Kids",
      author: "By David Ogunshola",
      image: libraryImg2,
    },

    {
      title: "Early Coding For Kids",
      author: "By David Ogunshola",
      image: libraryImg2,
    },
  ];

  return (
    <div className="">
      <div className="px-3 sm:px-20 w-screen border md:pt-28 pt-5 pb-40 md:pb-28 transition-all duration-300 bg-white">
        <div className="flex items-center flex-col sm:flex-row text-center sm:text-start outfit-font bg-white">
          <div className="w-full sm:w-[55%]">
            <p className="font-semibold -top-4 relative text-[35px] sm:text-[40px] text-[#b902dc]">
              Vast Collection Of Books Made Into Interactive learning with Tioo
            </p>
            <Button
              link
              to="/signup"
              className="px-8 mt-4 py-2 bg-main rounded font-semibold text-white text-[23px]"
            >
              Get Started
            </Button>
          </div>
          <div className="relative py-20 md:py-0 md:top-0 top-28 -left-[23rem] sm:-left-0">
            <PhotoRobbin />
          </div>
        </div>
      </div>

      <div className="my-10 bg-white px-3 sm:px-20  py-20">
        <BookShowcase title="Best Books For Pupils" books={books} />
      </div>
      <div className="my-10 bg-white px-3 sm:px-20  py-20">
        <BookShowcase title="Best Science Books " books={books} />
      </div>
    </div>
  );
}
