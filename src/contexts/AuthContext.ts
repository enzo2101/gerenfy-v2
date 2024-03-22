import { createContext } from "react";
import { Token, User } from "~/types/User";

export type AuthContextType = {
  user: User | null;
  token: Token | null;
  signIn: (email: string, password: string) => Promise<boolean>;
};

export const AuthContext = createContext<AuthContextType>(null!);
