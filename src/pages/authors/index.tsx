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

function Header() {
    return (
        <div className="relative w-full h-[480px]" >
            <img src={headerImage} alt="background" className="absolute inset-0 w-full h-full object-cover object-center" />
            <div className="absolute inset-0 flex items-center bg-[#00000055] px-16">
                <div className="text-white   w-[48%]">
                    <h1 className="font-[700] text-[48px]">
                        Gamify Your Textbooks And Workbooks For Fun Learning & Earnings
                    </h1>
                    <p className="font-[400] text-sm mt-4 text-[20px]">
                        We empower authors to turn their textbooks and workbooks seamlessly into engaging, gamified resources for K-12 learners and earn royalties.
                    </p>
                </div>
            </div>
        </div>
    )
}

function WhyCard({ image, title, description }: any) {
    return (
        <div className="text-center w-[350px] text-[#262626]">
            <div className="h-[120px] w-[120px] flex items-center justify-center rounded-full bg-gray-200 mx-auto">
                <img src={image} alt="" className="w-[60px]" />
            </div>
            <h2 className="my-4 text-[36px] w-[80%] mx-auto font-[700]">{title}</h2>
            <p className="text-sm font-[400] text-gray-500">
                {description}
            </p>
        </div>
    );
}

function WhyTioo() {

    const data = [
        { title: 'We bring your readers to you', description: ' Tioo allows your educational content to reach K-12 students and educators around the world, opening new markets and opportunities for your work.', image: why1 },
        { title: 'Earn as you write', description: "As students access your gamified content, you earn royalties. It's a win-win, where your commitment to education is rewarded with tangible financial returns.", image: why2 },
        { title: 'We bring your books to life', description: "We turn static textbooks into interactive adventures, making learning an exciting and memorable experience for students.", image: why3 },
    ];
    return (
        <div className="my-16 px-16">
            <div className="w-[45%] mx-auto text-center">
                <h2 className="text-[38px] font-[700]">Why Tioo?</h2>
                <p className="text-sm font-[400] text-gray-800">
                    Join us on this exciting journey to enhance kids' understanding while earning royalties when students access your educational content
                </p>
            </div>
            <div className="mt-16">
                <div className='grid grid-cols-3'>
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
        <div className='-mb-12 relative flex items-center space-x-10 px-16'>
            <div className="w-[580px] bg-gray-100">
                <img src={z1} alt="" className="w-full" />
            </div>
            <div className="w-[430px]">
                <h2 className="text-[36px] mb-4 font-[700]">Digital Convenience</h2>
                <p className="text-sm font-[400] text-gray-800">
                    Embrace the digital era. Make your textbooks and workbooks easily accessible on mobile phones, tablets, and laptops
                </p>
            </div>
        </div>
    );
}
function Pattern2() {
    return (
        <div>

            <div className='flex items-center justify-between py-20  px-16 bg-[#FFE4F9]'>
                <div className="w-[330px]">
                    <h2 className="text-[36px] mb-4 font-[700]">User Analytics</h2>
                    <p className="text-sm font-[400] text-gray-800">
                        Gain insights into how your content is being used. Our analytics tools provide valuable data on reader engagement, helping you refine your offerings and improve your content.                </p>
                </div>
                <div className="w-[580px] bg-gray-100">
                    <img src={z2} alt="" className="w-full" />
                </div>
            </div>
            <div className="px-16 relative -mt-28">
                <p className='text-[#030036BD]'>Get the App</p>
                <div className="flex space-x-4 items-center">
                    <button>
                        <img src={playStore} alt="" />
                    </button>
                    <button>
                        <img src={appleStore} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

function CallToAction() {
    return (
        <div className="relative w-full h-[480px] mt-8" >
            <img src={cta} alt="background" className="absolute inset-0 w-full h-full object-cover object-center" />
            <div className="absolute inset-0 flex items-center bg-[#000000aa] px-16">
                <div className="text-white text-center mx-auto w-[50%]">
                    <h1 className="font-[500] text-[19px] text-center mb-10">
                        Say goodbye to the constraints of traditional publishing timelines. With our website, you have the flexibility to publish and update your content as needed, ensuring it remains current and relevant.
                    </h1>
                    <button className='w-[200px] mx-auto h-[60px] rounded-[4px] flex items-center justify-center text-[500] bg-[#4F46E5]'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}

function Pattern3() {
    return (
        <div className='-mb-12 relative flex items-center space-x-10 px-16 my-16'>
            <div className="w-[580px] bg-gray-100">
                <img src={z3} alt="" className="w-full" />
            </div>
            <div className="w-[430px]">
                <h2 className="text-[36px] mb-4 font-[700]">Eliminate Printing Cost</h2>
                <p className="text-sm font-[400] text-gray-800">
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
                type == "textarea"
                    ? <textarea className="w-full h-[10rem] outline-none border border-gray-300 rounded-[4px] bg-white px-3 py-2 text-gray-500"></textarea>
                    : <input type={type} className="w-full outline-none border border-gray-300 h-[40px] rounded-[4px] bg-white px-3 text-gray-500" />
            }
        </div>
    );
}
function Form() {
    return (
        <form className="w-[700px] h-[600px] p-6 py-7 shadow-lg rounded-[8px] border" action="">
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
export default function Authors() {
    return (
        <PageLayout>
            <div className='text-[#262626] mt-20'>
                <Header />
                <WhyTioo />
                <Pattern1 />
                <Pattern2 />
                <CallToAction />
                <Pattern3 />
                <div className="px-16 mt-16 py-16">
                    <div className='flex justify-between'>
                        <p className="text-[#4F46E5] text-[26px] font-[700] w-[400px]">Ready to publish your textbooks and workbooks on Tioo?</p>
                        <Form />
                    </div>
                </div>
            </div>
        </PageLayout>

    );
}
