import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {useForm} from 'react-hook-form';
import {TiDeleteOutline} from 'react-icons/ti'
import { useUsers } from '../Context/userContext';
import {HiOutlineCheckCircle} from 'react-icons/hi';

export  function StatusUser(props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {handleSubmit} = useForm();
    const {statusUser} = useUsers();
    const user = props.user

    function onSubmit (){
        statusUser(user.idUser)
    }

  return (
<div className='flex'>
    {user.userStatus === true ? <Button isIconOnly className='  bg-emerald-600 rounded-lg' onPress={onOpen}>< TiDeleteOutline className={`text-2xl text-white`}/></Button> 
    : <Button isIconOnly onPress={onOpen}>< HiOutlineCheckCircle className='text-white text-2xl'/></Button>}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className=" justify-center text-2xl m-4">¿Deseas {user.userStatus ? 'inhabilitar' : 'Habilitar'} el  usuario?</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=' text-center m-3'>
                        <Button className=' bg-emerald-600 hover:bg-emerald-900  w-20 h-18 p-3 rounded-lg text-white' type='submit'>Aceptar</Button>
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
