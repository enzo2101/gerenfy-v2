"use client";

import Link from "next/link";

import { IconContext } from "react-icons";

import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { InputComponent } from "~/components/InputLoginComponent";
import useRegisterForm from "~/hooks/useRegisterForm";

export default function Register() {
  const { register, handleSubmit, errors, userRegister } = useRegisterForm();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-800">
      <div className="flex h-screen items-center p-6 lg:space-x-60">
        <div className="max-w-md">
          <div className="space-y-5 text-center">
            <h1 className="text-5xl font-bold text-white">Login</h1>
            <p className="text-white lg:text-xl">
              Se você não tiver uma conta, você pode{" "}
              <Link className="font-bold text-blue-500" href="/login">
                entrar aqui!
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit(userRegister)}>
            <div className="pt-12">
              <div className="flex flex-col">
                <InputComponent
                  type="text"
                  title="Insira o Nome"
                  {...register("name")}
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                  helperText={errors.name?.message}
                />
                <InputComponent
                  type="email"
                  title="Insira o Email"
                  {...register("email")}
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                  helperText={errors.email?.message}
                />
                <InputComponent
                  type="password"
                  title="Insira a Senha"
                  {...register("password")}
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                  helperText={errors.password?.message}
                />
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
    </div>
  );
}
