import { FC, useEffect, useRef, useState } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { books } from "@/contants/books";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useGetLibraryBooksQuery } from "@/services/api/routineSlice";

const SlideContainer = () => {
  let sliderRef: any = useRef(null);

  const [tab, setTab] = useState("exam");
  const [display, setDisplay] = useState([]);
  const { data, isLoading } = useGetLibraryBooksQuery(null);
  console.log(data);
  useEffect(() => {
    setDisplay(tab == "k-12" ? [] : data?.data ?? []);
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    sliderRef.slickPrev();
  };

  const handleNext = () => {
    sliderRef.slickNext();
  };

  return (
    <div>
      <div className="bg-[#FCEBFF] w-full h-[40px] p-1 font-[500] rounded-[5px] grid grid-cols-2 gap-x-2 items-center justify-center">
        <button
          onClick={() => setTab("exam")}
          className={`w-full h-full rounded-[8px] ${
            tab == "exam" && "bg-white"
          }`}
        >
          Exams Prep
        </button>
        <button
          onClick={() => {
            setTab("k-12");
            handlePrev();
          }}
          className={`w-full h-full rounded-[8px] ${
            tab == "k-12" && "bg-white"
          } `}
        >
          K-12 Books
        </button>
      </div>
      <div className="flex justify-between items-center mt-12">
        <h1 className="text-[30px] font-[500] text-gray-600 ">
          {tab == "k-12" ? "K-12" : "Exam prep"} Books
        </h1>
        <div className="flex items-center gap-x-3">
          <button
            onClick={handlePrev}
            className="w-12 h-12 flex items-center justify-center bg-white border rounded-full"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 flex items-center justify-center bg-white border rounded-full"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {display.length ? (
        <Slider
          ref={(slider: any) => {
            sliderRef = slider;
          }}
          {...settings}
          className="mt-10 min-h-[25rem] "
        >
          {display.map(({ cover_photo, name, author }: any, index: number) => (
            <div className="w-full  " key={index}>
              <img src={cover_photo} alt="" className="sm:w-[14rem]" />
              <p className="text-sm sm:text-base font-bold">{name}</p>
              <p className="text-sm">{author == "" ? "Tioo" : author} </p>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="min-h-[25rem] flex items-center justify-center w-full">
          <p className="text-2xl text-gray-500 px-12 py-3 rounded-full border-b shadow">
            Coming soon
          </p>
        </div>
      )}
      {/* </div> */}

      <div className="mt-10 flex justify-center">
        <Link to="/library">
          <button className="border border-main px-8 py-3 font-[600] text-[21px] text-slate-600">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

const ExamCard: FC<any> = ({ title, color, image, link }) => {
  const navigate = useNavigate();

  const isDisabled = false;

  const handleClick = () => {
    navigate('/signup');
    // if (link !== "#") navigate(link);
  };

  return (
    <div
      onClick={handleClick}
      className="rounded-[20px] px-2 py-3 flex cursor-pointer gap-3 w-full"
      style={{
        backgroundColor: color,
        // cursor: isDisabled ? "not-allowed" : "pointer",
      }}
    >
      <div className="w-[6rem] p-2 rounded-[20px] bg-white">
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="flex flex-col py-4 justify-between">
        <p className="font-bold text-white">{title}</p>
        <div className="flex items-center gap-x-10 mr-10 text-white justify-between">
          <span>{isDisabled ? "Coming soon" : "Examination"}</span>
          {/* <FaArrowRight color={isDisabled ? color : "white"} /> */}
        </div>
      </div>
    </div>
  );
};

const exams: any[] = [
  {
    title: "JAMB/UTME",
    image: "/images/exams/jamb.png",
    color: "#17C880",
    link: "#",
  },
  {
    title: "WAEC",
    image: "/images/exams/waec.png",
    color: "#F1BB87",
    link: "#",
  },
  {
    title: "NECO",
    image: "/images/exams/neco.png",
    color: "#A288A6",
    link: "#",
  },
];

const OurBooks = () => {
  return (
    <section className=" bg-[#FFF9FF] py-10 sm:py-20 px-4   ">
      <div className="urbanist w-full sm:w-[80%] mb-4 mx-auto text-center">
        <h1 className="text-[24px] sm:text-[38px] quicksand font-[600] text-[#1F3D4F] mb-4">
          <span className="text-[30px]">📚✨</span>
          Welcome to the Future of Exams Prep
          <span className="text-[30px]">✨📚</span>
        </h1>
        <p className="text-[20px] text-[#696984] mx-auto">
        Dive into a world where exam prep materials like tutorials and past questions are dynamic engaging experiences that come to life at your
          fingertips.
        </p>
      </div>
      <div className="px-3 sm:px-12 mt-2">
        {/* <SlideContainer /> */}
        <div className="flex gap-5 flex-col lg:flex-row mt-10">
          {exams.map((exam:any) => (
            <ExamCard {...exam} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBooks;
