"use client";

import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { AuthContext } from "~/contexts/AuthContext";

export default function Header() {
  const router = useRouter();
  const auth = useContext(AuthContext);

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="flex h-24 flex-row items-center bg-gray-500 p-4">
      <div className="flex w-full justify-start">
        <input
          className="rounded-lg pl-4"
          placeholder="Pesquisar..."
          type="text"
        />
      </div>
      <div className="flex items-center space-x-3">
        <div className="flex flex-col items-center justify-center">
          <div className="flex-1">
            <p className="truncate text-xl font-semibold text-gray-900 dark:text-white">
              {auth.user?.name}
            </p>
          </div>

          <div>
            {auth.user?.is_active ? (
              <span className="text-md inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                <span className="me-1 h-2 w-2 rounded-full bg-green-500"></span>
                Online
              </span>
            ) : (
              <span className="text-md inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                <span className="me-1 h-2 w-2 rounded-full bg-red-500"></span>
                Offline
              </span>
            )}
          </div>
        </div>

        <div className="relative">
          <button
            className="h-16 w-16 flex-shrink-0 focus:outline-none"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <img
              className="size-16 rounded-full object-cover"
              src={auth.user?.avatar.medium}
              alt="User Image"
            />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <button
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    auth.logOut();
                    router.push("/login");
                  }}
                >
                  Deslogar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
