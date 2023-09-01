import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import { ButtonAccept } from '../../components/ButtonAccept';
import {useForm} from 'react-hook-form';
import { SelectVehicle } from './SelectVehicle';
import { SelectBrand } from './SelectBrand';

export function VehicleRegister () {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {register , handleSubmit, formState:{errors}} = useForm();
    const [scrollBehavior, setScrollBehavior] = React.useState("inside");
    
    const onSubmit = (data) => {
      
    };   

    return(
        <div className='flex'>
        <Button onPress={onOpen}className='absolute right-0 top-40 mx-6 my-20 bg-gradient-to-r from-cyan-500 to-blue-800 text-white font-bold'>Registrar</Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior={scrollBehavior}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-3">Datos del vehiculo</ModalHeader>
                  <ModalBody>
                    <SelectVehicle/>
                    <SelectBrand/>
                      
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>

          </div>
    )
}