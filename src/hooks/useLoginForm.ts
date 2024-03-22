import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CreateUserFormatLogin } from "~/validations/login/typeUserLogin";
import { userLoginSchema } from "~/validations/login/userLogin";
import { useApi } from "../app/api/useApi";

const api = useApi();   

const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormatLogin>({
    resolver: yupResolver(userLoginSchema),
  });

  const userLogin: SubmitHandler<CreateUserFormatLogin> = async (data: any) => {
    await api.signin(data.email, data.password);
  };

  return { register, handleSubmit, errors, userLogin };
};

export default useLoginForm;
