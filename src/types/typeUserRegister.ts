import * as yup from "yup";
import { userRegisterSchema } from "../validations/login/userRegister";


export type CreateUserFormatRegister = yup.InferType<typeof userRegisterSchema>