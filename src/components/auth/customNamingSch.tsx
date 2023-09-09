import React, {FC, useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import TextInput, { InputType } from "../Ui/TextInput";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdAddCircleOutline } from "react-icons/md"
import Button from "../Ui/Button";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { saveNaming } from "../../redux/reducers/setupReducer";
import { toast } from "react-toastify";
import { useGetTioClassesQuery } from "../../services/api/routineSlice";

interface Props {
  close: () => void
}
const CustomSchoolNamingModal:FC<Props> = ({close}) => {
    const inputs = {
      naming: "",
      equivalent: "",
    }
    const prevInput = useAppSelector((state) => state.setup.naming)
    const arrPrev = prevInput.map((item) => (item))
    const dispatch = useAppDispatch()
  const [inputFields, setInputFields] = useState<any[]>([...arrPrev, inputs]);
  const {data:grade, isLoading} = useGetTioClassesQuery()
  const [type, setType] = useState('')
  

  const addMoreField = () => {
    setInputFields([...inputFields, inputs])
  };
  const handleInputChange = (index:number, event:any) => {
    const { name, value } = event.target;
    const updatedPairs = [...inputFields];
    updatedPairs[index][name] = value;
    setInputFields(updatedPairs);
  };

  const handleRemovePair = (index:number) => {
    const updatedPairs = [...inputFields];
    updatedPairs.splice(index, 1);
    setInputFields(updatedPairs);
  };
  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   mode: "onChange",
  // });
  const onSubmit = () => {
    const arr = inputFields.map(x => Object.assign({}, x, { "type": "custom" }));
    
    dispatch(saveNaming(arr))
    close()
    toast.success("Custom Naming type saved")
  }
  return (
    <>
      <div className="h-[80vh] grid content-between">
        <div>
        <form onSubmit={onSubmit}>
          {inputFields.map((item, index) => (
            <>
              <div className="flex w-full items-center" key={index}>
              <TextInput
                    label='Name'
                    labelClassName="text-[#4A5568] mb-2 fw-500 block w-full"
                    placeholder="Dahlia"
                    name="naming"
                    type={InputType.text}
                    value={item.naming}
            onChange={(e:any) => handleInputChange(index, e)}
                  />
              <div className="mt-2">
                <RiDeleteBinLine className="text-2xl text-[#87909E] mt-6 mx-4 hover:text-red-600" onClick={() => handleRemovePair(index)}/>
              </div>
            </div>
            <div className="w-full mt-2">
              <label className="text-gray-500 fs-400 block">Choose a grade that&apos;s equivalent to Dahlia </label>
                <select className="w-8/12 p-1 mt-1 outline-none border-2 border-[#DA70D65E] rounded-[4px]" value={item.equivalent}
                name="equivalent"
            onChange={(e:any) => handleInputChange(index, e)} >
                      <option></option>
                      {
                        grade && grade.data.map((item:any, i:number) => (
                          <option value={item.id} key={i}>{item.naming}</option>
                        ))
                      }
                    </select>
            </div>
            </>
          ))}
        </form>
        <div className="flex mt-4 items-center gap-x-2 text-primary cursor-pointer" onClick={addMoreField}>
            <MdAddCircleOutline/>
            <p className="fw-500 fs-500">Add Another Name</p>
        </div>
        </div>
        {
          inputFields.length > 1 ? <Button title="Save" onClick={onSubmit}/> : <Button title="Save" disabled/>
        }
      </div>
    </>
  );
};

export default CustomSchoolNamingModal;
