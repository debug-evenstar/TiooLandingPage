import library1 from '../../assets/library-1.png';
import library2 from '../../assets/library-2.png';
import library3 from '../../assets/library-3.png';
import ctaImage from '../../assets/cta.jpeg';
import searchIcon from '../../assets/icons/search.svg';
import PageLayout from "../../layouts/PageLayout";
import { useNavigate } from 'react-router-dom';

const libraryMaterials: { name: string, sub: string, image: string}[] = [
    { name: 'Early coding for kids (Book 1)', sub: 'For Nursery and Primary Schools', image: library1 },
    { name: 'Early coding for kids (Book 2)', sub: 'For Nursery and Primary Schools', image: library2 },
    { name: 'Early coding for kids (workbook)', sub: 'For Nursery and Primary Schools', image: library3 },
    { name: 'Early coding for kids (Book 1)', sub: 'For Nursery and Primary Schools', image: library1 },
    { name: 'Early coding for kids (Book 2)', sub: 'For Nursery and Primary Schools', image: library2 },
];

export interface ILibraryCardProps {
    name: string;
    sub: string;
    image: any
}

function Search() {
    return (
        <div className="w-full">
            <div className="w-[90%] mx-auto flex items-center space-x-12">
                <div className='flex items-center space-x-3'>
                    <h1 className="text-[28px] text-[#030036BD]">All Subjects</h1>
                    <button>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 20H30M5 10H35M15 30H25" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className='flex items-center'>
                    <img src={searchIcon} alt="icon" className='-mr-9 z-[2]' />
                    <input placeholder="Search Library" type="text" className='px-4 pl-10 h-[50px] z-[1] border-gray-400 outline-none w-[700px] border rounded-[4px]' />
                </div>
            </div>
        </div>
    );
}


function CallToAction() {

    return (
        <div className="relative w-full h-[98px] mt-16" >
            <img src={ctaImage} alt="background" className="absolute inset-0 w-full h-full object-cover object-center" />
            <div className="absolute inset-0 flex items-center bg-[#00000055]">
                <div className="text-white text-[20px] font-semibold flex items-center justify-between w-[90%] mx-auto">
                    <p>
                        Explore our vast library of gamified textbooks and workbooks
                    </p>
                    <button className="px-3 py-2 border border-white rounded-[8px]">Start learning</button>
                </div>
            </div>
        </div>

    );
}

function LibraryCard(card: ILibraryCardProps) {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate('details', { state: card })} className="w-[100%] cursor-pointer hover:shadow-xl duration-300 text-[24px] h-[400px] rounded-[32px] shadow border bg-white hover:bg-[#FCF4FB] overflow-hidden">
            <div className="w-full h-[169px] bg-gray-200">
                <img src={card.image} className="w-full" alt="" />
            </div>
            <div className="p-3 mt-6">
                <p className="text-[30px] mt-2 font-[700] text-[#030036BD]">{card.name}</p>
                <p className="text-sm text-gray-400 mt-4">{card.sub}</p>
            </div>
        </div>
    );
}

export default function Library() {
    return (
        <PageLayout>
            <div className="mx-auto pt-10 mt-24 ">
                <Search />
                <CallToAction />
                <div className="w-[90%] mx-auto mt-10">
                    {
                        libraryMaterials.map((_: ILibraryCardProps, index: number) => {
                            if (index % 3 == 0) {
                                return (
                                    <div key={index % 2} className="grid grid-cols-3 mx-auto gap-x-10 mt-16">
                                        {libraryMaterials.slice(index, index + 3).map((card: ILibraryCardProps, index: number) => (
                                            <LibraryCard {...card} key={index} />
                                        ))}
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </PageLayout>

    )
}
