import React, { useEffect } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {FiEye}from "react-icons/fi";
import {Accordion, AccordionItem} from "@nextui-org/react";

export function WatchVehicle (props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const vehicle = props.vehicle

    return (
        <>
        <Button  className=' h-[35px] w-[20px] bg-gradient-to-r from-[#2D78BE] to-[#6D2CC0]' onPress={onOpen}><FiEye className="text-white text-2xl"/></Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl" scrollBehavior={'inside'}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className=" bg-gradient-to-r from-[#252525] to-[#231949] text-white flex items-center ">Informacion del Vehículo</ModalHeader>
                  <ModalBody key={vehicle.id}>      
                  <Accordion variant="bordered" color="primary">
                        <AccordionItem key="1" aria-label="Datos fisicos" title="Datos fisicos">
                            
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Datos Mecanicos" title="Datos Mecanicos">
                            
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Datos legales" title="Datos legales">
                            
                        </AccordionItem>
                    </Accordion>
                  </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    )
}