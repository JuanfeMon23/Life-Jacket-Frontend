import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {useForm} from 'react-hook-form';
import { useVehicles } from '../context/vehiclesContext';
import { toast } from "react-toastify";
import {AiOutlineDelete} from 'react-icons/Ai';

export  function DeleteVehicle(props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {handleSubmit} = useForm();
    const {deleteVehicle} = useVehicles();
    const vehicles = props.vehicle


    function onSubmit (){
        deleteVehicle(vehicles.idVehicle);
    };

    const handleDelete = (event) => {
        event.preventDefault();
        toast.error('No puedes eliminar un vehiculo con compras, ventas o cambios asociados.' ,{
          autoClose : 1500,
          position: toast.POSITION.TOP_CENTER
      });
      };

  return (
        <div className=' flex'>
        {vehicles.sale <= 0 && vehicles.purchase <= 0 && vehicles.exchanges <= 0 ? <Button className=' bg-red-400' isIconOnly onPress={onOpen}><AiOutlineDelete className='text-white text-2xl '/></Button>
         : <Button isIconOnly  onClick={handleDelete}><AiOutlineDelete className='text-white text-2xl'/></Button>}
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className=" justify-center text-2xl m-4">¿Deseas eliminar el Vehiculo?</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=' text-center m-3'>
                        <Button className=' bg-green-600  w-20 h-18 p-3 rounded-lg text-white' type='submit'>Aceptar</Button>
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
