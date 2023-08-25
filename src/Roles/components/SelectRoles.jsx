import React from 'react';
import {Select, SelectSection, SelectItem} from "@nextui-org/react";
import { useRoles } from '../context/rolesContext';

export  function SelectRoles() {
    const {roles} = useRoles();
  return (
        <div className='max-w-xs'>
            <Select label='Seleccione un rol' variant='underlined'>
                {roles.map((roles) => (
                <SelectItem key={roles.id} value={roles.value}>
                    {roles.rolName}
                </SelectItem>
                ))}
            </Select>
        </div>
    
  )
}
