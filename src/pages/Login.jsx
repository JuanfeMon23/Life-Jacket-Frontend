import React from 'react'
import {useForm} from "react-hook-form"
import { loginRequest } from '../api/autetification';

export  function Login() {
  const {register, handleSubmit, formState : {errors}} = useForm();

  const onSubmit = handleSubmit ((data) => {
    console.log(data)

  })

  return (
    <div className= "flex h-[calc(100vh-100px)] items-center justify-center">
      <h1 className="my-2">Login</h1>
      <form onSubmit={onSubmit}>
        <input 
        type="email" 
        placeholder="Email"
        {...register('Email' , {required : true})}
         />
         {errors.email && <p className='text-red-500'>El correo es requerido</p>}

        <input 
        type="password" 
        placeholder="Password" 
        {...register('Password' , {required : true})}
        />

        <button className='my-2 ' type="submit">Ingresar</button>
      </form>
    </div>
  )
}
