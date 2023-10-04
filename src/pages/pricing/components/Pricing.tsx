import React, { useEffect, useState } from "react";
import { pricingData } from "../../../data/data";
import point from "../../../images/pricingimg/point.png";
import { Button2 } from "../../../components/Ui/Button";
function Pricing() {
  
  const [pricing, setPricing] = useState([]);
  const [ symbol, setSymbol ] = useState('');

  const keys: string[] = ['monthly', 'quaterly', 'yearly'];


  useEffect(() => {
    fetch('https://get.geojs.io/v1/ip/country.json')
      .then(response => response.json())
      .then(data => {
        let cc = '';
      if(data.country === "NG"){ 
        cc = "NGN" 
        setSymbol('₦');
      }else{
        cc = "USD";
        setSymbol('$');
      }
      fetch('https://api.hellotioo.com/open/pricing?cc='+cc)
        .then(response => response.json())
        .then(data => {
          setPricing(data.data.pricing);
        })

      })
      .catch(() => alert("failed to get location"));
  }, [])




  return (
    <div className="relative flex w-full px-16 mt-20 justify-center j gap-7">
      {pricingData.map((item: any, index: number) => (
        <div key={index} className="flex flex-col justify-between space-y-3 p-7 w-[370px] gap-4 shadows hover:scale-[1.01] duration-300 rounded-[8px] ">
          <div className="flex flex-col w-full gap-4">
            <h1 className=" text-[#4F46E5] text-[40px] font-[700]">
              {/* {item.amount} */}
              {symbol} {!!pricing.length && pricing[index][keys[index]]}
              <span className="text-[black] font-[400]">/{keys[index]}</span>
            </h1>
            <p> </p>
            {item.tip_desc ? (
              <p className="text-[#4F46E5]">
                {item.tip}
                <span className="text-[grey]">{item.tip_desc}</span>
              </p>
            ) : (
              <p> </p>
            )}
            <p className="text-[20px]">
              {item.level}-
              <span className="text-[20px] text-[#8A2BE2]">
                {item.level_desc}
              </span>
            </p>
            <p>+</p>
            <div className="flex flex-col gap-3">
              {item.list.map((listitem: any, index: number) => (
                <div key={index} className="flex gap-2 ">
                  <img src={point} className="w-[24px] h-[24px]" />

                  {item.list[item.list.length - 1] == listitem ? (
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
            <Button2 text1="Get Started" onclick={() => { }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Pricing;
