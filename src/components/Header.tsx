"use client"

import React, { useContext } from "react";
import { AuthContext } from "~/contexts/AuthContext";

export default function Header() {

  const auth = useContext(AuthContext)

  return (
    <div className="flex h-24 flex-row items-center bg-gray-500 p-4">
      <div className="flex justify-start w-full">
        <input
          className="rounded-lg pl-4"
          placeholder="Pesquisar..."
          type="text"
        />
      </div>
      <div className="flex justify-end w-full">
        <div className="flex flex-row items-center justify-center space-x-5">
          <div>
            <h2 className="text-2xl">Olá {auth.user?.name}</h2>
          </div>
          <div className="flex size-16 items-center justify-center rounded-full bg-white">
            <img className="size-16 items-center justify-center flex" src={auth.user?.avatar.medium} alt="Profile Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
