import React, {FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../Ui/TextInput";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdAddCircleOutline } from "react-icons/md"
import Button from "../Ui/Button";
import { useAppDispatch } from "../../redux/store";
import { saveNaming } from "../../redux/reducers/setupReducer";
import { toast } from "react-toastify";

interface Props {
  close: () => void
}
const CustomNamingModal:FC<Props> = ({close}) => {
    const inputs = {
      value: "",
    }
    const dispatch = useAppDispatch()
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
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data:any) => {
    const inputValues = Object.keys(data).map((key) => ({
      type: key,
      naming: data[key],
    }));
    dispatch(saveNaming(inputValues))
    close()
    toast.success("Custom Naming type saved")
  }
  return (
    <>
      <div className="h-[80vh] grid content-between">
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputFields.map((item, index) => (
            <div className="flex items-center" key={index}>
              <div className="w-full">
              <Controller
                name={`Level ${index + 1}`}
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Please enter custom name",
                  },
                }}
                render={({ field }) => (
                  <TextInput
                    label='Name'
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
        {
          inputFields.length > 1 ? <Button title="Save" onClick={handleSubmit(onSubmit)}/> : <Button title="Save" disabled/>
        }
      </div>
    </>
  );
};

export default CustomNamingModal;
