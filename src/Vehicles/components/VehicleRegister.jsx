import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, Button} from "@nextui-org/react";
import { VehicleInfo } from './VehicleInfo';
import { VehicleDetail } from './VehicleDetail';
import { useVehicles } from '../context/vehiclesContext';
import {AiOutlinePlusCircle} from 'react-icons/Ai';

export  function VehicleRegister(props) {
    const [scrollBehavior, setScrollBehavior] = React.useState("inside");
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {vehicles} = useVehicles();
    const vehicle = props.vehicle



  return (
    <div className='flex'>
      <Button endContent={<AiOutlinePlusCircle className=' text-2xl'/>} color="primary" variant="solid" onPress={onOpen} className=' text-white font-bold'>Agregar</Button>    
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior={scrollBehavior} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">Datos del vehículo</ModalHeader>
              <ModalBody>
                <VehicleInfo/>      
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
