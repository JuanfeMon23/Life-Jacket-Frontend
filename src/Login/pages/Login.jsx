import React from 'react'
import { useState } from 'react';
import {Input} from "@nextui-org/react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log(`Email: ${email}, Password: ${password}`);
  }
  return (
      <>
        <section className="bg-gray-50 min-h-screen flex items-center justify-center">
              <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                <div className="md:w-1/2 px-8 md:px-16">
                  <h2 className="font-bold text-2xl text-[#002D74] my-7">Inicio de sesión</h2>
                  <form action="" className="flex flex-col gap-4">
                    <Input type="Email" label="Email" id="Email" variant='bordered' isClearable/>
                    <Input type="password" label="Password"isClearable   variant="bordered" id='userPassword'/>
                    <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Iniciar sesión</button>
                  </form>

                </div>
                <div className="md:block hidden w-1/2">
                  <img className="rounded-2xl" src="https://e1.pxfuel.com/desktop-wallpaper/769/489/desktop-wallpaper-youtuall-on-coches.jpg"/>
                </div>
              </div>
        </section>
      </>
  )
}