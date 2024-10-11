import aboutTiooImg from "../../../assets/images/mockup.png";
import moleculeImg from "../../../assets/images/icons/molecule.svg";
import AnimatedComp from "../../common/AnimatedText/animatedText";

export default function NewAboutTioo() {
  return (

    <div className="px-3 sm:py-0 relative sm:mt-20 sm:px-10 text-dark outfit-font bg-white">
      <div className="z-[10] absolute w-full h-full sm:px-20 hidden sm:block">

        <AnimatedComp className="text-gray-400 absolute left-28 sm:left-[4rem] font-bold levitate custom-delay-1">
          <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.6854 24.1016H0.759045L10.6428 5.57763H0.759045V0.942605H18.6854L8.834 19.4665H18.6854V24.1016Z" fill="#710A85" fillOpacity="0.15" />
          </svg>
        </AnimatedComp>
        <AnimatedComp className="text-gray-400 absolute left-10 sm:left-[12rem] -top-[3rem] levitate custom-delay-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.6927 24H19.0739V7.4625C19.0739 7.1395 19.0093 6.83804 18.8801 6.55811C18.7616 6.27818 18.5947 6.03593 18.3794 5.83136C18.1748 5.61603 17.9326 5.44915 17.6527 5.33071C17.3727 5.21228 17.0713 5.15307 16.7483 5.15307C16.4253 5.15307 16.1238 5.21228 15.8439 5.33071C15.5639 5.44915 15.3163 5.61603 15.101 5.83136C14.8964 6.03593 14.7349 6.27818 14.6165 6.55811C14.498 6.83804 14.4388 7.1395 14.4388 7.4625V24H9.80381V7.4625C9.80381 7.1395 9.74459 6.83804 9.62616 6.55811C9.50773 6.27818 9.34084 6.03593 9.12551 5.83136C8.92095 5.61603 8.6787 5.44915 8.39877 5.33071C8.11883 5.21228 7.81737 5.15307 7.49437 5.15307C7.17137 5.15307 6.86991 5.21228 6.58998 5.33071C6.31005 5.44915 6.06241 5.61603 5.84708 5.83136C5.64252 6.03593 5.48102 6.27818 5.36258 6.55811C5.24415 6.83804 5.18494 7.1395 5.18494 7.4625V24H0.549914V7.4625C0.549914 6.50427 0.727563 5.60526 1.08286 4.76547C1.44893 3.91491 1.94419 3.17739 2.56865 2.55293C3.20388 1.9177 3.94139 1.42244 4.78119 1.06714C5.63175 0.701076 6.53614 0.518044 7.49437 0.518044C8.3557 0.518044 9.18473 0.67416 9.98146 0.986391C10.7782 1.28786 11.4942 1.72929 12.1294 2.31068C12.7646 1.72929 13.4752 1.28786 14.2612 0.986391C15.0579 0.67416 15.8869 0.518044 16.7483 0.518044C17.7065 0.518044 18.6055 0.701076 19.4453 1.06714C20.2959 1.42244 21.0334 1.9177 21.6578 2.55293C22.2931 3.17739 22.7883 3.91491 23.1436 4.76547C23.5097 5.60526 23.6927 6.50427 23.6927 7.4625V24Z" fill="#413E49" fillOpacity="0.15" />
          </svg>
        </AnimatedComp>
        <AnimatedComp className="text-gray-400 absolute left-3 sm:left-[20rem] top-[2rem] font-bold levitate custom-delay-3">
          <img src={moleculeImg} alt="" />
        </AnimatedComp>
      </div>
      <div className="flex items-center text-center sm:text-start justify-between flex-col sm:flex-row">
        <div data-aos="fade-right" className=" sm:w-[48%]">
          <p className="font-semibold text-[23px] sm:text-[44px]">About Tioo</p>
          <div className="text-[18px] sm:text-[20px] urbanist leading-[1.8rem]">
            {/* Tioo is a digital bookstore that unites diverse publishers and authors, offering a vast library of interactive, AI-powered smart books that replace traditional static textbooks and e-books. Our platform provides a single destination for students and schools to access a wide range of engaging, personalized learning experiences */}
            <p className="mb-3">
            tio is a platform that makes exams preparation exciting and easy for college admission seekers and tertiary institution students
              {/* Tioo is a platform that makes textbook learning exciting and easy to understand for K-12 students and UTME candidates. */}
            </p>
            <p className="mb-3">
              We believe everyone deserves to ace their exams! Our app uses cool interactions and AI to make exams prep fun, easy and highly effective.
            </p>
            <p className="mb-3">
              Tioo helps students who feel bored or confused with regular exam prep methods to develop a love for learning!
            </p>
          </div>
        </div>
        <img
          data-aos="fade-down"
          src={aboutTiooImg}
          alt=""
          className="w-[80%] mx-auto sm:w-[46%] sm:block relative sm:-right-10"
        />
      </div>
    </div>
  );
}
