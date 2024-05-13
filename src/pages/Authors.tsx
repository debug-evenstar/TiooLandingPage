import heroImg from "../assets/images/authors-1.png";
import CustomList, {
  ListContentProps,
} from "../components/common/CusomList/customList";

import listImg from "../assets/images/authors-2.png";
import Button from "../components/common/Buttons/button";
import { NavLink } from "react-router-dom";

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
    <div className="px-3 sm:px-20 py-4 flex items-center justify-between outfit-font bg-white">
      <div className="">
        <div className="flex justify-between">
          <BouncingBall />
          <BouncingBall />
        </div>
        <p className="font-semibold -top-4 relative text-[40px] text-[#b902dc]">
          Gamify Your Textbooks And Workbooks <br /> For Fun Learning & Earnings
        </p>
        <p className="text-dark text-[21px] mb-5">
          We empower authors to turn their textbooks and workbooks seamlessly
          into <br /> engaging, gamified resources for K-12 learners and earn
          royalties.
        </p>
        <NavLink to="https://docs.google.com/forms/d/e/1FAIpQLScGoPUnTehAZLTPpCP6Q7SWM4gUuopoj52WgzM4KwroL7cPhg/viewform?embedded=true" className="px-12 mt-4 py-2 bg-main rounded font-semibold text-white text-[23px]">
          Join Tioo
        </NavLink>
      </div>
      <img src={heroImg} alt="" className="w-[30%]" />
    </div>
  );
};

const data: ListContentProps[] = [
  {
    header: "We bring your readers to you",
    content:
      "Tioo allows your educational content to reach K-12 students and educators around the world, opening new markets and opportunities for your work.",
  },
  {
    header: "Earn as you write",
    content:
      "As students access your gamified content, you earn royalties. It's a win-win, where your commitment to education is rewarded with tangible financial returns.",
  },
  {
    header: "We bring your books to life",
    content:
      "We turn static textbooks into interactive adventures, making learning an exciting and memorable experience for students.",
  },
  {
    header: "Digital Convenience",
    content:
      "Embrace the digital era. Make your textbooks and workbooks easily accessible on mobile phones, tablets, and laptops",
  },
  {
    header: "User Analytics",
    content:
      "Gain insights into how your content is being used. Our analytics tools provide valuable data on reader engagement, helping you refine your offerings and improve your content.",
  },
];

const WhyTioo = () => {
  return (
    <div className="py-20 px-3 sm:px-20">
      <div className="text-dark outfit-font mx-auto w-fit text-center">
        <p className=" font-semibold text-[45px]">Why Tioo?</p>
        <p className=" text-[24px]">
          Join us on this exciting journey to enhance kids' understanding while{" "}
          <br /> earning royalties when students access your educational content{" "}
        </p>
      </div>

      <div className="mt-10 flex sm:space-x-10 items-center sm:flex-row flex-col ">
        <CustomList data={data} />
        <img src={listImg} alt="" className="w-[40%]" />
      </div>
    </div>
  );
};


const Action = () => {
  return (
    <div className="py-20">
            <div className="py-10 bg-[#67007b] sm:w-[80%] mx-auto rounded-[16px] border-white border-[3px] px-28 drop">
        <div className="text-white outfit-font mx-auto w-fit text-center">
          <p className=" font-semibold text-[40px]">Make Learning Fun</p>
          <p className=" text-[24px]">
            Say goodbye to the contraints of traditional <br/>publishing timeslines. With our website, you have <br/> the flexibility to publish
             and update your content <br/>as needed, ensuring it remains current and <br/> relevant.
          </p>
        </div>
          <div className="flex justify-center font-semibold outfit-font mt-4 ">
            <Button className="border-2 border-gray-300  text-[22px] w-[18rem] py-2">
              Join Tioo
            </Button>
          </div>
      </div>

    </div>
  );
}

export default function Authors() {
  return (
    <div className="">
      <Header />
      <WhyTioo />
      <Action/>
    </div>

  );
}
