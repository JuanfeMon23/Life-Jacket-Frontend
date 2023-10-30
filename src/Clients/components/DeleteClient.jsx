import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {useForm} from 'react-hook-form';
import { useClients } from '../context/clientsContext';

export  function DeleteClient(props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {handleSubmit} = useForm();
    const {deleteClient} = useClients();
    const clients = props.client

    function onSubmit (){
        deleteClient(clients.idClient)
    };

    function handleDelete(){
        alert('no puedes eliminar un usuario con compras, ventas o cambios asociados.')
    };

  return (
    <div className=' flex'>
        {clients.sales <= 0 && clients.purchases <= 0 && clients.exchanges <= 0 ? <Button onPress={onOpen}></Button>
         : <Button  onClick={handleDelete}></Button>}
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className=" items-center">¿Deseas eliminar el cliente?</ModalHeader>
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
