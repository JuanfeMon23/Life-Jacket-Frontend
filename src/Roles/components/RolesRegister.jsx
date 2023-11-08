import React, { useEffect } from 'react'
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

export  function RolesRegister() {
const {isOpen, onOpen, onOpenChange} = useDisclosure();
const {control , handleSubmit, formState:{errors}, reset} = useForm();
const {createRol} = useRoles();
const {getUsers, users} = useUsers();

const onSubmit = (data) => {
  {onSubmit ? createRol(data) && reset() : ''}
  useEffect(() => {
    getUsers();
    users();
  },[])
};

  return (
    <div className='flex'>
      <Button endContent={<AiOutlinePlusCircle className=' text-2xl'/>} color="primary" variant="solid" onPress={onOpen} className=' text-white font-bold'>Agregar</Button>      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
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

                
                <ModalHeader className="flex ">Asignacion de permisos</ModalHeader>
                  <div className=' my-2 flex justify-between'>
                    <Switch defaultSelected color="success">Usuarios</Switch>
                    <Switch defaultSelected color="success">Vehiculos</Switch>
                    <Switch defaultSelected color="success">Compras</Switch>
                  </div>
                  <div className=' my-2 flex justify-between'>       
                    <Switch defaultSelected color="success">Ventas</Switch>
                    <Switch defaultSelected color="success">Clientes</Switch>
                    <Switch defaultSelected color="success">Mejoras</Switch>
                  </div>
                  <div>
                    <Switch defaultSelected color="success">Cambios</Switch>
                  </div>

                  <div className=' text-center my-3 '>
                      <ButtonAccept/>
                  </div> 
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
