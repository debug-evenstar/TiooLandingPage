import Accordion from "../../common/Accordion/accordion";

const QA = [
  {
    q: "How does our pricing work?",
    a: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio culpa ipsa accusantium similique, iure provident cum veniam adipisci consequuntur quibusdam omnis corporis atque ratione? Inventore veritatis sequi iure earum similique!",
  },
  {
    q: "What if I change my mind?",
    a: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio culpa ipsa accusantium similique, iure provident cum veniam adipisci consequuntur quibusdam omnis corporis atque ratione? Inventore veritatis sequi iure earum similique!",
  },
  {
    q: "Do you offer any discounted plans?",
    a: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio culpa ipsa accusantium similique, iure provident cum veniam adipisci consequuntur quibusdam omnis corporis atque ratione? Inventore veritatis sequi iure earum similique!",
  },
  {
    q: "Which pricing plan is best for me?",
    a: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio culpa ipsa accusantium similique, iure provident cum veniam adipisci consequuntur quibusdam omnis corporis atque ratione? Inventore veritatis sequi iure earum similique!",
  },
  {
    q: "How do I pay for more than one child?",
    a: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio culpa ipsa accusantium similique, iure provident cum veniam adipisci consequuntur quibusdam omnis corporis atque ratione? Inventore veritatis sequi iure earum similique!",
  },
];

export default function FAQ() {
  return (
    <div className="px-3 sm:px-20 py-20">
      <div className="flex flex-col sm:flex-row items-center justify-between sm:space-x-10">
        <div className="sm:w-[75%] order-2" data-aos="fade-right">
          <Accordion data={QA} className="w-full"/>
        </div>
        <div className="text-center order-1 sm:order-2 sm:w-[25%]" data-aos="fade-left">
          <h3 className="font-[540] outfit-font text-[38px]">FAQs</h3>
          <p className="text-[20px] font-[500]  sm:order-1 mb-4 sm:mb-0">
            Frequently asked questions about our pricing
          </p>
        </div>
      </div>
    </div>
  );
}
