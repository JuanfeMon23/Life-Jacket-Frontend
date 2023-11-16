import React, {useState} from 'react'
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useParams } from "react-router-dom";
import {useForm, Controller} from 'react-hook-form';
import {Input} from "@nextui-org/react";
import { MdOutlineMail } from "react-icons/md";

export  function Resetpassword() {
    const params = useParams();

    const {resetPassword} = useAuth();
    const navigate = useNavigate();
    
    const onSubmit  = async (data) => {
        resetPassword(params.idUser, data);     
        console.log(data);   
    };
    
    const validationSchema = Yup.object().shape({
        newUserPassword: Yup.string()
        .required('Contraseña requerida'),
        confirmPassword: Yup.string()
        .required('Confirmación de contraseña requerida')
        .oneOf([Yup.ref('newUserPassword')], 'Las contraseñas no coinciden'),
    });
    
    const formOptions = { resolver: yupResolver(validationSchema) };
    const { handleSubmit, formState:{errors}, control, reset} = useForm(formOptions);

  return (
    <section className=" flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
    <div className=' bg-white rounded-2xl shadow-2xl flex w-[100%] max-w-4xl'>
      <div className=' w-[100%] p-5'>
        <div className=' text-left font-bold'>
          <span className=' text-blue-800'>Alejandro</span>Vehículos
        </div>
        <div className=' py-10'>
            <h2 className=' text-3xl font-bold text-blue-800'>Nueva Contraseña</h2>
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
                    className=" w-[17rem] mb-5"
                />
                )}
                />
                <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                <Input
                    {...field}
                    type="password"
                    label="Confirmar Contraseña"
                    variant="bordered"
                    color={errors.confirmPassword ? "danger" : ""}
                    errorMessage={errors.confirmPassword?.message}
                    className="max-w-xs"
                />
                )}
                />
                    <button type='submit' className=' mt-4 border-2 border-blue-800 text-blue-800 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-800 hover:text-white hover:border-blue-800 '>Enviar</button>
              </form>
            </div>
        </div>
      </div>
    </div>
  </section>
  )
}
