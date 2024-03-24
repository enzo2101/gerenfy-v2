"use client";

import React, { useContext } from "react";
import Header from "~/components/Header";
import { AuthContext } from "~/contexts/AuthContext";
import Login from "../login/page";
import { FormatDate } from "~/hooks/FormatDate";

export default function profile() {
  const auth = useContext(AuthContext);

  if (auth.user) {

    return (
      <div className="min-h-screen flex flex-col">
        <Header />

        <div className="flex flex-grow items-center justify-center space-x-10">
          <img
            className="size-60 rounded-full"
            src={auth.user?.avatar.high}
            alt="Imagem de perfil"
          />

          <div className="flex flex-col">
            <h1>Nome: {auth.user.name}</h1>
            <h1>Email: {auth.user.email}</h1>
              <h1>
                Criado em:
                <span> {FormatDate(auth.user.created)}</span>
              </h1>
          </div>

        </div>
        
      </div>
    );
  }

  <Login />;
}
