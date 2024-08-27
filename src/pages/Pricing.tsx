import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import checkboxImg from "@/assets/images/icons/checkbox.svg";
import PricingFAQ from "@/components/Pricing/PricingFAQ/faq";
import useCountryCode from "@/hooks/useCountryCode";
import { plans } from "@/contants/pricing";
import { useLazyGetContinentQuery } from "@/services/api/routineSlice";
import { fetchData } from "@/utils/fetch";
import { ScaleLoader } from "react-spinners";

interface PricingCardProps {
  name: string;
  price: number;
  discount?: number | null;
  features: string[];
  foreign: boolean;
  dollarPrice: number;
  dollarDiscount: number;
}


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

const PricingCard = ({ name, price, discount, dollarDiscount, dollarPrice, features, foreign }: PricingCardProps) => {

  const newPrice = foreign ? dollarPrice : price;
  const newDiscount = foreign && discount ? dollarDiscount : discount;

  return (
    <div className="mb-3 shadow-[0px_2px_18px_0px_#9C29B226] sm:mb-0 border border-[#9C29B226] rounded-[8px] p-4 py-5 flex flex-col w-[17rem]">
      <div className="font-[500] text-center inter-font text-dark">
        <h3 className="text-[16px] font-[600] urbanist">{name}</h3>
        <div className="flex items-center justify-center space-x-3">
          <h3 className="text-[32px] quicksand font-[600]">
            <span className="text-[15px] text-gray-500">{foreign ? "$" : "₦"}</span> {newPrice?.toLocaleString()}
            {newDiscount && (
              <span className="text-[15px] text-gray-500">
                / <span className="line-through">{newDiscount.toLocaleString()} </span>
              </span>
            )}
          </h3>
        </div>
      </div>
      <div className="mt-2 flex gap-y-5 flex-col">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-x-3">
            <img src={checkboxImg} alt="" />
            <span className="text-dark text-base font-[600]">{feature}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-3">
        <NavLink to="/signup">
          <button className="py-2 rounded-r-[4px] rounded-tl-[4px]  border border-main text-main w-full font-[600]">
            Get Started
          </button>
        </NavLink>
      </div>
    </div>
  );
};

const PricingCards = ({ foreign }: { foreign: boolean }) => {

  const [plan, setPlan] = useState<string>('basic');

  const handleClick = (plan: string) => {
    setPlan(plan);
  }

  const isActive = (p: any) => p === plan;

  const style = (plan: string) => isActive(plan) ?
    "text-sm px-4 py-2 bg-[#171717] text-white rounded"
    :
    "text-sm px-4 py-2"

  const cards = plan == 'basic' ? plans.basic : plans.pro;


  return (
    <div className="py-10 mb-3 sm:mb-0">
      <div className="w-fit flex items-center space-x-2 mx-auto outfit-font p-1.5 border-gray-200 rounded border">
        <button onClick={() => handleClick('basic')} className={style('basic')}>
          Basic Plan
        </button>
        <button onClick={() => handleClick('pro')} className={style("pro")}>
          Pro Plan
        </button>
      </div>
      <div className="mt-6 flex flex-wrap justify-center mx-auto w-fit sm:space-x-10">
        {cards.map((card: any, index: number) => (
          <PricingCard foreign={foreign} {...card} key={index} />
        ))}
      </div>
    </div>
  );
};

export default function Pricing() {
  const [loading, setLoading] = useState(true);
  const [getCon] = useLazyGetContinentQuery()
  const [countryCode, setCountryCode] = useState(null);

  useEffect(() => {
    const getConti = async () => {

      const response: any = await fetchData('https://api.ipify.org?format=json')
      if (response && response.ip)
        getCon(response.ip)
          .then((res: any) => {
            localStorage.setItem('COUNTRY_CODE', res.data.country_code ?? "NG");
            setCountryCode(res.data.country_code);
            setLoading(false);
          })
    }
    getConti()

  }, []);

  if (loading) {
    return (
      <div className="w-full h-[50vh] inset-0 flex items-center justify-center">
        <span>
          <ScaleLoader height={30} speedMultiplier={1.3} color="#9c29b2" />
        </span>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <PricingHeader />
      <PricingCards foreign={countryCode !== "NG" && countryCode !== null} />
      <PricingFAQ />
    </div>
  );
}
