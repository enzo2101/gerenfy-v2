import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { CreateUserFormatLogin } from "~/validations/login/typeUserLogin";
import { userLoginSchema } from "~/validations/login/userLogin";
import { AuthContext } from "~/contexts/AuthContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";

export const useLoginForm = () => {
  const auth = useContext(AuthContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormatLogin>({
    resolver: yupResolver(userLoginSchema),
  });

  const userLogin: SubmitHandler<CreateUserFormatLogin> = async (data: any) => {
    const response = await auth.signIn(data.email, data.password, data.remember);
    if(response) {
      router.push("/profile");
    }
  };

  return { register, handleSubmit, errors, userLogin };
};

