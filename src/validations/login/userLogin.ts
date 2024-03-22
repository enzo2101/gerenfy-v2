import * as yup from "yup";

import isEmailValidator from "validator/lib/isEmail";
import { isStrongPassword } from "validator";

export const userLoginSchema = yup.object().shape({
  email: yup
    .string()
    .transform((v, o) => (o === "" ? null : v))
    .email("Formato do email inválido")
    .required("O campo de email é obrigatório")
    .test(
      "is-valid",
      (message) => `${message.path} is invalid`,
      (value) =>
        value
          ? isEmailValidator(value)
          : new yup.ValidationError("Email inválido"),
    ),

  password: yup
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres"),
    // .test(
    //   "is-valid",
    //   (message) => `${message.path} is invalid`,
    //   (value) =>
    //     value
    //       ? isStrongPassword(value)
    //       : new yup.ValidationError("Senha inválido"),
    // ),
  isRemember: yup.boolean(),
});

