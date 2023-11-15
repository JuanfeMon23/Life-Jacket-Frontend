import React, {useState} from 'react'
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useParams } from "react-router-dom";
import {useForm, Controller} from 'react-hook-form';
import {Input} from "@nextui-org/react";

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
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Nueva contraseña</h3>

            <Controller
                name="newUserPassword"
                control={control}
                render={({ field }) => (
                <Input
                    {...field}
                    type="password"
                    label="Contraseña"
                    variant="bordered"
                    color={errors.newUserPassword ? "danger" : ""}
                    errorMessage={errors.newUserPassword?.message}
                    className="max-w-xs"
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

                <Input type='submit'>Enviar</Input>
        </form>
    </div>
  )
}
