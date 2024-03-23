"use client";

import { useEffect, useState } from "react";
import { useApi } from "~/hooks/useApi";
import { User } from "~/types/User";
import { AuthContext } from "./AuthContext";
import { Tokens } from "~/types/Tokens";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const refreshToken = localStorage.getItem("refreshToken");
      const AccessToken = localStorage.getItem("accessToken");
      if (refreshToken && AccessToken) {
        try {
          const data: User = await api.validateToken(AccessToken);
          if (data) {
            setUser(data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    validateToken();
  }, []);

  const signIn = async (email: string, password: string) => {
    const data = await api.signin(email, password);
    if (data.user) {
      setUser(data.user);
      setToken(data.tokens);
      return true;
    }
    return false;
  };

  const setToken = (token: Tokens) => {
    localStorage.setItem("refreshToken", token.refresh);
    localStorage.setItem("accessToken", token.access);
  };

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
