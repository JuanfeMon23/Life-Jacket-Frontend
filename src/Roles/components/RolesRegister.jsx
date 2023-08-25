import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Select, SelectSection, SelectItem} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import { ButtonAccept } from '../../components/ButtonAccept';
import {useForm} from 'react-hook-form';
import { useRoles } from '../context/rolesContext';

export  function RolesRegister() {
const {isOpen, onOpen, onOpenChange} = useDisclosure();
const {register , handleSubmit, formState:{errors}} = useForm();
const {createRol} = useRoles();

const onSubmit = (data) => {
  createRol(data);
};

  return (
    <div className='flex'>
    <Button onPress={onOpen}className='absolute right-0 mx-6 my-20 bg-gradient-to-r from-cyan-500 to-blue-800 text-white font-bold'>Registrar rol</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">Datos del rol</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
               
                <Input type="text" label="Nombre del rol" variant='underlined' id="rolName"
                {...register("rolName", {required : true})}/>
                {errors.rol && <p className=' text-red-600'>Campo requerido</p>}
                  
                <div className=' text-center my-3 '>
                    <ButtonAccept/>
                    {/* <Button color='primary' type='submit' onPress={onClose}>
                        Registrar
                    </Button> */}
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
