import React from "react";
import Button from "../../../components/components/Button";
import ButtonCustom from "../../../components/components/ButtonCustom";
import apple from "../../../images/apple.png";
import play from "../../../images/play.png";
import fire from "../../../images/fire.png";
import phone1 from "../../../images/phone1.png";
// import phone2 from "../../images/phone2.png";
import phone2 from "../../../images/phone2.png";
import frame from "../../images/Frame.png";

function PhoneAdvert() {
  const handleClick = () => {
    console.log("Do something");
  };
  return (
    <div className="w-full relative bg-[#F8F4F4] h-[449px] px-20 py-10">
      <img
        className="absolute bottom-[1px] right-[290px] w-[350px] h-[300px]"
        src={phone1}
      />
      <img
        className="absolute bottom-[1px] right-[70px] w-[371px] h-[320px]"
        src={phone2}
      />
      {/* <img
        className="absolute top-[80px] right-[140px] w-[250px] h-[250px] z-50"
        src={frame}
      /> */}
      <div className="w-[857px]">
        <h3 className="font-[poppins] text-[48px] font-[500]">
          Begin a seamless learning journey!
        </h3>
        <p className="text-[24px] font-[poppins] font-[500] mt-5 ">
          Download the app and get easier access to multiple lessons for your
          learning journey
        </p>
      </div>
      <div className="flex gap-10 h-[70px]  mt-32">
        <ButtonCustom
          height={35}
          width={218}
          image={play}
          text1="Get app on"
          text2="Google play"
          onclick={handleClick}
        />
        <ButtonCustom
          image={apple}
          height={35}
          width={218}
          text1="Get app on"
          text2="apple store"
          onclick={handleClick}
        />
      </div>
      <div className="flex gap-2 px-1 mt-2">
        <p className="text-[18px] font-[500] text-[#EC2958]">
          Coming in September
        </p>
        <img src={fire} />
      </div>
    </div>
  );
}

export default PhoneAdvert;
