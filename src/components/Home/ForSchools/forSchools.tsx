import forSchoolsImg from "../../../assets/images/for-schools.png";
import Button from "../../common/Buttons/button";
import CustomList, { ListContentProps } from "../../common/CusomList/customList";


const data: ListContentProps[] = [
  {
    header: "Become a pacesetter",
    content: "Set your school apart and become a trailblazer with Tioo by utilizing our functionalities to enhance students’ learning experience",
  },
  {
    header: "Increase student retention",
    content: "Interactive textbooks and workbooks improve students’ engagement and participation, increasing retention by over 60%",
  },
  {
    header: "Vast curriculum",
    content: "Gain access to an extensive range of educational subjects. This breadth of curriculum options will allow your schools to cater to various learning styles.",
  },
];


export default function ForSchools() {
  return (
    <div className="py-20">
      <div className="text-dark px-10 sm:px-20 outfit-font mx-auto w-fit text-center" data-aos="fade-down">
        <p className=" font-semibold text-[35px] sm:text-[45px]">Tioo For Schools</p>
        <p className=" text-[24px]">Onboard your school on Tioo today</p>
      </div>
      <div className="mt-7 sm:px-20 flex flex-col sm:flex-row sm:space-x-10">
        <img src={forSchoolsImg} className="sm:w-[540px] px-10 sm:px-0 mx-auto mb-3 sm:mb-0" alt="" data-aos="fade-right" />
        <div data-aos="fade-left" className="px-8 sm:px-0">
          <CustomList data={data} />
          <div className="mx-auto w-fit">
            <Button link to="https://docs.google.com/forms/d/e/1FAIpQLSdxRSkNj3yBwOIYwKyZpQGgv4jibQuM0o0L6hRffhF8KJ7xew/viewform?embedded=true" className="px-9  py-3 font-semibold text-[21px] outfit-font">Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
