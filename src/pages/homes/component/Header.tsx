import React from "react";
import { Button2 } from "../../../components/Ui/Button";
import book from "../../../images/homeimg/books.png";
import game from "../../../images/homeimg/game.png";
import planet from "../../../images/homeimg/planet.png";
import vr from "../../../images/homeimg/vr.png";

function Header() {
  return (
    <div className="bg-[#0E096C] w-full px-40 mt-[10px] h-[647px] pt-32 relative">
      <img src={book} className="absolute top-[120px] left-[70px] " />
      <img
        src={vr}
        className="absolute right-[40px] top-[220px] w-[100px] h-[100px]"
      />
      <img src={planet} className="absolute bottom-[30px] left-[20px] " />
      <img src={game} className="absolute right-[70px] bottom-[70px]" />
      <div className="flex flex-col pt-10 items-center justify-center w-full gap-7">
        <h1 className="text-white leading-[5rem] text-[60px] font-[600] text-center">
          Gamified textbooks and workbooks for{" "}
          <span className="text-[60px] font-[700]  boujee-text">
            K–12 Education
          </span>
        </h1>
        <p className="text-white text-[20px] text-center">
          Enhance your child's learning with dynamic, gamified and interactive
          textbooks and workbooks designed to self-tutor and provide practical
          knowledge using AI.
        </p>
        <div className="w-[220px]">
          <Button2
            text1="Start Learning"
            onclick={() => {}}
            variant="secondary"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
