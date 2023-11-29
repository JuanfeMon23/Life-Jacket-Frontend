import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {useForm} from 'react-hook-form';
import { useClients } from '../context/clientsContext';
import { toast } from "react-toastify";
import {AiOutlineDelete} from '../../../node_modules/react-icons/ai';

export  function DeleteClient(props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {handleSubmit} = useForm();
    const {deleteClient} = useClients();
    const clients = props.client

    function onSubmit (){
        deleteClient(clients.idClient)
    };


    const handleDelete = (event) => {
      event.preventDefault();
      toast.error('No puedes eliminar un cliente con compras, ventas o cambios asociados' ,{
        autoClose : 1500,
        position: toast.POSITION.TOP_CENTER
    });
    };

  return (
    <div className=' flex'>
        {clients.sales <= 0 && clients.purchases <= 0 && clients.exchanges <= 0 ? <Button title='Eliminar cliente' className=' bg-red-400 ' isIconOnly onPress={onOpen}><AiOutlineDelete className='text-white text-2xl '/></Button>
         : <Button title='Eliminar cliente' isIconOnly className=' mr-2'  onClick={handleDelete}><AiOutlineDelete className='text-white text-2xl'/></Button>}
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className=" justify-center text-2xl m-4">¿Deseas eliminar el cliente?</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=' text-center m-3'>
                        <Button className=' bg-emerald-600  w-20 h-18 p-3 rounded-lg text-white' type='submit'>Aceptar</Button>
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
