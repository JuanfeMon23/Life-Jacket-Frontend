import React from 'react';
import {Select, SelectSection, SelectItem} from "@nextui-org/react";
import { useRoles } from '../context/rolesContext';
import { useForm } from 'react-hook-form';

export  function SelectRoles() {
    const {roles} = useRoles();
    const {register, formState:{errors}} = useForm();
  return (
        <div className='max-w-xs'>
            <Select label='Seleccione un rol' variant='underlined'>
                {roles.map((roles) => (
                <SelectItem key={roles.id} value={roles.idRol} {...register('idUserRol', {required : true})}>
                    {roles.rolName}
                </SelectItem>
                ))}
            </Select>
            {errors.idUserRol && <p className=' text-red-600'>Campo requerido</p>}
        </div>
    
  )
}
