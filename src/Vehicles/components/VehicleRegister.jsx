import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, Button} from "@nextui-org/react";
import { VehicleInfo } from './VehicleInfo';
import { VehicleDetail } from './VehicleDetail';
import { useVehicles } from '../context/vehiclesContext';

export  function VehicleRegister(props) {
    const [scrollBehavior, setScrollBehavior] = React.useState("inside");
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {vehicles} = useVehicles();
    const vehicle = props.vehicle



  return (
    <div className='flex'>
    <Button onPress={onOpen}className='absolute right-0 top-11 mx-6 my-20 bg-gradient-to-r from-cyan-500 to-blue-800 text-white font-bold'>Registrar</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior={scrollBehavior}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">Datos del Vehiculo</ModalHeader>
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
