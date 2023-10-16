import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button2 } from "../../../components/Ui/Button";
import book from "../../../images/homeimg/books.png";
import game from "../../../images/homeimg/game.png";
import planet from "../../../images/homeimg/planet.png";
import vr from "../../../images/homeimg/vr.png";
import gridLines from '../../../assets/grid.png';

function Header() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#0E096C] w-full px-4 sm:md:px-40 mt-[10px] h-screen pt-32 relative">
      <img src={book} alt="book" className="absolute top-[120px] left-[70px] " />
      <img src={gridLines} className="opacity-10 sm:md:h-auto h-[20rem] absolute left-0 top-[10rem] sm:md:top-0 z-[1]" alt="grid lines"/>
      <img
        src={vr}
        alt="vr helmet"
        className="absolute right-[20px] sm:md:right-[40px] top-[140px] sm:md:lg:top-[220px] w-[100px] h-[100px]"
      />
      <img src={planet} alt="planet" className="absolute bottom-[30px] left-[20px] " />
      <img src={game} alt="pad" className="absolute right-[30px] sm:md:lg:right-[70px] bottom-[70px]" />
      <div className="relative flex flex-col pt-10 items-center justify-center w-full z-[20] gap-7">
        <h1 className="text-white leading-[3.5rem] sm:md:leading-[5rem] text-5xl sm:md:text-[60px] font-[600] text-center">
          Gamified textbooks and workbooks for
          <span className="pl-2 sm:md:pl-0 text-5xl sm:md:lg:text-[60px] font-[600] boujee-text">
            K–12 Education
          </span>
        </h1>
        <p className="text-white text-[16px] sm:md:lg:text-[24px] text-center">
          Enhance your child's learning with dynamic, gamified and interactive
          textbooks and workbooks designed to self-tutor and provide practical
          knowledge using AI
        </p>
        <div className="w-[220px]">
          <Button2
            text1="Start Learning"
            onclick={() => navigate('/signup')}
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
