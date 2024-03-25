import { createContext } from "react";
import { User } from "~/types/User";

export type AuthContextType = {
  user: User | null;
  signIn: (email: string, password: string, remeber:boolean) => Promise<boolean>;
  logOut: () => void;
  signUp: (email: string, password: string, name: string) => Promise<boolean>;
};

export const AuthContext = createContext<AuthContextType>(null!);
