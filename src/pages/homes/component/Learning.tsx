import React from "react";
import { Button2, Button3 } from "../../../components/Ui/Button";
import ButtonCustom from "../../../components/components/ButtonCustom";
import apple from "../../../images/apple.png";
import play from "../../../images/play.png";
import { useNavigate } from 'react-router-dom';
function Learning() {
  const navigate = useNavigate();
  
  return (
    <div className="flex justify-between gap-20 p-5 mt-20 gradient2 rounded-[8px] shadows">
      <div className="flex flex-col  w-[40%]  gap-5">
        <h1 className="text-[40px] text-[rgba(3,0,54,0.74)] font-[600]">
          Make Learning Fun
        </h1>
        <p className="text-[18px] rgba(3,0,54,0.74)">
          Wondering how we can assist you? Let's have a chat!
        </p>
        <div className="flex gap-4">
          <Button2 text1="Get Started" onclick={() => navigate('/signup')} />
          <Button2 text1="Contact us" onclick={() => {}} variant="secondary" />
        </div>
      </div>
      <div className=" w-[35%] flex flex-col justify-between">
        <p className="text-[20px] rgba(3,0,54,0.74)">
          Enjoy a seamless interaction, Get Tioo App
        </p>
        <div className="hidden sm:flex gap-10  h-[60px] w-full      ">
          <ButtonCustom
            height={13}
            width={220}
            image={play}
            // text1="Get app on"
            text2="Google play"
            bg={"2C2C30"}
            onclick={() => {}}
          />
          <ButtonCustom
            image={apple}
            height={13}
            width={220}
            // text1="Get app on"
            text2="apple store"
            bg={"2C2C30"}
            onclick={() => {}}
          />
        </div>
        <div className="flex gap-4"></div>
      </div>
    </div>
  );
}

export default Learning;
