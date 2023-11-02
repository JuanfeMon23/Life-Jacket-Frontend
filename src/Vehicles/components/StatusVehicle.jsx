import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {useForm} from 'react-hook-form';
import {GrStatusGood} from 'react-icons/gr'
import {TiDeleteOutline} from 'react-icons/ti'
import { useVehicles } from '../context/vehiclesContext';
import { toast } from 'react-toastify';

export  function StatusVehicle(props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {handleSubmit} = useForm();
    const {statusVehicle} = useVehicles();
    const vehicles = props.vehicle

    function onSubmit (){
        statusVehicle(vehicles.idVehicle)
    }

    function handleState (){
      toast.error('Vehiculo anulado.',{
        
      })
    };    

  return (
    <div className='flex'>
    {vehicles.vehicleStatus === true ? <Button  isIconOnly className=' bg-green-600 rounded-lg' onPress={onOpen}><GrStatusGood className='text-2xl'/></Button>
     : <Button isIconOnly  onPress={onOpen}><TiDeleteOutline className='text-white text-2xl'/></Button>}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className=" justify-center ">¿Deseas anular el vehículo?</ModalHeader>
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
