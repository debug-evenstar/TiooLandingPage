import React, { useState } from "react";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const questions: { q: string, a: string ,id: number}[] = [
  {
    id: 1,
    q: " Can I use this platform for any subject or grade level?",
    a: "Absolutely! Our platform is designed to accommodate a wide range of subjects and grade levels, from elementary to high school and beyond.  ",
  },
  {
    id: 2,
    q: "Are there analytics to track student progress and engagement?",
    a: "Yes, our platform provides analytics that offers insights into how students interact with each gamified content. You can monitor their performance.",
  },
  {
    id: 3,
    q: "How do I get started with gamifying my textbooks and workbooks?",
    a: "Tioo is designed to be user-friendly, with an intuitive interface. You don't need extensive technical skills to get started. However, we provide support and resources to help you make the most of the platform.",
  },
  {
    id: 4,
    q: "What devices can students use to access Tioo lessons?",
    a: "Students can easily access Tioo lessons using laptops, mobile phones, and tablets. The platform is designed to be accessible across various devices, ensuring that students can learn anytime, anywhere.",
  },
  {
    id: 5,
    q: "How does gamification benefit students?",
    a: "Gamification enhances student engagement, motivation, and comprehension by turning educational content into interactive challenges, quizzes, and games.",
  },
];

// interface dropItem {
//   ind: number;
//   id: number;
//   q: string;
//   a: string;
// }
// function FAQ() {
//   const [open, setOpen] = useState<boolean[]>([]);
//   const toggleOpen = (index: any) => {
//     setOpen((prevOpen) => {
//       const updatedOpen = [...prevOpen];
//       updatedOpen[index] = !updatedOpen[index];
//       return updatedOpen;
//     });
//   };
//   const DropItem: React.FC<dropItem> = ({ ind, id, q, text }) => {
//     const isOpen = open[ind];

//     return (
//       <div className="w-full border-b-2 border-[#CECDFD]">
//         <div
//           className=" cursor-pointer h-[100px]  flex items-center gap-8 "
//           onClick={() => toggleOpen(ind)}
//         >
//           {isOpen ? <AiOutlineDown /> : <AiOutlineRight />}
//           <p className="text-[rgba(3,0,54,0.74)]">{q}</p>
//         </div>
//         {/* This will show the content */}
//         {/* {isOpen && (
//           <div className="h-[200px] w-full px-12">
//             <p>{text}</p>
//           </div>
//         )} */}
//       </div>
//     );
//   };

//   return (
//     <div className="w-full relative px-5 sm:px-20 py-10 font-[poppins] mt-16 ">
//       <h1 className=" font-[500] text-[20px] sm:text-[48px] text-center text-[rgba(3,0,54,0.74)]">
//         Frequently Asked Questions
//       </h1>
//       <div className="bg-[#FFF] rounded-none sm:rounded-[8px] p-0 sm:p-10 mt-10 m-[auto]  w-full sm:w-[1123px]  border-none sm:border-[3px] shadows">
//         {/* Heading */}

//         {/* content */}
//         {itemfordrop?.map((el, index) => (
//           <DropItem
//             ind={index}
//             id={el.id}
//             text={el.text}
//             q={el.q}
//           />
//         ))}
//         <div className="w-full text-center mt-7">
//           <p className="text-[13px] sm:text-[18px] font-[400]">
//             Other questions?
//           </p>
//         </div>
//         <div className="flex flex-col  sm:flex-row gap-0 sm:gap-2 w-full text-center mt-1 m-[auto]  justify-center">
//           <p className="text-[13px] sm:text-[18px] font-[400]">
//             Email{" "}
//             <a className="text-[#4F46E5]" href="mailto:support@hellotioo.com">
//               support@hellotioo.com
//             </a>{" "}
//           </p>
//           <p className="text-[13px] sm:text-[18px] font-[400]">
//             or
//             <BsWhatsapp className="inline ml-2 mr-2" />
//             <a className="text-[#4F46E5]" href="tel:+2347018481060">
//               +234 701 848 106022
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


const Accordion = ({ title, content }: { title: string, content: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-gray-300 rounded">
            <div
                className="flex justify-between items-center p-4 py-7 cursor-pointer"
                onClick={toggleAccordion}
            >
                <h2 className="text-lg text-primary text-[18px]">{title}</h2>
                <div className={`h-6 w-6 duration-300 ${isOpen ? 'rotate-180' : ''}`}> 
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#6663E3"
                    //   stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={'M19 9l-7 7-7-7'}
                        />

                    </svg>
                </div>
            </div>
            {
                <div className={`bg-gray-50 transition-[max-height] duration-700 font-inter ease-out overflow-hidden ${!isOpen? 'max-h-0': 'max-h-[30rem]'}`}>
                    <div className="p-4 py-10 text-primary">{content}</div>
                </div>
            }
        </div>
    );
}


function FAQ(){
    return (
        <div className="mt-20">
            <h1 className="font-[700] text-[40px] text-center mt-10 text-primary">Frequently Asked Questions</h1>
            <div className="w-[90%] mx-auto mt-10 border rounded-[8px] shadow-lg px-12 py-14">
                {questions.map((item: any,index: number) => (
                    <Accordion key={index} title={item.q} content={item.a} />
                ))}
                <div className="w-full text-primary text-sm text-center mt-16">
                    <p className="text-[13px] sm:text-[16px] font-[400]">
                    Other questions?
                    </p>
                </div>
                <div className="flex text-primary text-sm flex-col  sm:flex-row gap-0 sm:gap-2 w-full text-center mt-1 m-[auto]  justify-center">
                    <p className="text-[13px] sm:text-[16px] font-[400]">
                        Email{" "}
                        <a className="text-[#4F46E5]" href="mailto:support@hellotioo.com">
                            support@hellotioo.com
                        </a>{" "}
                    </p>
                    <p className="text-[13px] sm:text-[16px] font-[400]">
                        or
                        <BsWhatsapp className="inline ml-2 mr-2" />
                        <a className="text-[#4F46E5]" href="tel:+2347018481060">
                            +234 701 848 1060
                        </a>
                    </p>
                </div>
            </div>

        </div>
    );
}

export default FAQ;
