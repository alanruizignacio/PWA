import { useState } from "react";

export const useForm = <T extends object>(formulario: T) => {
  const [state, setState] = useState({
    email: "test@test.com",
    password: "123456",
  });

  const onChange = (value: string, campo: string) => {
    setState({
      ...state,
      [campo]: value,
    });
  };

  return { ...state, formulario: state, onChange };
};