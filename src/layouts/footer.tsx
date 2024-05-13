import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo/logo.png'
import facebookImg from '../assets/images/icons/facebook.svg';
import instagramImg from '../assets/images/icons/instagram.svg';
import linkedinImg from '../assets/images/icons/linkedin.svg';
import twitterImg from '../assets/images/icons/twitter.svg';
import { useState } from 'react';



const socials = [
  { link: '/#', image: facebookImg },
  { link: '/#', image: instagramImg },
  { link: '/#', image: linkedinImg },
  { link: '/#', image: twitterImg },
];

const serviceLinks = [
  { link: '/#', name: 'Smart and Interactive Textbooks and Workbooks students' },
  { link: '/#', name: 'Personalized Learning and individual assessment capabilities' },
  { link: '/#', name: 'Digital publishing for Authors and Publishers' },
];
 

const usefulLinks = [
  { link: '/#', name: 'About us' },
  { link: '/#', name: 'Our team' },
  { link: '/#', name: 'Privacy policy' },
  { link: '/#', name: 'Contact us' },
  { link: '/#', name: 'Terms of service' },
];

interface LinkProps { name: string, link: string}
interface CollapsibleNavProps { title: string, data: LinkProps[] }

const CollapsibleNav = ({ title, data }: CollapsibleNavProps) => {

  const [active, setActive] = useState(true);

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <h3 className='font-semibold outfit-font text-white text-[24px] sm:text-[28px] text-nowrap'>{title}</h3>
        <button className="text-white text-4xl h-fit outline-none sm:hidden" onClick={() => setActive(!active)}>
          { active? <span>&times;</span>:'+'}
        </button>
      </div>
      <div
        className={` ${!active && 'hidden'} flex flex-col space-y-2`}
      >
          {data.map(({ name, link }: LinkProps, idx: number) => (
            <NavLink key={idx} className="text-sm" to={link}>{name}</NavLink>
          ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[#171717] px-2 sm:px-20 pt-20 flex flex-col justify-between text-[#737373]">
      <div className="">
        <img src={logo} className=" " alt="" />
      </div>

      <div className="my-8 flex lg:flex-row flex-col lg:space-x-20">
        <div className='sm:w-[35%] mb-3'>
          <h3 className="font-semibold outfit-font text-white text-[1.75rem]">ABOUT Tioo</h3>
          <p className="text-sm">
          Tioo is an app that makes learning exciting and easy to understand for kids in Nigeria. It uses cool animations, and AI to make learning fun and easy. Tioo helps kids who feel bored or confused with regular school textbooks to develop a love for studying.
          </p>

          <div className="flex items-center space-x-2 mt-10">
            {
              socials.map(({ link, image },idx) => (
                <NavLink key={idx} to={link}>
                  <img src={image} alt="" />
                </NavLink>
              ))
            }
          </div>
        </div>
        <CollapsibleNav title="Our services" data={serviceLinks}/>
        <CollapsibleNav title="Useful links" data={usefulLinks}/>
        <div>
          <h3 className='font-semibold outfit-font text-white text-[28px]'>Newsletter</h3>
          <p className="text-sm">
            Subscribe to amazing weekly newsletters from Tioo
          </p>
          <form action="">
            <input type="email" placeholder='Your email' className="px-2 outline-none text-zinc-300 border bg-transparent border-zinc-800 text-sm py-2 w-full mt-3"/>
            <button className="text-sm bg-[#f39c12] px-2 py-3 font-bold  text-white w-full mt-3">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-dark h-20 flex items-center justify-center ">
        <p className="text-sm">@copyright 2024 all right reserved by Tioo</p>
      </div>
    </div>
  )
}
