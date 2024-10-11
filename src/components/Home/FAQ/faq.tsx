import Accordion from "../../common/Accordion/accordion";

const QA = [
  {
    q: "How does our pricing work?",
    a: "Our pricing provides access to interactive, AI-powered smart books, designed to enhance learning for students in K-12 and UTME candidates.",
  },
  {
    q: "What if I change my mind?",
    a: "If you change your mind, we believe everyone deserves to love learning, so we provide engaging learning experiences to help students stay excited.",
  },
  {
    q: "Do you offer any discounted plans?",
    a: "We aim to make learning accessible to everyone, so discounted plans may be available depending on the educational needs of students.",
  },
  {
    q: "Which pricing plan is best for me?",
    a: "The best pricing plan would depend on how much access you need to our library of interactive textbooks and AI-powered learning tools.",
  },
  {
    q: "How do I pay for more than one child?",
    a: "We offer flexible options for families with multiple students, ensuring each child gets personalized learning experiences on the platform.",
  },
];


export default function FAQ() {
  return (
    <div className="px-3 sm:px-20 py-10">
      <div className="flex flex-col sm:flex-row items-center justify-between sm:space-x-10">
        <div className="sm:w-[75%] order-2" data-aos="fade-right">
          <Accordion data={QA} className="w-full"/>
        </div>
        <div className="text-center order-1 sm:order-2 sm:w-[25%]" data-aos="fade-left">
          <h3 className="font-[540] outfit-font text-[38px]">FAQs</h3>
          <p className="text-[20px] font-[500] sm:order-1 mb-4 sm:mb-0">
            Frequently asked questions about our pricing
          </p>
        </div>
      </div>
    </div>
  );
}
