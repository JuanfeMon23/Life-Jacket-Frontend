import React, {useState} from 'react'
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useParams } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {useForm, Controller} from 'react-hook-form';
import {Input} from "@nextui-org/react";
import { resetPasswordRequest } from '../api/Auht';
import { toast } from "react-toastify";



export  function Resetpassword() {
    const { newPassword } = useAuth();
    const navigate = useNavigate();
    
    const onSubmit  = async (data) => {
       try {
        await resetPasswordRequest(newPassword.idUser, data)
        toast.success('Contraseña actualizada con éxito!' ,{
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500
        })
        navigate('/')
       } catch (error) {
        toast.error(error.response.data.message ,{
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500
        })
       }
    };
    
    const validationSchema = Yup.object().shape({
        newUserPassword: Yup.string()
        .required('Contraseña requerida')
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .matches(
            /^(?=.*[A-Z])(?=.*[\W])/,
            'La contraseña debe contener al menos una letra mayúscula y un caracter especial'
        )
    });
    
    const formOptions = { resolver: yupResolver(validationSchema) };
    const { handleSubmit, formState:{errors}, control, reset} = useForm(formOptions, {defaultValues : {
      newUserPassword: ''
    }});

  return (
    <section className=" flex flex-col sm:items-center mt-40  sm:justify-center w-full flex-1 text-center">
    <div className=' bg-white rounded-2xl shadow-2xl flex w-[100%] max-w-4xl'>
      <div className=' w-[100%] p-5'>
        <div className=' text-left font-bold '>
          <Link to='/'> <span className=' text-blue-800 cursor-pointer'>Volver al inicio de sesión </span></Link>
        </div>
        <div className=' py-10'>
            <h2 className=' text-3xl font-bold text-blue-800'>Nueva contraseña</h2>
            <div className='border-2 w-10 border-blue-800 inline-block mb-2'></div>
            <div className=' flex flex-col items-center mt-8'>
              <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="newUserPassword"
                control={control}
                render={({ field }) => (
                <Input
                    {...field}
                    type="password"
                    label="Nueva contraseña"
                    variant="bordered"
                    color={errors.newUserPassword ? "danger" : ""}
                    errorMessage={errors.newUserPassword?.message}
                    className=" w-[12rem] sm:w-[17rem] mb-5"
                />
                )}
                />
                    <button type='submit' title='Enviar nueva contraseña' className=' mt-4 border-2 border-blue-800 text-blue-800 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-800 hover:text-white hover:border-blue-800 '>Enviar</button>
              </form>
            </div>
        </div>
      </div>
    </div>
  </section>
  )
}
