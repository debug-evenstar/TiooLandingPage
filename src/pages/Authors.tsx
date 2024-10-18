import heroImg from "../assets/images/authors-1.png";
import CustomList, {
  ListContentProps,
} from "../components/common/CusomList/customList";

import listImg from "../assets/images/authors-2.png";
import Button from "../components/common/Buttons/button";
import { NavLink } from "react-router-dom";
import CallToAction from "@/components/common/CallToAction/callToAction";

const BouncingBall = () => {
  return (
    <div>
      <div className="w-4 h-4 rounded-full bg-[#f72ad6] bounce-custom"></div>
      <div className="h-3">
        <div className="w-4  h-2 rounded-[70%] bg-gray-100 bounce-shadow"></div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="px-3 sm:px-20 py-4 flex flex-col sm:flex-row items-center justify-between outfit-font bg-white">
      <div className="order-2 sm:order-1 ">
        <div className="flex justify-between lg:w-[50%]">
          <BouncingBall />
          <BouncingBall />
        </div>
        <p className="font-semibold -top-4 capitalize relative text-[30px] sm:text-[40px] text-[#b902dc]">
          {/* Gamify Your Study Resources <br className="hidden sm:block" /> For Fun
          Learning & Earnings */}
          Monetize Your Content, <br className="hidden sm:block" />
          Earn from your work.
        </p>
        {/* <p className="font-semibold -top-4 relative text-[30px] sm:text-[40px] text-[#b902dc]">
          Gamify Your Textbooks And Workbooks <br className="hidden sm:block" />{" "}
          For Fun Learning & Earnings
        </p> */}

        <p className="text-dark text-[19px] sm:text-[21px] mb-5">
          {/* We empower authors to turn their textbooks and workbooks seamlessly
          into <br /> engaging, gamified resources for K-12 learners and earn
          royalties. */}
          {/* Turn your textbooks and workbooks seamlessly into engaging, gamified
          resources for K-12 learners and earn royalties. */}
          Turn your tutorials, past questions and study guides seamlessly into
          engaging, gamified resources for students and earn royalties.
        </p>
        <div className="flex justify-center sm:justify-start">
          <NavLink
            to={import.meta.env.VITE_PUBLISHER_FRONT_URL}
            className="px-12 mt-4 py-2 bg-main rounded font-semibold text-white text-[23px]"
          >
            Join Tioo
          </NavLink>
        </div>
      </div>
      <img
        src={heroImg}
        alt=""
        className="sm:w-[30%] w-[70%] order-1 sm:order-2"
      />
    </div>
  );
};

const data: ListContentProps[] = [
  {
    header: "We bring your students to you",
    content:
      "Tioo allows your educational content to reach students around the world, opening new markets and opportunities for your work.",
  },
  {
    header: "Earn as you write",
    content:
      "As students access your gamified content, you earn royalties. It's a win-win, where your commitment to education is rewarded with tangible financial returns.",
  },
  {
    header: "We bring your content to life",
    content:
      "Tioo turns your tutorials and study guides into interactive  learning experiences, making studying exciting and memorable for students.",
  },
  {
    header: "Digital Convenience",
    content:
      "Embrace the digital era. Make your tutorials and study guides easily accessible on mobile phones, tablets, and laptops",
  },
  {
    header: "User Analytics",
    content:
      "Gain insights into how your content is being used. Our analytics tools provide valuable data on student engagement, helping you refine your offerings and improve your content.",
  },
];

const WhyTioo = () => {
  return (
    <div className="pt-10  px-3 sm:px-20 bg-white">
      <div className="text-dark outfit-font mx-auto w-fit text-center">
        <p className=" font-semibold text-[30px] md:text-[45px]">Why Tioo?</p>
        <p className=" text-[20px] md:text-[24px]">
          Join us on this exciting journey to enhance students understanding
          while <br className="hidden md:block" /> earning royalties when
          students access your educational content{" "}
        </p>
      </div>

      <div className="mt-10 flex sm:space-x-10 items-center sm:flex-row flex-col ">
        <div className="order-2 md:order-1 px-4">
          <CustomList background="bg-white" data={data} />
        </div>
        <img
          src={listImg}
          alt=""
          className="w-[80%] md:w-[40%] order-1 md:order-2"
        />
      </div>
    </div>
  );
};

const Action = () => {
  return (
    <div className="md:py-8 bg-white">
      <CallToAction style={{ paddingTop: "1rem", paddingBottom: "1rem" }} />
    </div>
  );
};

export default function Authors() {
  return (
    <div className="">
      <Header />
      <WhyTioo />
      <Action />
    </div>
  );
}
