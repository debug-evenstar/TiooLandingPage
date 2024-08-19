import { NavLink } from "react-router-dom";
import checkboxImg from "../assets/images/icons/checkbox.svg";
import PricingFAQ from "../components/Pricing/PricingFAQ/faq";

interface PricingCardProps {
  name: string;
  price: number;
  discount?: number | null;
  features: string[];
}

const cards: PricingCardProps[] = [
  {
    name: "Monthly",
    price: 4000,
    discount: null,
    features: [
      "AI tutoring",
      "Unlimited answers to exercises and activities",
      "Video lessons",
      "Coaching from authors",
      "Q&A(Coming soon)",
    ],
  },
  {
    name: "Quartery",
    price: 9000,
    discount: -3000,
    features: [
      "AI tutoring",
      "Unlimited answers to exercises and activities",
      "Video lessons",
      "Coaching from authors",
      "Q&A(Coming soon)",
    ],
  },
  {
    name: "Yearly",
    price: 30000,
    discount: -18000,
    features: [
      "AI tutoring",
      "Unlimited answers to exercises and activities",
      "Video lessons",
      "Coaching from authors",
      "Q&A(Coming soon)",
    ],
  },
];

const PricingHeader = () => {
  return (
    <div className="py-24 flex items-center justify-center flex-col">
      <h4 className="font-semibold text-[35px] sm:text-[45px] sm:leading-[3.3rem] text-[#B902DC] text-center outfit-font">
        One Subscription, Unlimited Access <br className="sm:block hidden" />
        To Tioo
      </h4>
      <p className="text-dark sm:w-[48%] mx-auto text-center outfit-font mt-3">
        A single subscription gives you access to all the gamified textbooks and
        workbooks available in our library.
      </p>
    </div>
  );
};

const PricingCard = ({ name, price, discount, features }: PricingCardProps) => {
  return (
    <div className="mb-3 sm:mb-0 border border-gray-200 rounded-[8px] p-4 py-5 flex flex-col w-[17rem]">
      <div className="font-[500] inter-font text-dark">
        <h3 className="text-[20px]">{name}</h3>
        <div className="flex items-center space-x-3">
          <h3 className="text-[30px]">₦ {price.toLocaleString()}</h3>
          {discount && (
            <p className="rounded bg-gray-100 px-2 text-[12px]">
              {discount.toLocaleString()}
            </p>
          )}
        </div>
      </div>
      <div className="mt-2 flex space-y-3 flex-col">
        {features.map((feature, index) => (
          <div key={index} className="flex space-x-3">
            <img src={checkboxImg} alt="" />
            <span className="text-dark text-sm">{feature}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-3">
        <NavLink to="/signup">
          <button className="py-2 rounded-r-[4px] rounded-tl-[4px]  border border-main text-main w-full text-sm">
            Get Started
          </button>
        </NavLink>
      </div>
    </div>
  );
};

const PricingCards = () => {
  return (
    <div className="py-10 mb-3 sm:mb-0">
      <div className="w-fit flex items-center space-x-2 mx-auto outfit-font p-1.5 border-gray-200 rounded border">
        <button className="text-sm px-4 py-2 bg-[#171717] text-white rounded">
          For Students
        </button>
        <button className="text-sm px-4 py-2">For Schools</button>
      </div>
      <div className="mt-6 flex flex-wrap justify-center mx-auto w-fit sm:space-x-10">
        {cards.map((card, index) => (
          <PricingCard {...card} key={index} />
        ))}
      </div>
    </div>
  );
};

export default function Pricing() {
  return (
    <div className="bg-white">
      <PricingHeader />
      <PricingCards />
      <PricingFAQ />
    </div>
  );
}
