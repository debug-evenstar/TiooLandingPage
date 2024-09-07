
import Accordion from '../../common/Accordion/accordion';

const QA = [
  {
    q: "How does our pricing work?",
    a: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio culpa ipsa accusantium similique, iure provident cum veniam adipisci consequuntur quibusdam omnis corporis atque ratione? Inventore veritatis sequi iure earum similique!"
  },
  {
    q: "What if I change my mind?",
    a: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio culpa ipsa accusantium similique, iure provident cum veniam adipisci consequuntur quibusdam omnis corporis atque ratione? Inventore veritatis sequi iure earum similique!"
  },
  {
    q: "Do you offer any discounted plans?",
    a: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio culpa ipsa accusantium similique, iure provident cum veniam adipisci consequuntur quibusdam omnis corporis atque ratione? Inventore veritatis sequi iure earum similique!"
  },
  {
    q: "Which pricing plan is best for me?",
    a: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio culpa ipsa accusantium similique, iure provident cum veniam adipisci consequuntur quibusdam omnis corporis atque ratione? Inventore veritatis sequi iure earum similique!"
  },
  {
    q: "How do I pay for more than one child?",
    a: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio culpa ipsa accusantium similique, iure provident cum veniam adipisci consequuntur quibusdam omnis corporis atque ratione? Inventore veritatis sequi iure earum similique!"
  },


];



const PricingFAQ = () => {
  return (
    <div className="sm:px-24 px-3 py-10">
      <div className='flex items-center flex-col sm:flex-row justify-between sm:space-x-10'>
        <div className="sm:w-[75%] sm:order-1 order-2">
        <Accordion data={QA} className=""/>
        </div>
        <div className='w-full text-center sm:w-[25%] order-1 sm:order-2 mb-3 sm:mb-0'>
          <h3 className="font-[540] outfit-font text-[28px] sm:text-[38px]">FAQs</h3>
          <p className='text-[20px] font-[500]'>
            Frequently asked questions about our pricing
          </p>
        </div>
      </div>
    </div>
  );
}

export default PricingFAQ;