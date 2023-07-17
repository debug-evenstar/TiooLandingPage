import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../Ui/TextInput";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdAddCircleOutline } from "react-icons/md"
import Button from "../Ui/Button";

const CustomNamingModal = () => {
    const inputs = {
      value: "",
    }
  const [inputFields, setInputFields] = useState<any[]>([inputs]);

  const addMoreField = () => {
    setInputFields([...inputFields, inputs])
  };
  const removeField = (item:any) => {
    const updatedArr = [...inputFields]
    updatedArr.splice(item, 1);
    setInputFields(updatedArr)
  };
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });
  return (
    <>
      <div className="h-[80vh] grid content-between">
        <div>
        <form>
          {inputFields.map((item, index) => (
            <div className="flex items-center">
              <div className="w-full">
              <Controller
                name={item.value}
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Please enter custom name",
                  },
                }}
                render={({ field }) => (
                  <TextInput
                    label={`Level ${index + 1}`}
                    labelClassName="text-[#4A5568] mb-2 fw-500"
                    placeholder="Enter custom name"
                    error={errors.email?.message}
                    type={InputType.text}
                    {...field}
                  />
                )}
              />
              </div>
              <div className="mt-2">
                <RiDeleteBinLine className="text-2xl text-[#87909E] mt-6 mx-4 hover:text-red-600" onClick={() => removeField(index)}/>
              </div>
            </div>
          ))}
        </form>
        <div className="flex mt-4 items-center gap-x-2 text-primary cursor-pointer" onClick={addMoreField}>
            <MdAddCircleOutline/>
            <p className="fw-500 fs-500">Add Another Name</p>
        </div>
        </div>
        <Button title="Save"/>
      </div>
    </>
  );
};

export default CustomNamingModal;
