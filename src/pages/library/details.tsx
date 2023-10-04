import { useLocation } from 'react-router';
import hero1 from '../../assets/hero1.png';
import others1 from '../../assets/others1.png';
import others2 from '../../assets/others2.png';
import others3 from '../../assets/others3.png';
import PageLayout from '../../layouts/PageLayout';
// import ReactRating from 'react-rating-stars-component';

const objectives: string[] = [
    'Understand the basics of marketing',
    'What marketing is and its importance',
    'Understand the fundamental principles of marketing',
    'Learn how these principles can be applied in real-world cases',
    'Learn marketing strategies and innovation',
    'Introduction into digital marketing'
];

function Header() {

    return (
        <div>
            <div className="flex w-[90%] mx-auto space-x-10">
                <img src={hero1} alt="" className="w-[450px]" />
                <div className='w-[450px]'>
                    <h1 className="font-[700] text-[40px] text-[#030036BD]">Early Coding for kids (Book 1)</h1>
                    <div>
                        <svg width="154" height="24" viewBox="0 0 154 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.767045 15.4545V13.517L5.625 5.86364H7.29545V8.54545H6.30682L3.24432 13.392V13.483H10.1477V15.4545H0.767045ZM6.35227 17.5V14.8636L6.39773 14.0057V5.86364H8.70455V17.5H6.35227ZM13.0057 17.6477C12.6307 17.6477 12.3087 17.5152 12.0398 17.25C11.7746 16.9811 11.642 16.6591 11.642 16.2841C11.642 15.9129 11.7746 15.5947 12.0398 15.3295C12.3087 15.0644 12.6307 14.9318 13.0057 14.9318C13.3693 14.9318 13.6875 15.0644 13.9602 15.3295C14.233 15.5947 14.3693 15.9129 14.3693 16.2841C14.3693 16.5341 14.3049 16.7633 14.1761 16.9716C14.0511 17.1761 13.8864 17.3409 13.6818 17.4659C13.4773 17.5871 13.2519 17.6477 13.0057 17.6477ZM16.3338 17.5V15.7273L20.4759 11.892C20.8281 11.5511 21.1236 11.2443 21.3622 10.9716C21.6046 10.6989 21.7884 10.4318 21.9134 10.1705C22.0384 9.9053 22.1009 9.61932 22.1009 9.3125C22.1009 8.97159 22.0232 8.67803 21.8679 8.43182C21.7126 8.18182 21.5005 7.99053 21.2315 7.85795C20.9626 7.72159 20.6577 7.65341 20.3168 7.65341C19.9607 7.65341 19.6501 7.72538 19.3849 7.86932C19.1198 8.01326 18.9152 8.2197 18.7713 8.48864C18.6274 8.75758 18.5554 9.07765 18.5554 9.44886H16.2202C16.2202 8.6875 16.3925 8.02652 16.7372 7.46591C17.0819 6.9053 17.5649 6.47159 18.1861 6.16477C18.8073 5.85795 19.5232 5.70455 20.3338 5.70455C21.1671 5.70455 21.8925 5.85227 22.5099 6.14773C23.1312 6.43939 23.6141 6.8447 23.9588 7.36364C24.3035 7.88258 24.4759 8.47727 24.4759 9.14773C24.4759 9.58712 24.3887 10.0208 24.2145 10.4489C24.044 10.8769 23.7391 11.3523 23.2997 11.875C22.8603 12.3939 22.241 13.017 21.4418 13.7443L19.7429 15.4091V15.4886H24.6293V17.5H16.3338Z" fill="#FEA948" />
                            <path d="M46 0L48.6942 8.2918H57.4127L50.3593 13.4164L53.0534 21.7082L46 16.5836L38.9466 21.7082L41.6407 13.4164L34.5873 8.2918H43.3058L46 0Z" fill="#FEA948" />
                            <path d="M70 0L72.6942 8.2918H81.4127L74.3593 13.4164L77.0534 21.7082L70 16.5836L62.9466 21.7082L65.6407 13.4164L58.5873 8.2918H67.3058L70 0Z" fill="#FEA948" />
                            <path d="M94 0L96.6942 8.2918H105.413L98.3593 13.4164L101.053 21.7082L94 16.5836L86.9466 21.7082L89.6407 13.4164L82.5873 8.2918H91.3058L94 0Z" fill="#FEA948" />
                            <path d="M118 0L120.694 8.2918H129.413L122.359 13.4164L125.053 21.7082L118 16.5836L110.947 21.7082L113.641 13.4164L106.587 8.2918H115.306L118 0Z" fill="#FEA948" />
                            <path d="M142 1.61804L144.219 8.4463L144.331 8.7918H144.694H151.874L146.065 13.0119L145.771 13.2254L145.884 13.5709L148.102 20.3992L142.294 16.1791L142 15.9656L141.706 16.1791L135.898 20.3992L138.116 13.5709L138.229 13.2254L137.935 13.0119L132.126 8.7918H139.306H139.669L139.781 8.4463L142 1.61804Z" fill="url(#paint0_linear_46_215)" stroke="#FEA948" />
                            <defs>
                                <linearGradient id="paint0_linear_46_215" x1="147.5" y1="9" x2="138.5" y2="12" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.677083" stop-color="white" stop-opacity="0.24" />
                                    <stop offset="1" stop-color="#FEA948" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>

                    <p className='bg-white text-gray-500 mb-7'>An educational practice of introducing young children, typically between the ages of 3 to 12, to the basics of computer programming and coding.</p>
                    <div className="mb-6 py-[1px] h-[70px] w-full bg-gradient-to-r from-[#FA14D5] to-[#4F46E5]">
                        <div className='text-[#030036BD] h-full bg-white flex items-center'><span className='text-gray-500'>Written by: </span> Moses stephen & Lewis Torn</div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className='flex space-x-2'>
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.657 6.76146 15.1936 5.5659 14.59 4.44C16.4141 5.068 17.9512 6.33172 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.58397 18.9354 6.04583 17.6708 5.08 16ZM8.03 8H5.08C6.04583 6.32918 7.58397 5.06457 9.41 4.44C8.80643 5.5659 8.34298 6.76146 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.9512 17.6683 16.4141 18.932 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" fill="#87909E" />
                                </svg>
                            </span>
                            <span className="text-primary">English</span>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 0L0 6L4 8.18V14.18L11 18L18 14.18V8.18L20 7.09V14H22V6L11 0ZM17.82 6L11 9.72L4.18 6L11 2.28L17.82 6ZM16 12.99L11 15.72L6 12.99V9.27L11 12L16 9.27V12.99Z" fill="#87909E" />
                            </svg>
                            <span className="text-primary underline">12 schools are using this book</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function ObjectiveAndRating() {
    return (
        <div className="mt-16 w-[90%] border-gray-300 mx-auto flex justify-between">
            <div className="border rounded-[8px] p-4 pt-6 w-[45%]">
                <h1 className="text-primary mb-4 font-[600]">What students will learn</h1>
                <ul>
                    {objectives.map((item: string, index: number) => (
                        <li key={index} className="flex space-x-2  mb-6 text-sm text-gray-500">
                            <span>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 7.5L9 19.5L3.5 14L4.91 12.59L9 16.67L19.59 6.09L21 7.5Z" fill="#030036" fillOpacity="0.74" />
                                </svg>
                            </span>
                            <p className="text-primary">{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="border  rounded-[4px] p-4 w-[45%] flex flex-col justify-between items-center">
                <div>
                    <h1 className="text-[60px] text-center text-[#FEA948] font-[700]">4.2</h1>
                    <div className='mx-auto w-fit'>
                        <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#FEA948" />
                            <path d="M36 0L38.6942 8.2918H47.4127L40.3593 13.4164L43.0534 21.7082L36 16.5836L28.9466 21.7082L31.6407 13.4164L24.5873 8.2918H33.3058L36 0Z" fill="#FEA948" />
                            <path d="M60 0L62.6942 8.2918H71.4127L64.3593 13.4164L67.0534 21.7082L60 16.5836L52.9466 21.7082L55.6407 13.4164L48.5873 8.2918H57.3058L60 0Z" fill="#FEA948" />
                            <path d="M84 0L86.6942 8.2918H95.4127L88.3593 13.4164L91.0534 21.7082L84 16.5836L76.9466 21.7082L79.6407 13.4164L72.5873 8.2918H81.3058L84 0Z" fill="#FEA948" />
                            <path d="M108 1.61804L110.219 8.4463L110.331 8.7918H110.694H117.874L112.065 13.0119L111.771 13.2254L111.884 13.5709L114.102 20.3992L108.294 16.1791L108 15.9656L107.706 16.1791L101.898 20.3992L104.116 13.5709L104.229 13.2254L103.935 13.0119L98.1262 8.7918H105.306H105.669L105.781 8.4463L108 1.61804Z" fill="url(#paint0_linear_46_270)" stroke="#FEA948" />
                            <defs>
                                <linearGradient id="paint0_linear_46_270" x1="113.5" y1="9" x2="104.5" y2="12" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.677083" stop-color="white" stop-opacity="0.24" />
                                    <stop offset="1" stop-color="#FEA948" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="w-full mt-5">
                        {
                            [70, 60, 30, 0, 0].map((n: number, index: number) => (
                                <div className="flex w-full items-center  mb-2">
                                    <span className="w-[4rem] text-[14px] font-[300]">{5 - index} Star</span>
                                    <div className="h-[4px] bg-gray-300 rounded overflow-hidden w-[230px]">
                                        <div className="h-full bg-[#FEA948]" style={{ width: n + '%' }} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex items-center justify-between w-full mt-10">
                    <span className="text-[#4F46E5] font-[600] underline">32 Reviews on this book</span>
                    <button className="border border-[#4F46E5] text-[#4F46E5] font-[600] rounded-[8px] px-4 py-3">
                        Write a review
                    </button>
                </div>
            </div>
        </div>
    );
}


type TBookCardProps = {
    title: string;
    sub: string;
    description: string;
    rating: number;
    image: string;
}
const products: TBookCardProps[] = [

    {
        title: 'Marketing basics Nursery',
        sub: 'For Nursery',
        description: 'Students will understand the basic marketing principles and....',
        rating: 4.2,
        image: others1
    },

    {
        title: 'Nursery workbook',
        sub: 'For Nursery',
        description: 'Students will understand the basic marketing principles and....',
        rating: 4.2,
        image: others1
    },

    {
        title: 'Marketing basics Primary',
        sub: 'For Primary',
        description: 'Students will understand the basic marketing principles and....',
        rating: 4.2,
        image: others2
    },

    {
        title: 'Primary workbook',
        sub: 'For Primary',
        description: 'Students will understand the basic marketing principles and....',
        rating: 4.2,
        image: others3
    },

];

function BookCard({ title, image, sub, description, rating }: TBookCardProps) {
    return (
        <div className="rounded-[8px] w-[270px] border shadow cursor-pointer">
            <div className="w-full rounded-t-[8px] overflow-hidden">
                <img src={image} alt="" />
            </div>
            <div className="p-2 py-3">
                <h1 className="text-gray-600 font-[500]">{title}</h1>
                <p className="text-gray-400 my-3 text-sm">{description}</p>
                <span className="py-[3px] text-gray-500 px-3 text-sm rounded-full">
                    <sup className="font-[900]">*</sup>
                    {rating}
                </span>
                <div className='text-[12px] text-gray-400 mt-3'>
                    {sub}
                </div>
            </div>
        </div>
    );
}


function Others() {
    return (
        <div className='w-[90%] mx-auto mt-16'>
            <h1 className="text-[#030036BD] font-[600]">Other books like this</h1>
            <div className="mt-3 grid grid-cols-4 gap-x-3">
                {
                    products.map((props, index) => (
                        <BookCard {...props} key={index} />
                    ))
                }
            </div>
        </div>
    );
}

export default function LibraryDetails() {
    const location = useLocation();
    const card = location.state;
    console.log(card);
    return (
        <PageLayout>
            <div className="pb-10 pt-10 mt-24">
                <Header />
                <ObjectiveAndRating />
                <Others />
            </div>
        </PageLayout>
    );
}