import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CreateUserFormatLogin } from "~/validations/login/typeUserLogin";
import { userLoginSchema } from "~/validations/login/userLogin";

const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormatLogin>({
    resolver: yupResolver(userLoginSchema),
  });

  const [output, setOutput] = useState("");

  function createUser(data: any) {
    setOutput(JSON.stringify(data, null, 2));
  }
  return { register, handleSubmit, errors, output, createUser };
};

export default useLoginForm;