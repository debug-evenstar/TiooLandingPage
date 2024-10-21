import { useState } from "react";

const AccordionItem = ({ q, a }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border border-gray-200 rounded-[8px] mb-3 px-8 bg-white`}>
      <div onClick={() => setIsOpen(!isOpen)} className="flex cursor-pointer items-center text-base  py-4  text-dark justify-between">
        <div className="inter-font font-[500]">{q}</div>
        <button className={`outline-none w-fit duration-300 ${isOpen && 'rotate-180'}`} >
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 1L9 8.5L1.5 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className={`overflow-hidden text-sm text-gray-700 transition-[height] duration-300 ease-in-out ${isOpen ? 'max-h-full py-3' : 'max-h-0'}`}>
        {a}
      </div>
    </div>
  );
}

export interface QAProps {
  q: string, a: any
}

export default function Accordion({data, className }: {data: QAProps[], className: string} ) {
  return (
    <div className={className} >
      {
        data.map((item,idx) => (
          <AccordionItem key={idx} {...item}/>
        ))
      }
    </div>
  )
}
