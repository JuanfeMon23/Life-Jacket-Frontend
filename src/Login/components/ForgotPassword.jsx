import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext';
import {Input} from "@nextui-org/react";
import {useForm, Controller} from 'react-hook-form';
import { Button } from '@nextui-org/react';

export  function ForgotPassword() {
    const [chargin, setCharging] = useState(false);
    const {passwordRecovery} = useAuth();
    const { handleSubmit, formState:{errors}, control, reset} = useForm();

    const onSubmit = async (data) => {
      passwordRecovery(data);        
    }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Recuperar contraseña</h1>
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

              <div>
                {chargin ?
                <div>
                  Cargando...
                </div>  :
                <Button type='submit'>Enviar</Button>
              }
              </div>

      </form>
    </div>
  )
}
