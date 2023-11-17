import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {useForm} from 'react-hook-form';
import {TiDeleteOutline} from 'react-icons/ti'
import { useClients } from '../context/clientsContext';
import {HiOutlineCheckCircle} from 'react-icons/hi';

export  function StatusClient(props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {handleSubmit} = useForm();
    const {statusClient} = useClients();
    const clients = props.client

    function onSubmit (){
        statusClient(clients.idClient)
    }

  return (
<div className='flex'>
    {clients.clientStatus === "true" ? <Button title='Cambiar estado del cliente' className=' bg-yellow-950/70 rounded-lg mr-2' isIconOnly onPress={onOpen}><TiDeleteOutline className=' text-white text-2xl'/></Button> 
    : <Button title='Cambiar estado del cliente' className=' mr-2 bg-emerald-600' isIconOnly onPress={onOpen}><HiOutlineCheckCircle className='text-white text-2xl'/></Button>}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className=" justify-center text-2xl m-4">¿Deseas {clients.clientStatus === 'false' ? 'habilitar' : 'inhabilitar'} el  cliente?</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=' text-center m-3'>
                        <button className=' bg-emerald-600 hover:bg-emerald-900  w-20 h-18 p-3 rounded-lg text-white' type='submit'>Aceptar</button>
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
