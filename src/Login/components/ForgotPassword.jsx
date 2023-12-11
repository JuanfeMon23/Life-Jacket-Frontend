import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext';
import {Input} from "@nextui-org/react";
import {useForm, Controller} from 'react-hook-form';
import { MdOutlineMail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { VerifyTokenPassword } from './VerifyTokenPassword';
import { useNavigate } from 'react-router-dom';


export  function ForgotPassword() {
    const {passwordRecovery, newPassword  } = useAuth();
    const { handleSubmit, formState:{errors}, control, reset} = useForm();
    const navigate = useNavigate()


    const onSubmit = async (data) => {
      passwordRecovery(data);        
    }


  return (
    <section className=" flex flex-col items-center mt-40  justify-center w-full flex-1 px-20 text-center">
    <div className=' bg-white rounded-2xl shadow-2xl flex w-[100%] max-w-4xl'>
      <div className=' w-[100%] p-5'>
        <div className=' text-left font-bold'>
        <div className=' text-left font-bold '>
          <Link to='/'> <span className=' text-blue-800 cursor-pointer'>Volver al inicio de sesión </span></Link>
        </div>
        </div>
        <div className=' py-10'>
            <h2 className=' text-3xl font-bold text-blue-800'>Recuperación de la cuenta</h2>
            <div className='border-2 w-10 border-blue-800 inline-block mb-2'></div>
            <div className=' flex flex-col'>
              <span>Verifica el correo electrónico en el cual inicias sesión en el aplicativo</span>
              <span>para enviarte un token de recuperación</span>
            </div>

            <div className=' flex flex-col items-center mt-8'>
              <form onSubmit={handleSubmit(onSubmit)}>
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
                        className="w-[12rem] sm:w-[17rem] mb-5"
                      />
                    )}
                  />
                    <button type='submit' title='Enviar mensaje al correo electrónico' className=' mt-4 border-2 border-blue-800 text-blue-800 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-800 hover:text-white hover:border-blue-800 '>Enviar</button>
              </form>
              <VerifyTokenPassword/>
            </div>
        </div>
      </div>
    </div>
  </section>
  )
}
