import aboutTiooImg from "../../../assets/images/about-tioo.png";

export default function AboutTioo() {
  return (
    <div className="px-3 py-20 sm:py-0 sm:px-20 text-dark outfit-font bg-white">
      <div className="flex items-center flex-col sm:flex-row">
        <div data-aos="fade-right order-2 sm:order-1">
          <p className="font-semibold text-[35px] sm:text-[44px]">About Tioo</p>
          <p className="text-base sm:text-[24px] sm:w-[80%] leading-[2rem]">
            Tioo is an app that makes learning exciting and easy to understand
            for kids in Nigeria. It uses cool animations, and AI to make
            learning fun and easy. Tioo helps kids who feel bored or confused
            with regular school textbooks to develop a love for studying.
          </p>
          {/* <p className="text-base sm:text-[24px] sm:w-[80%]">
            Tioo is an AI-driven platform designed to transform K-12 education
            by offering adaptive textbooks and workbooks tailored to each
            student’s learning style.


            <br />
            Furthermore, This platform offers insight and analytics to help
            educators pinpoint areas of improvement.
            <br />
            Tioo boosts engagement, comprehension and academic achievement,
            elevating the standard of K-12 education.
          </p> */}
        </div>
        <img
          data-aos="fade-down"
          src={aboutTiooImg}
          alt=""
          className="sm:w-[45%] hidden sm:block order-1 sm:order-2"
        />
      </div>
    </div>
  );
}
