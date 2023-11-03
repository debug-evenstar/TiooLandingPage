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
  const headlines = {
    nigeria: (
      <h1 className="text-white leading-[3.5rem] md:leading-[5rem] lg:leading-[5rem] text-5xl md:text-[76px] lg:text-[60px] font-[600] text-center">
        Interactive Textbooks For <br />
        <span className="px-2 lg:whitespace-nowrap text-5xl md:text-[76px] lg:text-[60px] font-[600] boujee-text">
          Primary And Secondary Schools
        </span>
      </h1>
    ),
    others: (
      <h1 className="text-white leading-[3.5rem] md:leading-[5rem] lg:leading-[5rem] text-5xl md:text-[76px] lg:text-[60px] font-[600] text-center">
        Interactive Textbooks For <br />
        <span className="px-2 lg:whitespace-nowrap text-5xl md:text-[76px] lg:text-[60px] font-[600] boujee-text">
          K–12 Schools And Students
        </span>
      </h1>
    )
  }
  const country_code = localStorage.getItem('COUNTRY_CODE');



  return (
    <div className="bg-[#0E096C] w-full px-4 md:px-8 lg:px-40 mt-[10px] h-screen pt-32 relative">
      <img src={book} alt="book" className="absolute top-[100px] left-[30px] lg:top-[120px] lg:left-[70px] " />
      <img src={gridLines} className="opacity-10 lg:h-auto h-[20rem] absolute left-0 top-[10rem] lg:top-0 z-[1]" alt="grid lines" />
      <img
        src={vr}
        alt="vr helmet"
        className="absolute right-[1px] lg:right-[40px] top-[100px] lg:top-[220px] w-[100px] h-[100px]"
      />
      <img src={planet} alt="planet" className="absolute bottom-[30px] left-[20px] " />
      <img src={game} alt="pad" className="absolute right-[30px] lg:right-[70px] bottom-[70px]" />
      <div className="relative flex flex-col pt-10  md:pt-38 lg:pt-10 items-center justify-center w-full z-[20] gap-7">
        {/*        <h1 className="text-white leading-[3.5rem] md:leading-[5rem] lg:leading-[5rem] text-5xl md:text-[76px] lg:text-[60px] font-[600] text-center">
          Animated textbooks and workbooks for
          <span className="pl-2 md:pl-5 lg:pl-5 text-5xl md:text-[76px] lg:text-[60px] font-[600] boujee-text">
            K–12 Education
          </span>
        </h1>*/}
        {(country_code === 'NG' || country_code === null)
          ? headlines.nigeria
          : headlines.others
        }
        <p className="text-white text-[16px] md:text-[24px] mt-0 lg:mt-0 md:mt-5 lg:text-[24px] text-center">
          {/*          Enhance your child's learning with animated and interactive
          textbooks and workbooks designed to self-tutor and provide practical
          knowledge using AI
*/}
          Enhance your child's learning with school textbooks that have been brought to life using
          animation and adaptive learning technology to make it interactive,
          answer difficult questions with steps, and provide practical knowledge
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
