import React from 'react'
import { vehicle } from '../../../vehicles.js'
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";
import { Select, SelectItem, Button } from '@nextui-org/react';
import { ButtonAccept } from '../../components/ButtonAccept';
import { useForm  } from 'react-hook-form';
import { useVehicles } from '../context/vehiclesContext.jsx';

export  function VehicleRegister() {
    const [scrollBehavior, setScrollBehavior] = React.useState("inside");
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {register , handleSubmit, setValue,  formState:{errors}} = useForm();
    const {createVehicle, updateVehicle, getVehicle} = useVehicles();


    const onSubmit = (data) => {
        try {
            if(params.idVehicle) {
                updateVehicle(params.idVehicle, {...data});
            } else {
                createVehicle({...data});
             }
          } catch (error) {
            throw new Error;
          }
    };



  return (
    <div className='flex'>
    <Button onPress={onOpen}className='absolute right-0 top-5 mx-6 my-20 bg-gradient-to-r from-cyan-500 to-blue-800 text-white font-bold'>Registrar</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior={scrollBehavior}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">Datos del Vehiculo</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Select label='Tipo de vehiculo' variant='underlined'>
                        {vehicle.vehicleType.map((vehicleType, index) => {
                            console.log(vehicleType);
                            <SelectItem key={index} value={vehicleType.type}>
                                {vehicleType.type}
                            </SelectItem>
                        })}
                    </Select>

                  <div className=" flex">
                    
                  </div>
                  <div className=' text-center my-3 '>
                    <ButtonAccept/>
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
