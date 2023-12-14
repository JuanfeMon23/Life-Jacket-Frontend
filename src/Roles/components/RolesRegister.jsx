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
import {AiOutlinePlusCircle} from '../../../node_modules/react-icons/ai';
import { AddLicenses } from './AddLicenses';
import { RequiredIcon } from '../../components/globalComponents/RequiredIcon.jsx';
import { createRolRequest } from '../api/Roles.js';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

export  function RolesRegister() {
const {isOpen, onOpen, onOpenChange} = useDisclosure();
const {control , handleSubmit, formState:{errors}, reset} = useForm({
  defaultValues: {
    rolName: ''
  }
});

const {getRoles} = useRoles();
const {getUsers} = useUsers();
const navigate = useNavigate()

const onSubmit = async  (data) => {
    try {
        const res = await createRolRequest(data);
        toast.success('Rol registrado con éxito!',{
            position: toast.POSITION.TOP_CENTER,
            autoClose : 1500
        }); 
        getRoles();
        reset()
        return res.data;
    } catch (error) {
        toast.error(error.response.data.message ,{
            position: toast.POSITION.TOP_CENTER,
            autoClose : 1500
        });
        throw new Error(error.message);
    }

};




return (
  <div className='flex'>
    <Button title='Agregar rol' endContent={<AiOutlinePlusCircle className=' text-2xl'/>} color="primary" variant="solid" onPress={onOpen} className=' text-white font-bold'>Agregar</Button>      
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-3">Datos del rol</ModalHeader>
            <ModalBody className='flex justify-center items-center'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-center items-center lg:w-[400px]'>
                  <Controller
                    name="rolName"
                    control={control}
                    rules={{
                      required: "Campo requerido",
                      minLength: {
                        value: 3,
                        message: "Al menos 3 caracteres"
                      },
                      maxLength: {
                        value: 20,
                        message: "Máximo 20 caracteres"
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
                        endContent={<RequiredIcon/>}
                        color={errors.rolName ? "danger" : ""}
                        errorMessage={errors.rolName?.message}
                        className="max-w-xs"
                      />
                    )}
                  />
                </div>
                <div className='text-center my-3'>
                  <ButtonAccept/>
                </div>       
              </form>    
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  </div>
);

}
