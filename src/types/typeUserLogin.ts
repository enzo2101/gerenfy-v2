import * as yup from "yup";
import { userLoginSchema } from "../validations/login/userLogin";

export type CreateUserFormatLogin = yup.InferType<typeof userLoginSchema>;
