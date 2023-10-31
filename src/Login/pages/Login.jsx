import React, { useEffect, useState } from 'react'
import {Input} from "@nextui-org/react";
import {useForm, Controller} from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


export function Login() {
  const {autenticated, login } = useAuth();
  const { handleSubmit, formState:{errors}, control, reset} = useForm();
  const navigate = useNavigate();
  

  const onSubmit = (data) => login(data);

  useEffect(() => {
    if (autenticated) {
      navigate("/Dashboard");

    } 
  }, [autenticated]);

  return (
      <>
        <section className="bg-gray-50 min-h-screen flex items-center justify-center">
              <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                <div className="md:w-1/2 px-8 md:px-16">
                  <h2 className="font-bold text-2xl text-[#002D74] my-7">Inicio de sesión</h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                  <Controller
                        name="userEmail"
                        control={control}
                        rules={{
                          required: "Email requerido",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Email invalido"
                          }
                        }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="email"
                            label="Email"
                            variant="bordered"
                            color={errors.userEmail ? "danger" : ""}
                            errorMessage={errors.userEmail?.message}
                            className="max-w-xs"
                          />
                        )}
                      />

                    <Controller
                      name="userPassword"
                      control={control}
                      rules={{
                        required: "Contraseña requerida",
                      }}
                      render={({ field }) => (
                        <Input
                          {...field}
                          type="password"
                          label="Contraseña"
                          variant="bordered"
                          color={errors.userPassword ? "danger" : ""}
                          errorMessage={errors.userPassword?.message}
                          className="max-w-xs"
                        />
                      )}
                    />
                    <button type='submit' className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Iniciar sesión</button>
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