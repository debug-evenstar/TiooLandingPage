import ctaImage from '../../assets/cta.jpeg';
import searchIcon from '../../assets/icons/search.svg';
import PageLayout from "../../layouts/PageLayout";
import { useNavigate } from 'react-router-dom';
import imageCover from '../../assets/images/new-cover.png';
// import ComingSoon from '../../components/components/comingsoon';

// import { useState } from 'react';

export interface ILibraryCardProps {
    name: string;
    sub: string;
    id?: number;
}
const libraryMaterials: ILibraryCardProps[] = [
    { name: 'Early coding for kids (Level 1)', sub: 'For Primary and Secondary Schools' },
    { name: 'Early coding for kids (Level 2)', sub: 'For Primary and Secondary Schools' },
    { name: 'Early coding for kids (Level 3)', sub: 'For Primary and Secondary Schools' },
    { name: 'Early coding for kids (Level 4)', sub: 'For Primary and Secondary Schools' },
    { name: 'Early coding for kids (Level 5)', sub: 'For Primary and Secondary Schools' },
];


function Search() {
    return (
        <div className="w-full px-4 lg:px-0">
            <div className="lg:w-[90%] lg:mx-auto lg:flex items-center lg:space-x-12">
                <div className='flex items-center justify-between lg:justify-start lg:space-x-3'>
                    <h1 className="text-[28px] text-[#030036BD]">All Subjects</h1>
                    <button>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 20H30M5 10H35M15 30H25" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className='flex items-center mt-2 lg:mt-0 pl-3 lg:pl-0'>
                    <img src={searchIcon} alt="icon" className='-mr-9 z-[2]' />
                    <input placeholder="Search Library" type="text" className='px-4 pl-10 h-[50px] z-[1] border-gray-400 outline-none w-full lg:w-[700px] border rounded-[4px]' />
                </div>
            </div>
        </div>
    );
}


function CallToAction() {
    const navigate = useNavigate();

    return (
        <div className="relative w-full h-[130px] lg:h-[78px] mt-10" >
            <img src={ctaImage} alt="background" className="absolute inset-0 w-full h-full object-cover object-center" />
            <div className="absolute inset-0 lg:flex items-center bg-[#00000055]">
                <div className="text-white text-[20px] font-semibold lg:flex items-center justify-between w-[90%] mx-auto">
                    <p className='pt-2 lg:pt-0'>
                        Explore our vast library of gamified textbooks and workbooks
                    </p>
                    <button onClick={() => navigate('/signup')} className="px-3 mt-2 lg:mt-0 py-2 border border-white rounded-[8px]">Start learning</button>
                </div>
            </div>
        </div>

    );
}

function LibraryCard(card: ILibraryCardProps) {
    const navigate = useNavigate();
    // const [ modal, setModal ] = useState(false);

    const handleClick = () => {
        if(card.name.includes('Level 1')){
            navigate('details', { state: card });
        }

    }
    return (
        <>
        <div onClick={handleClick} className="group w-full lg:w-[350px] cursor-pointer hover:shadow-xl duration-300 text-[24px] h-[388px] rounded-[32px] shadow border bg-white hover:bg-[#FCF4FB] overflow-hidden">
        {/* <div onClick={() => navigate('details', { state: card })} className="w-[100%] cursor-pointer hover:shadow-xl duration-300 text-[24px] h-[400px] rounded-[32px] shadow border bg-white hover:bg-[#FCF4FB] overflow-hidden"> */}
            <div className="w-full h-[169px] bg-gray-200 overflow-hidden">
                { !card.name.includes('Level 1') && 
                    <div className="relative flex justify-end">
                        <span className="py-1 absolute bg-red-500 text-white z-[30] px-4">coming soon</span>
                    </div>
                }
                <img src={imageCover} className="w-full group-hover:scale-[1.07] ease-in duration-300" alt="" />
            </div>
            <div className="p-3 mt-6">
                <p className="text-[28px] mt-2 font-[700] text-[#030036BD]">{card.name}</p>
                <p className="text-sm text-gray-900 mt-4 font-inter">{card.sub}</p>
            </div>
        </div>
        </>
    );
}

export default function Library() {
    return (
        <PageLayout>
            <div className="mx-auto pt-4 mt-24 ">
                <Search />
                <CallToAction />
                <div className="w-[90%] mx-auto mt-4">
                    {
                        libraryMaterials.map((_: ILibraryCardProps, index: number) => {
                            if (index % 3 === 0) {
                                return (
                                    <div key={index % 2} className="grid lg:grid-cols-3 mx-auto gap-10 mt-10">
                                        {libraryMaterials.slice(index, index + 3).map((card: ILibraryCardProps, index: number) => (
                                            <LibraryCard id={index} {...card} key={index} />
                                        ))}
                                    </div>
                                )
                            }else{
                                return null
                            }
                        })
                    }
                </div>
            </div>
        </PageLayout>

    )
}
