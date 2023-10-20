import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import headerImage from '../../assets/images/header-bg.png';
import why1 from '../../assets/images/why-1.png';
import why2 from '../../assets/images/why-2.png';
import why3 from '../../assets/images/why-3.png';
import cta from '../../assets/images/cta.jpeg';
import z1 from '../../assets/images/z-1.png';
import z2 from '../../assets/images/z-2.png';
import z3 from '../../assets/images/z-3.png';
import playStore from '../../assets/icons/playstore.svg';
import appleStore from '../../assets/icons/applestore.svg';

import PageLayout from '../../layouts/PageLayout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsWhatsapp } from 'react-icons/bs';

function Header() {
    return (
        <div className="relative w-full h-[480px]" >
            <img src={headerImage} alt="background" className="absolute inset-0 w-full h-full object-cover object-center" />
            <div className="absolute inset-0 flex items-center bg-[#00000055] px-5 lg:px-16">
                <div className="text-white lg:w-[55%]">
                    <h1 className="font-[700] text-3xl sm:leading-[4rem] sm:text-[48px]">
                        Gamify Your Textbooks And Workbooks For Fun Learning & Earnings
                    </h1>
                    <p className="font-[400] mt-4 font-inter text-xl lg:text-[24px]">
                        We empower authors to turn their textbooks and workbooks seamlessly into engaging, gamified resources for K-12 learners and earn royalties.
                    </p>
                </div>
            </div>
        </div>
    )
}

function WhyCard({ image, title, description }: any) {
    return (
        <div className="text-center w-full sm:w-[350px] text-[#262626]" data-aos="fade-up" data-aos-offset={300}>
            <div className="h-[120px] w-[120px] flex items-center justify-center rounded-full bg-gray-200 mx-auto">
                <img src={image} alt="" className="w-[60px]" />
            </div>
            <h2 className="my-4 text-2xl sm:text-[38px] sm:w-[85%] mx-auto font-[700]">{title}</h2>
            <p className="lg:text-[20px]  text-[18px] font-[400] text-gray-800 font-inter">
                {description}
            </p>
        </div>
    );
}

const data = [
    { title: 'We bring your readers to you', description: ' Tioo allows your educational content to reach K-12 students and educators around the world, opening new markets and opportunities for your work.', image: why1 },
    { title: 'Earn as you write', description: "As students access your gamified content, you earn royalties. It's a win-win, where your commitment to education is rewarded with tangible financial returns.", image: why2 },
    { title: 'We bring your books to life', description: "We turn static textbooks into interactive adventures, making learning an exciting and memorable experience for students.", image: why3 },
];

