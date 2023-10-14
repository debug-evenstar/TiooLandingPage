import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { pricingData } from "../../../data/data";
import point from "../../../images/pricingimg/point.png";
// import axios;

function Pricing() {

  const [pricing, setPricing] = useState<any>([]);
  const [symbol, setSymbol] = useState('');
  const [country, setCountry] = useState('');
  const navigate = useNavigate();
  const [ pricingObject, setPricingObject ] = useState<{[key: string]: number}>();
  const [ discount, setDiscount ] = useState<any>([]);
  const keys: string[] = ['monthly', 'quaterly', 'yearly'];



  useEffect(() => {
    fetch('https://api.ipify.org/?format=json')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        fetch('https://ipwho.is/' + data.ip)
          .then(resp => resp.json())
          .then(g_data => {
            console.log(g_data);
            setCountry(g_data.country_code)
            let cc = '';
            if (g_data.country_code === "NG") {
              cc = "NGN"
              setSymbol('₦');
            } else {
              cc = "USD";
              setSymbol('$');
            }

            fetch((process.env.REACT_APP_BASE_URL || 'https://beta.api.hellotioo.com') + '/open/pricing?cc=' + cc)
              .then(response => response.json())
              .then(data => {
                console.log("pricing",data)
                const result: {[key: string]: number} = {};
                data.data.pricing.forEach((item: any) => {
                  const key = Object.keys(item)[0];
                  const value = item[key]
                  result[key] = value;
                })
                setPricingObject(result);
                setPricing(Object.values(result));
                setDiscount([
                  null,
                  (result.monthly * 3) - result.quaterly,
                  (result.monthly * 12 ) - result.yearly
                ])
              })
              .catch(error => console.log())
          })

      })
      .catch(() => {
        const data = [
          {
            monthly: 4000
          },
          {
            quaterly: 9500
          },
          {
            yearly: 7500
          }
        ]
        const result: {[key: string]: number} = {};
        data.forEach((item: any) => {
          const key = Object.keys(item)[0];
          const value = item[key]
          result[key] = value;
        })
        setPricingObject(result);
        setPricing(Object.values(result));
        setDiscount([
          null,
          (result.monthly * 3) - result.quaterly,
          (result.monthly * 12 ) - result.yearly
        ])
        setSymbol('₦');
        console.log("failed to get location")
      });
      console.log(pricing);
  }, [])


  return (
    <>
      {
        // country == "NG" && 
        <div className="mt-10 p-5 rounded-[8px] shadow-xl w-[70%] mx-auto">
          <p className="text-center text-xl  text-primary font-[700] font-inter">
            Also, you don't have to pay for each child, one subscription covers all your children.
          </p>
        </div>
      }

      <div className="relative flex w-full px-16 mt-20 justify-center j gap-7">
        {pricingData.map((item: any, index: number) => (
          <div key={index} className="flex flex-col border justify-between space-y-3 p-7 w-[350px] gap-4 shadow-lg hover:scale-[1.01] duration-300 rounded-[8px] ">
            <div className="flex flex-col w-full gap-4">
              <p className="text-[#4F46E5] font-[700] flex h-[20px] justify-end">
                {( discount[index] !== null && discount[index] !== undefined ) && 'save ' + symbol + (discount[index] && discount[index]?.toLocaleString())}
              </p>
              <h1 className=" text-[#4F46E5] -mt-4 text-[40px] font-[700]">
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
