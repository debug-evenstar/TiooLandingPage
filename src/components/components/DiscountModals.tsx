import React, { useState } from "react";
import { IoMdClose, IoIosWarning } from "react-icons/io";
import { AiOutlineWarning } from "react-icons/ai";

import { title } from "process";
import Button from "./Button";

interface DiscountModalprops {
  close: () => void;
  item?: any;
  title?: string;
  aliasname?: string;
}

const DiscountModal: React.FC<DiscountModalprops> = ({
  close,
  item,
  title,
  aliasname,
}) => {
  const [sdescription, setsdescription] = useState("");
  const [loading, setloading] = useState("");
  const handleDiscount = () => {};

  return (
    <div className="h-full w-full  ">
      <div className="flex w-full items-center justify-between border-b-[1px] py-4 px-[24px]">
        <h3 className="font-medium text-[20px] text-[#030036] opacity-70">
          {/* {title} */} Please Fill the form
        </h3>
        <div className="cursor-pointer" onClick={close}>
          <IoMdClose className="text-[22px] text-[#545454]" />
        </div>
      </div>

      {/* <div className="w-full px-10 m-[auto]  flex flex-col items-center justify-center mb-20"></div> */}

      {/* <div className="p-[24px]">
        <Button
          text1={loading ? "Deleting..." : "Delete"}
          onclick={handleDiscount}
        />
      </div> */}
      <div className="h-[500px]  ">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdEwgpjTzLw79KGnJG5SjMa1GjDLTVnA5qERG54b5hNoeCX4w/viewform?embedded=true"
          width="100%"
          height="80%"
          // frameborder="0"
          // marginheight="0"
          // marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default DiscountModal;
