import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { pricingData } from "../../../data/data";
import point from "../../../images/pricingimg/point.png";
// import axios;

function Pricing() {

  const [pricing, setPricing] = useState<any>([]);
  const [symbol, setSymbol] = useState('');
  const navigate = useNavigate();
  const [discount, setDiscount] = useState<any>([]);
  const keys: string[] = ['monthly', 'quaterly', 'yearly'];


  const resolveResult = (data: any) => {
    const result: { [key: string]: number } = {};
    data.forEach((item: any) => {
      const key = Object.keys(item)[0];
      const value = item[key]
      result[key] = value;
    })

    return result;
  }

  const calculateSavings = (result: any) => {
    return [
      null,
      (result.monthly * 3) - result.quaterly,
      (result.monthly * 12) - result.yearly
    ]
  }


  useEffect(() => {

    const constructPricing = (data: any, error = false) => {
      const result = resolveResult(data);
      setPricing(Object.values(result));
      setDiscount(calculateSavings(result))
      if (error) {
        setSymbol('₦');
      }
    }

    const dummy_data = [
      { monthly: 8000 },
      { quaterly: 12000 },
      { yearly: 36000 },
    ]


    const country_code = localStorage.getItem('COUNTRY_CODE');

    if (country_code) {
      const condition = country_code === "NG";
      const cc = condition ? "NGN" : "USD";
      setSymbol(condition ? '₦' : '$');
      fetch((process.env.REACT_APP_BASE_URL || 'https://beta.api.hellotioo.com') + '/open/pricing?cc=' + cc)
        .then(response => response.json())
        .then(data => {
          constructPricing(data.data.pricing);
        })
        .catch(error => {
          constructPricing(dummy_data, true)
        })

    } else {
      constructPricing(dummy_data, true);
    }
  }, []);


  return (
    <>
      <div className="relative lg:flex w-full lg:px-16 px-3 mt-5 lg:mt-20 justify-center gap-7">
        {pricingData.map((item: any, index: number) => (
          <div key={index} className="flex flex-col border justify-between space-y-3 p-7 lg:w-[350px] mb-6 lg:mb-0 gap-4 shadow-lg hover:scale-[1.01] duration-300 rounded-[8px] ">
            <div className="flex flex-col w-full gap-4">
              <p className="text-[#4F46E5] font-[700] flex h-[20px] justify-end">
                {(discount[index] !== null && discount[index] !== undefined) && 'save ' + symbol + (discount[index] && discount[index]?.toLocaleString())}
              </p>
              <h1 className=" text-[#4F46E5] -mt-4 text-[30px] lg:text-[40px] font-[700]">
                {/* {item.amount} */}
                {symbol} {!!pricing.length ? pricing[index]?.toLocaleString() : null}
                <span className="text-black font-[400]">/{keys[index]?.replace('ua', 'uar')}</span>
              </h1>
              <p> </p>

              <p className="text-[18px]">
                {item.level} -
                <span className="text-[18px] ml-1 text-[#8A2BE2]">
                  {item.level_desc}
                </span>
              </p>
              <p>+</p>
              <div className="flex flex-col gap-3">
                {item.list.map((listitem: any, index: number) => (
                  <div key={index} className="flex gap-2 ">
                    <img src={point} alt="" className="w-[24px] h-[24px]" />

                    {item.list[item.list.length - 1] === listitem ? (
                      <p>
                        {listitem}
                        <span className="text-[#A87B0C]">(Coming soon)</span>
                      </p>
                    ) : (
                      <p>{listitem}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="bottom-0 ">
              {/*<Button2 text1="Get Started" onclick={() => { }} />*/}
              <button onClick={() => navigate('/signup')} className="w-full bg-[#4F46E5] py-3.5 rounded-[4px] text-white font-[600]">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>

    </>
  );
}

export default Pricing;
