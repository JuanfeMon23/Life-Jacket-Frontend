import React, { useEffect } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {FiEye}from "react-icons/fi";

export function WatchClient (props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const client = props.client

    return (
        <>
        <Button  className=' bg-gradient-to-r from-[#2D78BE] to-[#6D2CC0]' onPress={onOpen}><FiEye className="text-white text-2xl"/></Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className=" bg-gradient-to-r from-[#252525] to-[#231949] text-white flex items-center ">Informacion del cliente</ModalHeader>
                  <ModalBody key={client.id}>
                    
                    <div className="m-5 flex justify-around">
                      <div className=" flex flex-col">
                        <p className="font-bold">Nombres</p> 
                        <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                            <p className=" text-center">{client.clientName}</p>
                        </div>
                      </div>
  
                      <div className=" flex flex-col">
                      <p className="font-bold">Apellidos</p> 
                        <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                            <p className=" text-center">{client.clientLastName}</p>
                        </div>
                      </div>
                    </div>                  
  
  
                  <div className=" flex justify-center m-5 ">
                    <div className="flex flex-col">
                      <p className="font-bold">Cedula</p>
                      <div className="border-2 border-indigo-500/75 rounded-lg p-1 w-[15rem]">
                          <p className=" text-center">{client.clientDocument}</p>
                      </div>
                    </div>
                  </div>

                  <div className=" m-5 flex justify-around ">
                    <div className=" flex flex-col">
                      <p className="font-bold">Departamento</p>
                      <div className="border-2 border-indigo-500/75 rounded-lg p-1 w-[15rem]">
                          <p className=" text-center">{client.clientDepartment}</p>
                      </div>
                    </div>

                    <div className=" flex flex-col">
                      <p className="font-bold">Ciudad o municipio</p>
                      <div className="border-2 border-indigo-500/75 rounded-lg p-1 w-[15rem]">
                          <p className=" text-center">{client.clientMunicipality}</p>
                      </div>
                    </div>
                  </div>
                      
                  <div className="m-5 flex justify-around">
                      <div className=" flex flex-col">
                        <p className="font-bold">Telefono</p> 
                        <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                            <p className=" text-center">{client.clientPhoneNumber}</p>
                        </div>
                      </div>
  
                      <div className=" flex flex-col">
                      <p className="font-bold">Otro Telefono</p> 
                        <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                            <p className=" text-center">{client.clientOtherPhoneNumber}</p>
                        </div>
                      </div>
                    </div>  
  
                    <div className="m-5 flex justify-around">
                      <div className=" flex flex-col">
                        <p className="font-bold">Dirección</p> 
                        <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                            <p className=" text-center">{client.clientAddress}</p>
                        </div>
                      </div>
  
                      <div className=" flex flex-col">
                      <p className="font-bold">Otro contacto</p> 
                        <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                            <p className=" text-center">{client.clientOtherContact}</p>
                        </div>
                      </div>
                    </div>  
                  </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    )
}