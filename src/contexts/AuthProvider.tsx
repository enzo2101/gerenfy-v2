"use client"

import { useState } from "react";
import { useApi } from "~/api/useApi";
import { Token, User } from "~/types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<Token | null>(null);
  const api = useApi();

  const signIn = async (email: string, password: string) => {
    const data = await api.signin(email, password);
    if(data.user) {
      setUser(data.user);
      setToken(data.token);
      return true;
    }
    return false;
  }

  return (
    <AuthContext.Provider value={{ user, signIn, token }}>
      {children}
    </AuthContext.Provider>
  )
};
