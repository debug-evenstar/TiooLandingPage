import React, {FC} from "react";
import { HashLoader, PulseLoader } from "react-spinners";

interface Props{
    size: number
    color: string
}
export const HashSpinner:FC<Props> = ({ size, color }) => {
  return (
    <HashLoader
      color={color}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
export const PulseSpinner = ({ size, color }:{size?:number, color:string}) => {
  
  return (
    <PulseLoader
      color={color}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
  };