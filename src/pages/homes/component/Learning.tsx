import React from "react";
import { Button2 } from "../../../components/Ui/Button";
import { useNavigate } from 'react-router-dom';
import applestore from '../../../assets/icons/applestore.svg';
import playstore from '../../../assets/icons/playstore.svg';

function Learning() {
  const navigate = useNavigate();
  
  return (

    // <div className="flex flex-col md:lg:flex-row justify-between gap-20 p-5 mt-20 gradient2  rounded-[8px] shadow-[0_0_4px_3px_rgba(0,0,0,0.1)]">
    <div className="flex flex-col md:lg:flex-row justify-between gap-20 p-5 mt-20 bg-gradient-to-t sm:bg-gradient-to-l from-[rgba(229,130,205,0.5)] from-[1%] via-white via-[30%] to-white to-[100%] rounded-[8px] shadow-[0_0_4px_3px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col  sm:w-[40%]  gap-5">
        <h1 className="text-[30px] sm:text-[40px] text-[rgba(3,0,54,0.74)] font-[600]">
          Make Learning Fun
        </h1>
        <p className="text-[18px] rgba(3,0,54,0.74)">
          Wondering how we can assist you? Let's have a chat!
        </p>
        <div className="flex sm:w-[220px]">
          <Button2 text1="Get Started" onclick={() => navigate('/signup')} />
          {/*<Button2 text1="Contact us" onclick={() => {}} variant="secondary" />*/}
        </div>
      </div>
      <div className=" sm:w-[35%] flex flex-col space-y-4">
        <p className="text-[20px] rgba(3,0,54,0.74)">
          Enjoy a seamless interaction
        </p>
        <div className="flex justify-between sm:justify-start h-[60px] w-full">
          <img alt="" src={playstore} className="w-[140px] sm:w-[250px]"/>
          <img alt="" src={applestore} className="w-[140px] sm:w-[250px]"/>
        </div>
        <p className="px-4 py-1.5 bg-white rounded-[8px] shadow  text-center mt-4">
          Coming Soon
        </p>
        <div className="flex gap-4"></div>
      </div>
    </div>
  );
}

export default Learning;
