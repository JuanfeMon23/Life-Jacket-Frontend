import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {useForm} from 'react-hook-form';
import { toast } from "react-toastify";
import {AiOutlineDelete} from 'react-icons/Ai';
import { useRoles } from '../context/rolesContext';

export  function DeleteRol(props) {
    const {deleteRol, roles} = useRoles();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {handleSubmit} = useForm();
    const Roles = props.roles;

    function onSubmit (){
        deleteRol(Roles.idRol)
      };


    const handleDelete = (event) => {
        event.preventDefault();
        toast.error('No puedes eliminar un rol con usuarios asociados' ,{
          autoClose : 1500,
          position: toast.POSITION.TOP_CENTER
      });
      };

      console.log(roles)

  return (
    <div className=' flex'>
     <Button isIconOnly title='Eliminar rol' className=' bg-red-400' onPress={onOpen}><AiOutlineDelete className={`text-2xl text-white`}/></Button> 
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
            <ModalContent>
            {(onClose) => (
                <> 
                <ModalHeader className=" justify-center text-2xl m-4  ">¿Deseas Eliminar el Rol?</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className=' text-center m-3'>
                            <button className=' bg-green-600  w-20 h-18 p-3 rounded-lg text-white' type='submit'>Aceptar</button>
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
