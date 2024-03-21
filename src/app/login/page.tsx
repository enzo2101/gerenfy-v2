"use client";

import Link from "next/link";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import { userLoginSchema } from "../../validations/login/userLogin";
import { CreateUserFormatLogin } from "../../validations/login/typeUserLogin";

import { IconContext } from "react-icons";

import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { InputComponent } from "~/components/InputComponent";
import useLoginForm from "~/hooks/useLoginForm";

const login = () => {
  const { register, createUser, errors, handleSubmit, output } = useLoginForm();

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-800">
      <div className="flex h-screen items-center p-6 lg:space-x-60">
        <div className="max-w-md">
          <div className="space-y-5 text-center">
            <h1 className="text-5xl font-bold text-white">Login</h1>
            <p className="text-white lg:text-xl">
              Se você não tiver uma conta, você pode se{" "}
              <Link className="font-bold text-blue-500" href="/register">
                registrar aqui!
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit(createUser)}>
            <div className="pt-12">
              <div className="flex flex-col space-y-6">
                <InputComponent
                  type="email"
                  {...register("email")}
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                  helperText={errors.email?.message}
                />
                <div className="flex flex-col space-y-4">
                  <InputComponent
                    type="password"
                    {...register("password")}
                    className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                    helperText={errors.password?.message}
                  />
                  <div className="mb-4 flex items-center">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="h-4 w-4 rounded border-gray-300 bg-transparent text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                      {...register("isRemember")}
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ms-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                    >
                      Lembrar senha
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative z-0 mb-5 w-full pt-14">
              <button
                type="submit"
                className="w-full rounded-2xl bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-gray-300 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Entrar
              </button>
            </div>
            <pre>{output}</pre>
          </form>

          <div className="flex flex-col items-center justify-center space-y-6">
            <p className="text-gray-300">Faça Login com</p>
            <div className="flex justify-center space-x-6">
              <Link href="/">
                <IconContext.Provider
                  value={{ className: "text-blue-500 text-3xl" }}
                >
                  <FaFacebook />
                </IconContext.Provider>
              </Link>
              <Link href="/">
                <IconContext.Provider
                  value={{ className: "text-green-500 text-3xl" }}
                >
                  <IoLogoWhatsapp />
                </IconContext.Provider>
              </Link>
              <Link href="/">
                <IconContext.Provider
                  value={{ className: "text-red-500 text-3xl" }}
                >
                  <SiGmail />
                </IconContext.Provider>
              </Link>
            </div>
          </div>
        </div>

        <div className="collapse lg:visible">
          <img
            className="rounded-2xl"
            src="./LoginPage.png"
            alt="Imagem Complementar página de Login"
          />
        </div>
      </div>
    </main>
  );
};

export default login;
