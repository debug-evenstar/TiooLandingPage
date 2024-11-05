import Accordion from "../../common/Accordion/accordion";

const QA = [
  {
    q: "What is Tioo?",
    a: (
      <p className="mb-4">
        Tioo is an AI-powered exam preparation platform providing comprehensive
        study materials, practice questions, and expert guidance for various
        exams, including UTME, WAEC, institution-specific exams, and
        professional certifications.
      </p>
    ),
  },
  {
    q: "How do I access Tioo's study materials?",
    a: (
      <p className="mb-4">
        Simply create an account on our website or mobile app, choose your exam
        type, and subscribe. You'll gain instant access to our study resources,
        including tutorials, practice questions, personalized study plans, and
        analytics.
      </p>
    ),
  },
  {
    q: "What types of exams does Tioo support?",
    a: (
      <p className="mb-4">
        Right now Tioo only supports:
        <ul className="list-disc list-inside ml-4">
          <li>UTME (Unified Tertiary Matriculation Examination)</li>
        </ul>
        But we have plans to add other exams soon such as WAEC, NECO, localized
        exams in tertiary institutions like UNILAG, UNIUYO, etc., and
        professional exams like ICAN.
      </p>
    ),
  },
  {
    q: "Does Tioo offer a free trial, and what does it include?",
    a: (
      <p className="mb-4">
        Yes, Tioo offers a 3-day free trial for all exams. During your free
        trial, you'll have access to:
        <ul className="list-disc list-inside ml-4">
          <li>Limited study materials and practice questions</li>
          <li>Limited AI tutor responses</li>
          <li>Online community support</li>
        </ul>
        To start your free trial, simply:
        <ol className="list-decimal list-inside ml-4">
          <li>Sign up on our website or mobile app</li>
          <li>Choose your exam type</li>
          {/* <li>Select the free trial option</li> */}
        </ol>
        No payment information is required for the free trial. Upgrade to a paid
        plan anytime to unlock full access to our comprehensive study materials.
      </p>
    ),
  },
  {
    q: "How much does Tioo cost?",
    a: (
      <p className="mb-4">
        Our pricing plans vary depending on the exam type and cover until the
        exam day.
        <ul className="list-disc list-inside ml-4">
          <li>
            UTME - <s>N60,000</s> N30,000 (discounted until 31st November)
          </li>
        </ul>
        So if you pay for our UTME study package, you have access to the entire
        study resource for UTME until the day of exams next year.
      </p>
    ),
  },
  {
    q: "What if I'm not satisfied with Tioo's study materials?",
    a: (
      <p className="mb-4">
        We offer a 7-day money-back guarantee. If you're not satisfied with our
        services, contact our support team within 7 days of subscription, and
        we'll provide a full refund.
      </p>
    ),
  },
  {
    q: "Does Tioo have a physical learning location?",

    a: "No, Tioo is an online learning platform. Our website offers virtual interactive tutorials, practice questions, and study resources that can be accessed from anywhere at any time. This allows us to reach students across different regions and provide flexible learning options.",
  },
];

export default function FAQ() {
  return (
    <div className="px-3 lg:px-20 py-10">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-10">
        <div className="lg:w-[75%] order-2" data-aos="fade-right">
          <Accordion data={QA} className="w-full" />
        </div>
        <div
          className="text-center order-1 lg:order-2 lg:w-[25%]"
          data-aos="fade-left"
        >
          <h3 className="font-[540] outfit-font text-[38px]">FAQs</h3>
          <p className="text-[20px] font-[500] lg:order-1 mb-4 lg:mb-0">
            Frequently asked questions about our pricing
          </p>
        </div>
      </div>
    </div>
  );
}
