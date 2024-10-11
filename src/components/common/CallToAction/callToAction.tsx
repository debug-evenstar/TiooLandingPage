import Button from "../Buttons/button";
import './style.css';

const FormInput = ({ label, name }: { label: string; name: string }) => {
  return (
    <div className="flex flex-col spacey-y-2 mb-7">
      <label
        className="inline-block font-semibold outfit-font text-[23px] sm:text-[23px] text-gray-900"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        name={name}
        className="text-gray-900 px-2 outfit-font text-[23px] border-b border-gray-300 bg-transparent outline-none"
      />
    </div>
  );
};

export default function CallToAction({style = {}}: { style?: any}) {
  return (
    <div className={`px-3 py-28 sm:px-28 mx-auto sm:w-[70%]`} style={style}>
      <div className="py-10 bg-white rounded-[16px] border-[#FCEBFF] border-[3px] px-4 sm:px-24 drop">
        <div className="text-gray-700 outfit-font mx-auto w-fit text-center">
          <p className=" font-semibold text-[30px] sm:text-[38px]">Make Learning Fun</p>
          <p className=" text-[18px] sm:text-[20px] text-gray-600">
            Wondering how we can assist you or you have any questions?
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
