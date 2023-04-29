import { ChangeEvent, useState } from "react";

export interface InitialValuesProps {
  name?: string;
  email: string;
  password: string;
  repeatPassword?: string;
};

export const useHandleForm = (initialValues: InitialValuesProps) => {
  const [ values, setValues ] = useState(initialValues);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const key = e.target.name;
    const value = e.target.value;
    setValues({...values, [key]: value });
  }; 

  return {
    handleChange,
    values
  }
};