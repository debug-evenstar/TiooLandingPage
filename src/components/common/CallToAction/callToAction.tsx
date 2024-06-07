import Button from "../Buttons/button";
import './style.css';

const FormInput = ({ label, name }: { label: string; name: string }) => {
  return (
    <div className="flex flex-col spacey-y-2 mb-7">
      <label
        className="inline-block font-semibold outfit-font text-[23px] sm:text-[28px] text-white"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        name={name}
        className="text-white outfit-font text-[23px] border-b border-gray-300 bg-transparent outline-none"
      />
    </div>
  );
};

export default function CallToAction({style = {}}: { style?: any}) {
  return (
    <div className={`px-3 py-28 sm:px-28`} style={style}>
      <div className="py-10 bg-[#67007b] rounded-[16px] border-white border-[3px] px-4 sm:px-28 drop">
        <div className="text-white outfit-font mx-auto w-fit text-center">
          <p className=" font-semibold text-[30px] sm:text-[40px]">Make Learning Fun</p>
          <p className=" text-[20px] sm:text-[24px]">
            Wondering how we can assist you or you have <br className="hidden sm:block"/> any questions?
          </p>
        </div>
        <form action="" className=" mt-7 " onSubmit={() => null}>
          <FormInput label="Name" name="name" />
          <FormInput label="Email" name="email" />
          <FormInput label="Message" name="message" />
          <div className="flex justify-end font-semibold outfit-font ">
            <Button className="border-2 border-gray-300  text-[22px] w-[10rem] py-2">
              Let's Chat
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
