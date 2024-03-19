"use client"
import Link from "next/link";

import { IconContext } from "react-icons";

import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";

const login = () => {
  return (
    <main className="bg-zinc-800 min-h-screen flex justify-center items-center">

      {/* <div className="flex justify-center items-center h-screen flex-col lg:space-y-"> */}

        <div className="h-screen items-center p-6 flex lg:space-x-60">

          <div className="max-w-md">

            <div className="space-y-5 text-center">
              <h1 className="text-2xl text-white font-bold">Login</h1>
              <p className="text-white lg:text-xl">Se você não tiver uma conta, você pode se <Link className="text-blue-500 font-bold" href="/register">registrar aqui!</Link></p>
            </div>

            <div className="pt-12">
              <div className="flex flex-col space-y-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Insira o seu Email</label>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="relative z-0 w-full mb-5 group">
                    <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Insira sua Senha</label>
                  </div>
                  <div className="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-transparent border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-300 dark:text-gray-300">Lembrar senha</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-0 w-full mb-5 group pt-14">
              <button type="submit" className="text-gray-300 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Entrar</button>
            </div>

            <div className="flex flex-col justify-center items-center space-y-6">
              <p className="text-gray-300">Faça Login com</p>
              <div className="flex justify-center space-x-6">
                <Link href="/">
                  <IconContext.Provider value={{ className: "text-blue-500 text-3xl" }}>
                    <FaFacebook />
                  </IconContext.Provider>
                </Link>
                <Link href="/">
                  <IconContext.Provider value={{ className: "text-green-500 text-3xl" }}>
                    <IoLogoWhatsapp />
                  </IconContext.Provider>
                </Link>
                <Link href="/">
                  <IconContext.Provider value={{ className: "text-red-500 text-3xl" }}>
                    <SiGmail />
                  </IconContext.Provider>
                </Link>
              </div>

            </div>

          </div>

          <div className="collapse lg:visible">
            <img className="rounded-2xl" src="./LoginPage.png" alt="Imagem Complementar página de Login" />
          </div>

        </div>

    </main >
  );
}

export default login;