import React, { useEffect, useState } from 'react'
import {Input} from "@nextui-org/react";
import {useForm, Controller} from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaCarAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';


export function Login() {
  const {isAutenticated, login} = useAuth();
  const { handleSubmit, formState:{errors}, control, reset} = useForm();
  const navigate = useNavigate();
  

  const onSubmit = (data) => login(data);

  useEffect(() => {
    if (isAutenticated) {
      navigate("/Dashboard");

    } 
  }, [isAutenticated]);

  return (
      <>
        <section className=" flex flex-col sm:items-center sm:justify-center w-[50rem] mt-20 sm:m-0  h-screen sm:w-full flex-1 text-center">
          <div className=' bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
            <div className=' w-3/5 sm:w-5/6 md:3/5 p-5'>
              <div className=' text-left font-bold'>
                <span className='  text-blue-800'>Alejandro Garzón</span> Vehículos
              </div>
              <div className=' sm:flex sm:flex-col sm:justify-center sm:items-center  py-10'>
                  <h2 className=' relative left-9 sm:relative sm:left-7 md:left-0 text-center text-3xl font-bold text-blue-800'>Iniciar sesión</h2>
                  <div className='border-2 w-10 border-blue-800 inline-block mb-2'></div>
                  <div className=' mt-8 sm:relative sm:left-7 md:left-0'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className=' mb-10 w-[13rem] relative left-20  sm:w-[20rem] sm:relative sm:left-0 '>
                        <Controller
                            name="userEmail"
                            control={control}
                            rules={{
                              required: "Correo requerido",
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Correo inválido"
                              }
                            }}
                            render={({ field }) => (
                              <Input
                                {...field}
                                type="email"
                                label="Correo electrónico"
                                endContent={<MdOutlineMail  className=' text-2xl'/>}
                                variant="bordered"
                                color={errors.userEmail ? "danger" : ""}
                                errorMessage={errors.userEmail?.message}
                              />
                            )}
                          />
                      </div>
                      <div className=' w-[13rem] relative left-20  sm:w-[20rem] sm:relative sm:left-0  '> 
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
                              endContent={<RiLockPasswordLine  className=' text-2xl'/>}
                              color={errors.userPassword ? "danger" : ""}
                              errorMessage={errors.userPassword?.message}
                            />
                          )}
                        />
                      </div>
                      <div className=' flex w-84 justify-end  mb-5'>
                        <Link to='/ForgotPassword'><label className=' cursor-pointer mt-3 flex text-blue-800 font-bold items-center text-[10px]  sm:text-xs'>¿Olvidaste tu contraseña?</label></Link> 
                      </div>
                          <button type='submit' title='Ingresar al sistema' className=' w-[10rem] ml-20 sm:m-0 text-sm border-2 border-blue-800 text-blue-800 rounded-full sm:px-12 p-2  inline-block font-semibold hover:bg-blue-800 hover:text-white hover:border-blue-800 '>Ingresar</button>
                    </form>
                  </div>
              </div>
            </div>
            <div className='  sm:hidden md:block md:w-2/5 md:bg-blue-800 text-transparent sm:text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 '>
              <h2 className='   md:text-3xl font-bold mb-2'>Bienvenido a LifeJacket</h2>
              <div className=' border-2 w-10 border-none sm:border-white inline-block mb-2'></div>
              <div className=' items-center justify-center'>
                <FaCarAlt className=' text-white sm:text-[130px] inline-block' />
              </div>
            </div>
          </div>
        </section>
      </>
  )
}