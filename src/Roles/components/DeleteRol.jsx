import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {useForm} from 'react-hook-form';
import { toast } from "react-toastify";
import {AiOutlineDelete} from '../../../node_modules/react-icons/ai';
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
        toast.error('No puedes eliminar un rol activo' ,{
          autoClose : 1500,
          position: toast.POSITION.TOP_CENTER
      });
      };


  return (
    <div className=' flex'>
      {Roles.rolStatus === "false" ? <Button isIconOnly title='Eliminar rol' className=' bg-red-400'  onPress={onOpen}><AiOutlineDelete className={`text-2xl text-white`}/></Button> 
      : <Button isIconOnly title='Eliminar rol'   onClick={handleDelete}><AiOutlineDelete className={`text-2xl text-white`}/></Button>   }
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} >
            <ModalContent>
            {(onClose) => (
                <> 
                <ModalHeader className=" justify-center text-2xl m-4  ">¿Deseas eliminar el rol?</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className=' text-center m-3'>
                            <button className=' bg-emerald-600  w-20 h-18 p-3 rounded-lg text-white' type='submit'>Aceptar</button>
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
