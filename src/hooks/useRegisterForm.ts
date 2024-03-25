import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthContext } from "~/contexts/AuthContext";
import { CreateUserFormatRegister } from "~/validations/login/typeUserRegister";
import { userRegisterSchema } from "~/validations/login/userLogin";

export default function useRegisterForm() {
  const auth = useContext(AuthContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormatRegister>({
    resolver: yupResolver(userRegisterSchema),
  });

  const userRegister: SubmitHandler<CreateUserFormatRegister> = async (
    data: any,
  ) => {
    const response = await auth.signUp(data.email, data.password, data.name);
    if (response) {
      router.push("/login");
    }
  };

  return { register, handleSubmit, errors, userRegister };
}
