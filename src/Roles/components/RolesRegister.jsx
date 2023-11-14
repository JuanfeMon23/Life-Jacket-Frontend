import React, { useEffect, useState } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Select, SelectSection, SelectItem} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import { ButtonAccept } from '../../components/ButtonAccept';
import {useForm, Controller} from 'react-hook-form';
import { useRoles } from '../context/rolesContext';
import {Switch} from "@nextui-org/react";
import { useUsers } from '../../Users/Context/userContext';
import {AiOutlinePlusCircle} from 'react-icons/Ai';
import { AddLicenses } from './AddLicenses';

export  function RolesRegister() {
const {isOpen, onOpen, onOpenChange} = useDisclosure();
const {control , handleSubmit, formState:{errors}, reset} = useForm();
const {createRol, getRoles} = useRoles();
const {roles} = useRoles();
const {getUsers, users} = useUsers();
const [idRol, setIdRol] = useState();

const onSubmit = (data) => {
  if (onSubmit){
    createRol(data);
    reset();
    getRoles();
    setIdRol(roles.idRol)
  }
};

useEffect(() => {
  getUsers();
},[]);

  return (
    <div className='flex'>
      <Button endContent={<AiOutlinePlusCircle className=' text-2xl'/>} color="primary" variant="solid" onPress={onOpen} className=' text-white font-bold'>Agregar</Button>      
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">Datos del rol</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>

                <div className='flex-col m-3 lg:w-[400px]'>
                      <Controller
                          name="rolName"
                          control={control}
                          rules={{
                            required: "Campo requerido",
                            minLength: {
                              value: 3,
                              message: "Almenos 3 caracteres"
                            },
                            maxLength: {
                              value: 20,
                              message: "Maximo 20 caracteres"
                            },
                            pattern: {
                              value: /^[a-zA-Z\s]*$/,
                              message: "Solo letras"
                            }
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="text"
                              label="Nombre del rol"
                              variant="bordered"
                              color={errors.rolName ? "danger" : ""}
                              errorMessage={errors.rolName?.message}
                              className="max-w-xs"
                            />
                          )}
                        /> 
                      </div>

                    
                  <div className=' text-center my-3 '>
                      <ButtonAccept/>
                  </div>       
                </form>    
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