function WhyTioo() {
    return (
        <div className="my-16 px-5 lg:px-16">
            <div className="lg:w-[45%]  mx-auto text-center">
                <h2 data-aos="fade-up" className="lg:text-[38px] text-3xl font-[700]">Why Tioo?</h2>
                <p data-aos="fade-up" className=" font-[400] mt-5 lg:mt-0 text-[17px] text-lg font-inter text-gray-800">
                    Join us on this exciting journey to enhance kids' understanding while earning royalties when students access your educational content
                </p>
            </div>
            <div className="mt-16">
                <div className='grid sm:grid-cols-3 justify-center sm:justify-auto gap-10 lg:gap-0'>
                    {data.map((item: any, index: number) => (
                        <WhyCard {...item} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}


function Pattern1() {
    return (
        <div className='lg:-mb-12 relative lg:flex items-center lg:space-x-10 px-3 lg:px-16'>
            <div className="lg:w-[580px] bg-gray-100">
                <img src={z1} alt="" className="w-full" />
            </div>
            <div className="lg:w-[430px] sm:mt-0 mt-5 pb-12 lg:pb-0">
                <h2 className="text-2xl mt-1 lg:mt-0 lg:text-[38px] mb-4 font-[700]" data-aos="fade-left">Digital Convenience</h2>
                <p className=" text-[20px] font-[400] text-gray-800 font-inter" data-aos="fade-left">
                    Embrace the digital era. Make your textbooks and workbooks easily accessible on mobile phones, tablets, and laptops
                </p>
            </div>
        </div>
    );
}
function Pattern2() {
    return (
        <div>

            <div className='lg:flex items-center justify-between py-12 lg:py-20 px-3 lg:px-16 bg-[#FFE4F9]'>
                <div className="lg:w-[330px]">
                    <h2 className="text-2xl lg:text-[38px] mb-4 font-[700]" data-aos="fade-right" >User Analytics</h2>
                    <p className=" text-[20px] font-[400] text-gray-800 font-inter" data-aos="fade-right" >
                        Gain insights into how your content is being used. Our analytics tools provide valuable data on reader engagement, helping you refine your offerings and improve your content.
                    </p>
                </div>
                <div className="lg:w-[580px] w-full mt-6 lg:mt-0 bg-gray-100">
                    <img src={z2} alt="" className="w-full" />
                </div>
            </div>
            <div className="px-3 border flex items-center lg:block flex-col lg:px-16 relative py-12 lg:py-0 lg:-mt-32">
                <p className='text-[#030036BD]'>Get the App</p>
                <div className="flex space-x-4 items-center">
                    <button>
                        <img src={playStore} alt="" />
                    </button>
                    <button>
                        <img src={appleStore} alt="" />
                    </button>
                </div>
                <p className="mt-4 lg:mt-2 px-4 w-[330px] py-1.5 bg-white rounded-[8px] shadow  text-center mt-2">
                  Coming Soon
                </p>
            </div>
        </div>
    );
}

function CallToAction() {
    const navigate = useNavigate();
    return (
        <div className="relative w-full h-[480px] mt-8" >
            <img src={cta} alt="background" className="absolute inset-0 w-full h-full object-cover object-center" />
            <div className="absolute inset-0 flex items-center bg-[#000000aa] px-5 lg:px-16">
                <div className="text-white text-center mx-auto lg:w-[50%]">
                    <h1 className="font-[500] text-[19px] text-center mb-10"data-aos="fade-up" >
                        Say goodbye to the constraints of traditional publishing timelines. With our website, you have the flexibility to publish and update your content as needed, ensuring it remains current and relevant.
                    </h1>
                    <button onClick={() => navigate('/signup')} data-aos="fade-up" className='w-[200px] mx-auto h-[60px] rounded-[4px] flex items-center justify-center text-[500] bg-[#4F46E5]'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}

function Pattern3() {
    return (
        <div className='-mb-12 relative lg:flex items-center lg:space-x-10 px-3 lg:px-16 my-16'>
            <div className="lg:w-[580px] bg-gray-100">
                <img src={z3} alt="" className="w-full" />
            </div>
            <div className="lg:w-[430px] mt-5 sm:mt-0">
                <h2 className="lg:text-[38px] text-2xl mt-2 lg:mt-0 mb-4 font-[700]" data-aos="fade-left" >Eliminate Printing Cost</h2>
                <p className=" text-[20px] font-[400] text-gray-800 font-inter" data-aos="fade-left" >
                    With Tioo, you no longer have to spend money on producing paper textbooks and workbooks. We help you deliver your contents in digital formats without hassle.
                </p>
            </div>
        </div>
    );
}
function FormInput({ label, type = "normal" }: any) {
    return (
        <div className="mb-4">
            <label className="text-sm text-gray-700">{label}</label>
            {
                type === "textarea"
                    ? <textarea className="w-full h-[10rem] outline-none border border-gray-300 rounded-[4px] bg-white px-3 py-2 text-gray-500"></textarea>
                    : <input type={type} className="w-full outline-none border border-gray-300 h-[40px] rounded-[4px] bg-white px-3 text-gray-500" />
            }
        </div>
    );
}
function Form() {
    return (
        <form className=" mt-6 lg:mt-0 lg:w-[700px] h-[600px] p-6 py-7 shadow-lg rounded-[8px] border" action="">
            <h1 className='font-[700] text-[#030036BD]'>Contact Us</h1>
            <div className='mt-8'>
                <FormInput label="Full Name" type="text" />
                <FormInput label="Email" type="email" />
                <FormInput label="Phone Number" type="text" />
                <FormInput label="Message" type="textarea" />
            </div>
            <div className="flex justify-end">
                <button className="px-6 py-1 text-white bg-[#4F46E5] rounded-[4px] outline-none">
                    send
                </button>
            </div>
        </form>
    );
}

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
                <div className={`bg-gray-50 transition-[max-height] font-inter duration-700 ease-out overflow-hidden ${!isOpen? 'max-h-0': 'max-h-[30rem]'}`}>
                    <div className="p-4 py-10 text-primary ">{content}</div>
                </div>
            }
        </div>
    );
}


const questions: {
  q: string,
  a: string
} [] = [{
    q: `How can I get started with gamifying my educational materials`,
    a: `We handle the entire gamification in-house. No extra work on the author's side. All you need to do is reach out to us.
`
  },
  {
    q: 'Do I need any technical skills or coding knowledge to use Tioo?',
    a: `No coding or technical skills are required. Our platform is user-friendly and designed to be accessible to authors and educators of all technical backgrounds.`
  },
  {
    q: 'How do I earn royalties from my gamified content?',
    a: `Authors and educators earn royalties based on the usage of their gamified content. The more students access and engage with your materials on our platform, the more you earn.`
  },
  {
    q: "Can I update my gamified content after it's published?",
    a: `Yes, you have the flexibility to update and refine your gamified materials at any time. We understand the importance of keeping educational content current.`
  },
  {
    q: 'Is there a fee for using Tioo?',
    a: `No, no payment is needed to publish your educational material on our platform
`
  },
];


function FAQ(){
    return (
        <>
            <h1 className="font-[700] w-[90%] mx-auto text-3xl lg:text-[40px] text-center mt-10 text-primary">Frequently Asked Questions</h1>
            <div className="lg:w-[90%] mx-2 lg:mx-auto mt-10 border rounded-[8px] shadow-lg lg:px-12 lg:py-14 pb-10 ">
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
                        <a className="text-[#4F46E5]" href="https://api.whatsapp.com/send?phone=2347018481060">
                            +234 701 848 1060
                        </a>
                    </p>
                </div>

            </div>
        </>
    );
}
export default function Authors() {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
        // AOS.refresh();
    })
    return (
        <PageLayout>
            <div className='text-[#262626] mt-20'>
                <Header />
                <WhyTioo />
                <Pattern1 />
                <Pattern2 />
                <CallToAction />
                <Pattern3 />
                <div className="px-4 lg:px-16 mt-16 py-16">
                    <div className='lg:flex justify-between'>
                        <p className="text-[#4F46E5] text-[26px] text-center lg:text-left font-[700] lg:w-[400px]">Ready to publish your textbooks and workbooks on Tioo?</p>
                        <Form />
                    </div>
                </div>
                <FAQ/>
            </div>
        </PageLayout>

    );
}
