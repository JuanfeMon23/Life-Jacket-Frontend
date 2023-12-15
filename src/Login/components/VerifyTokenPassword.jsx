import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext';
import {Input} from "@nextui-org/react";
import { toast } from "react-toastify";
import {useForm, Controller} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { verifyTokenPasswordRequest } from '../api/Auht';
import { Resetpassword } from './Resetpassword';


export  function VerifyTokenPassword() {
    const { setNewPassword} = useAuth();
    const { handleSubmit, formState:{errors}, control, reset} = useForm({
      defaultValues: {
        token : ''
      }
    });
    const navigate = useNavigate()
   
    const onSubmit = async (data) => {
      try {
        const res = await verifyTokenPasswordRequest(data);
        setNewPassword(res.data);
        reset();
        navigate('/ResetPassword')
        toast.success('Token valido' ,{
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500
        })
      } catch (error) {
        toast.error(error.response.data.message ,{
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500
        })
      }
    };

    
  return (
    <div className=' flex items-center mt-8'>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
         name="token"
         control={control}
         rules={{
          required: "Campo requerido",
         }}
         render={({ field }) => (
          <Input
            {...field}
            type="password"
            label="Codigo"
            variant="bordered"
            color={errors.token ? "danger" : ""}
            errorMessage={errors.token?.message}
            className="w-[12rem] sm:w-[17rem] mb-5"
          />
         )}
        />
        <button type='submit' title='Confirmar token' className=' mt-4 border-2 border-blue-800 text-blue-800 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-800 hover:text-white hover:border-blue-800 '>Enviar</button>

      </form>
  </div>
  )
}
