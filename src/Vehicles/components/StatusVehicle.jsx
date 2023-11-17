import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {useForm} from 'react-hook-form';
import {HiOutlineCheckCircle} from 'react-icons/hi';
import {TiDeleteOutline} from 'react-icons/ti'
import { useVehicles } from '../context/vehiclesContext';
import {toast} from 'react-toastify'

export  function StatusVehicle(props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {handleSubmit} = useForm();
    const {statusVehicle} = useVehicles();
    const vehicles = props.vehicle

    function onSubmit (){
        statusVehicle(vehicles.idVehicle)
    }

    function handleEdit(event){
      event.preventDefault();
      toast.error('No puedes interactuar con un vehiculo inhabilitado.' ,{
        autoClose : 1500,
        position: toast.POSITION.TOP_CENTER
    });
  }    

  return (
    <div className='flex'>
    {vehicles.vehicleStatus === "true" ? <Button title='Cambiar estado del vehículo'  isIconOnly className=' bg-yellow-950/70 rounded-lg mr-2' onPress={onOpen}><TiDeleteOutline className='text-2xl text-white'/></Button>
     : <Button title='Cambiar estado del vehículo' className=' bg-emerald-600 mr-2' isIconOnly onClick={handleEdit} ><HiOutlineCheckCircle className='text-white text-2xl'/></Button>}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className=" justify-center text-2xl m-4 ">¿Deseas anular el vehículo?</ModalHeader>
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
