import VideoPlayer from "./VideoPlayer";

export default function Demo() {
  return (
    <div className="py-10">
      {/* <div className="w-[75%] mx-auto  h-[200px] mx-auto sm:h-[600px]">
        <div className="bg-dark-blue rounded-[32px] flex items-center justify-center  w-full h-full">
          <p className="font-[500] outfit-font text-xl sm:text-3xl text-white">Demo</p>
        </div>
        <span className="inline-block relative -top-[4rem] sm:-top-[7rem] left-5 sm:left-12  p-1 sm:p-3 rounded-full bg-white">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M16 29.3333C23.3638 29.3333 29.3334 23.3638 29.3334 16C29.3334 8.63616 23.3638 2.66663 16 2.66663C8.63622 2.66663 2.66669 8.63616 2.66669 16C2.66669 23.3638 8.63622 29.3333 16 29.3333Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.6667 20V12M19.3334 20V12" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div> */}

      <div className="bg-[#F2EDFF] py-4 lg:py-16 px-4 lg:px-32">
        <div className="lg:h-[500px] lg:w-[750px] flex flex-col items-center justify-center mx-auto rounded-[56px] relative">
          <div className="overflow-hidden">{<VideoPlayer />}</div>
        </div>
      </div>
    </div>
  );
}
