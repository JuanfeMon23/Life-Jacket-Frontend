import React, { useEffect } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, User} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Select, SelectSection, SelectItem} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import { ButtonAccept } from '../../components/ButtonAccept';
import {useForm} from 'react-hook-form';
import { useRoles } from '../context/rolesContext';
import {Switch} from "@nextui-org/react";
import { useUsers } from '../../Users/Context/userContext';

export  function RolesRegister() {
const {isOpen, onOpen, onOpenChange} = useDisclosure();
const {register , handleSubmit, formState:{errors}, reset} = useForm();
const {createRol} = useRoles();
const {getUsers, users} = useUsers();

const onSubmit = (data) => {
  createRol(data);
  reset();
  useEffect(() => {
    getUsers();
    users();
  },[])
};

  return (
    <div className='flex'>
    <Button onPress={onOpen}className='bg-gradient-to-r from-cyan-500 to-blue-800 text-white font-bold'>Registrar rol</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">Datos del rol</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
             
                <Input type="text" label="Nombre del rol" isClearable variant='underlined' id="rolName"
                {...register("rolName", {required : true})}/>
                {errors.rol && <p className=' text-red-600'>Campo requerido</p>}
                <div className=' my-2 flex-row'>
                  <Switch defaultSelected color="success">Usuarios</Switch>
                  <Switch defaultSelected color="success">Vehiculos</Switch>
                  <Switch defaultSelected color="success">Compras</Switch>
                </div>
                <div className=' my-2 flex-row'>       
                  <Switch defaultSelected color="success">Ventas</Switch>
                  <Switch defaultSelected color="success">Clientes</Switch>
                  <Switch defaultSelected color="success">Mejoras</Switch>
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
