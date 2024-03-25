import * as yup from "yup";
import { userRegisterSchema } from "./userRegister";


export type CreateUserFormatRegister = yup.InferType<typeof userRegisterSchema>