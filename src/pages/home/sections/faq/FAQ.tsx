import React, { useState } from "react";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";

const itemfordrop = [
  {
    id: 1,
    heading: "How does it work",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quo? Architecto assumenda ex consequuntur animi earum eveniet, alias ad hic fugit! Adipisci modi quam naminventore laboriosam atque in ratione.",
  },
  {
    id: 2,
    heading: "Who can Use Tioo?",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quo? Architecto assumenda ex consequuntur animi earum eveniet, alias ad hic fugit! Adipisci modi quam naminventore laboriosam atque in ratione.",
  },
  {
    id: 3,
    heading: "What is the difference between Tioo and Praxeum?",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quo? Architecto assumenda ex consequuntur animi earum eveniet, alias ad hic fugit! Adipisci modi quam naminventore laboriosam atque in ratione.",
  },
  {
    id: 4,
    heading: "What can I learn on Tioo?",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quo? Architecto assumenda ex consequuntur animi earum eveniet, alias ad hic fugit! Adipisci modi quam naminventore laboriosam atque in ratione.",
  },
  {
    id: 5,
    heading: "How can I cancel?",
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
          <p>{heading}</p>
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
    <div className="w-full relative px-5 sm:px-20 py-10 font-[poppins] ">
      <h1 className=" font-[500] text-[20px] sm:text-[48px]">
        Frequently Asked Questions
      </h1>
      <div className="bg-[#FFF] rounded-none sm:rounded-[8px] p-0 sm:p-10 mt-10 m-[auto]  w-full sm:w-[1123px] shadow-none sm:shadow-xl border-none sm:border-[3px]">
        {/* Heading */}
        <div className="pl-0 sm:pl-10 w-full h-[80px]  flex justify-between ">
          <div className="flex sm:hidden w-full h-full font-[600] text-[18px]  items-center p-5  bg-[#E3E2FF] rounded-none sm:rounded-[8px]">
            Membership
          </div>
          <div className="w-[80%] h-[90%] hidden sm:flex justify-between">
            <div className=" h-full font-[600] text-[18px] flex items-center p-5  bg-[#E3E2FF] rounded-[8px]">
              Membership
            </div>
            <div className=" h-full font-[600] text-[18px] flex items-center p-5">
              Tioo App
            </div>
            <div className=" h-full font-[600] text-[18px] flex items-center p-5">
              Privacy/Security
            </div>
            <div className=" h-full font-[600] text-[18px] flex items-center p-5">
              Return/Refund Policy
            </div>
          </div>
        </div>
        {/* content */}
        {itemfordrop?.map((el, index) => (
          <DropItem
            ind={index}
            id={el.id}
            text={el.text}
            heading={el.heading}
          />
        ))}
        <div className="w-full  text-center mt-7">
          <p className="text-[13px] sm:text-[18px] font-[400]">
            Other questions?
          </p>
          <p className="text-[13px] sm:text-[18px] font-[400]">
            Email{" "}
            <a className="text-[#4F46E5]" href="#">
              support@praxeum.ai
            </a>{" "}
            or text +234 701 848 1060
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
