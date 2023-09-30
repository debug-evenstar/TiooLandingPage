import React, { useState } from "react";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const itemfordrop = [
  {
    id: 1,
    heading: " Can I use this platform for any subject or grade level?",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quo? Architecto assumenda ex consequuntur animi earum eveniet, alias ad hic fugit! Adipisci modi quam naminventore laboriosam atque in ratione.",
  },
  {
    id: 2,
    heading: "Are there analytics to track student progress and engagement?",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quo? Architecto assumenda ex consequuntur animi earum eveniet, alias ad hic fugit! Adipisci modi quam naminventore laboriosam atque in ratione.",
  },
  {
    id: 3,
    heading: "How do I get started with gamifying my textbooks and workbooks?",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quo? Architecto assumenda ex consequuntur animi earum eveniet, alias ad hic fugit! Adipisci modi quam naminventore laboriosam atque in ratione.",
  },
  {
    id: 4,
    heading: "What devices can students use to access Tioo lessons?",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quo? Architecto assumenda ex consequuntur animi earum eveniet, alias ad hic fugit! Adipisci modi quam naminventore laboriosam atque in ratione.",
  },
  {
    id: 5,
    heading: "How does gamification benefit students?",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quo? Architecto assumenda ex consequuntur animi earum eveniet, alias ad hic fugit! Adipisci modi quam naminventore laboriosam atque in ratione.",
  },
];
interface dropItem {
  ind: number;
  id: number;
  heading: string;
  text: string;
}
function FAQ() {
  const [open, setOpen] = useState<boolean[]>([]);
  const toggleOpen = (index: any) => {
    setOpen((prevOpen) => {
      const updatedOpen = [...prevOpen];
      updatedOpen[index] = !updatedOpen[index];
      return updatedOpen;
    });
  };
  const DropItem: React.FC<dropItem> = ({ ind, id, heading, text }) => {
    const isOpen = open[ind];

    return (
      <div className="w-full border-b-2 border-[#CECDFD]">
        <div
          className=" cursor-pointer h-[100px]  flex items-center gap-8 "
          onClick={() => toggleOpen(ind)}
        >
          {isOpen ? <AiOutlineDown /> : <AiOutlineRight />}
          <p className="text-[rgba(3,0,54,0.74)]">{heading}</p>
        </div>
        {/* This will show the content */}
        {/* {isOpen && (
          <div className="h-[200px] w-full px-12">
            <p>{text}</p>
          </div>
        )} */}
      </div>
    );
  };

  return (
    <div className="w-full relative px-5 sm:px-20 py-10 font-[poppins] mt-16 ">
      <h1 className=" font-[500] text-[20px] sm:text-[48px] text-center text-[rgba(3,0,54,0.74)]">
        Frequently Asked Questions
      </h1>
      <div className="bg-[#FFF] rounded-none sm:rounded-[8px] p-0 sm:p-10 mt-10 m-[auto]  w-full sm:w-[1123px]  border-none sm:border-[3px] shadows">
        {/* Heading */}

        {/* content */}
        {itemfordrop?.map((el, index) => (
          <DropItem
            ind={index}
            id={el.id}
            text={el.text}
            heading={el.heading}
          />
        ))}
        <div className="w-full text-center mt-7">
          <p className="text-[13px] sm:text-[18px] font-[400]">
            Other questions?
          </p>
        </div>
        <div className="flex flex-col  sm:flex-row gap-0 sm:gap-2 w-full text-center mt-1 m-[auto]  justify-center">
          <p className="text-[13px] sm:text-[18px] font-[400]">
            Email{" "}
            <a className="text-[#4F46E5]" href="mailto:support@hellotioo.com">
              support@hellotioo.com
            </a>{" "}
          </p>
          <p className="text-[13px] sm:text-[18px] font-[400]">
            or
            <BsWhatsapp className="inline ml-2 mr-2" />
            <a className="text-[#4F46E5]" href="tel:+2347018481060">
              +234 701 848 106022
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
