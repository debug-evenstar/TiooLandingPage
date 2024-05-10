import featuredBookImg from "../../../assets/images/featured-book.png";
import Button from "../../common/Buttons/button";
import "./style.css";

export default function FeaturedBook() {
  return (
    <div className="pt-14 py-20 px-4 sm:ps-20 bg-white text-dark">
      <p className="font-semibold text-[35px] sm:text-[45px] outfit-font text-dark" data-aos="fade-down">
        Featured Book
      </p>
      <div className="flex flex-col sm:flex-row">
        <div className="w-[55%] mx-auto sm:w-auto">
          <img src={featuredBookImg} alt="" className="relative -left-7" data-aos="fade-down"/>
        </div>
        <div className="background w-full sm:w-[65%]  outfit-font ps-10 relative -left-7 flex items-center">
          <div className="sm:-top-10 relative" data-aos="fade-left">
            <p className="font-semibold text-[35px] sm:text-[44px]">
              Early Coding For Kids
            </p>
            <p className="text-[20px]">
              Dive into our flagship textbook, "Early Coding For Kids," designed
              to introduce young learners to the exciting world of coding.<br/>
              Discover interactive lessons, real-world examples, and hands-on
              activities that make coding accessible and fun for students of all
              ages
            </p>
            <Button className="font-semibold outfit-font px-5 text-[24px] mt-4 py-2">Preview Book</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
