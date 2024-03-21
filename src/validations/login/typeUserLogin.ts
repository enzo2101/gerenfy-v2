import * as yup from "yup";
import { userLoginSchema } from "./userLogin";

export type CreateUserFormatLogin = yup.InferType<typeof userLoginSchema>;
