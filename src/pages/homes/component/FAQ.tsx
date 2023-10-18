import React, { useState } from "react";
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
            <h1 className="font-[700] text-[30px] sm:text-[40px] text-center mt-10 text-primary">Frequently Asked Questions</h1>
            <div className="w-[90%] mx-auto mt-10 border rounded-[8px] shadow-lg px-4 sm:px-12 py-5 sm:py-14">
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
                        Email
                        <a className="text-[#4F46E5]" href="mailto:support@hellotioo.com">
                            support@hellotioo.com
                        </a>{" "}
                    </p>
                    <p className="text-[13px] sm:text-[16px] font-[400]">
                        or
                        <BsWhatsapp className="inline ml-2 mr-2" />
                        <a className="text-[#4F46E5]" target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=2347018481060">
                            +234 701 848 1060
                        </a>
                    </p>
                </div>
            </div>

        </div>
    );
}

export default FAQ;
