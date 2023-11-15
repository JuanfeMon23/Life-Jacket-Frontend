import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {useForm} from 'react-hook-form';
import {GrStatusGood} from 'react-icons/gr'
import {TiDeleteOutline} from 'react-icons/ti';
import { toast } from "react-toastify";
import { useUsers } from '../Context/userContext';
import {AiOutlineDelete} from 'react-icons/Ai';

export  function DeleteUsers(props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {handleSubmit} = useForm();
    const {deleteUser} = useUsers();
    const user = props.user

    function onSubmit (){
      deleteUser(user.idUser)
    };

    const handleDelete = (event) => {
      event.preventDefault();
      toast.error('No puedes eliminar un usuario activo' ,{
        autoClose : 1500,
        position: toast.POSITION.TOP_CENTER
    });
    };

  return (
    <div className='flex'>
    {user.userStatus === "false" ? <Button isIconOnly className=' bg-red-400' onPress={onOpen}><AiOutlineDelete className={`text-2xl text-white`}/></Button> 
    : <Button isIconOnly onClick={handleDelete} ><AiOutlineDelete className='text-white text-2xl'/></Button>}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
<<<<<<< HEAD
              <ModalHeader className=" justify-center text-2xl m-4  ">¿Deseas Eliminar el usuario?</ModalHeader>
=======
              <ModalHeader className=" justify-center ">¿Deseas eliminar el usuario?</ModalHeader>
>>>>>>> 80481b5818829d451844ca1c1add9a33f7d708eb
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
