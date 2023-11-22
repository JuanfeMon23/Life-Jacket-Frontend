import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {FiEye}from "react-icons/fi";
import { toast } from "react-toastify";
import { styles } from "../../components/styles.js";

export function WatchClient (props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const client = props.client

    const handleEvent = (event) => {
      event.preventDefault();
      toast.error('No puedes ver un cliente inhabilitado' ,{
        autoClose : 1500,
        position: toast.POSITION.TOP_CENTER
    });
    };

    return (
        <>
          {client.clientStatus === "true" ? <Button title='Ver cliente' isIconOnly onPress={onOpen}className='bg-gradient-to-r from-[#2D78BE] to-[#6D2CC0] mr-2'>{<FiEye className='text-white text-2xl'/>}</Button>
            :  <Button title='Ver cliente' isIconOnly className=" mr-2" onClick={handleEvent} >{<FiEye className='text-white text-2xl'/>}</Button>} 
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className=" flex items-center ">Información del cliente</ModalHeader>
                  <ModalBody key={client.id}>
                    
                    <div className={styles.firstContainer}>
                      <div className={styles.secondContainer}>
                        <p className={styles.firstP}>Nombres</p> 
                        <div className={styles.thirdContainer}>
                            <p className={styles.secondP}>{client.clientName}</p>
                        </div>
                      </div>
  
                      <div className=" flex flex-col">
                      <p className="text-xs md:text-sm font-bold">Apellidos</p> 
                        <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[7rem] md:w-[15rem] p-1">
                            <p className=" text-center">{client.clientLastName}</p>
                        </div>
                      </div>
                    </div>                  
  
  
                  <div className=" flex justify-center m-5 ">
                    <div className="flex flex-col">
                      <p className="text-xs md:text-sm font-bold">Cédula</p>
                      <div className="border-2 border-indigo-500/75 rounded-lg p-1 w-[7rem] md:w-[15rem]">
                          <p className=" text-center">{client.clientDocument}</p>
                      </div>
                    </div>
                  </div>

                  <div className=" m-5 flex justify-around ">
                    <div className=" flex flex-col">
                      <p className="text-xs md:text-sm font-bold">Departamento</p>
                      <div className="border-2 border-indigo-500/75 rounded-lg p-1 w-[7rem] md:w-[15rem]">
                          <p className=" text-center">{client.clientDepartment}</p>
                      </div>
                    </div>

                    <div className=" flex flex-col">
                      <p className="text-xs md:text-sm font-bold">Ciudad o municipio</p>
                      <div className="border-2 border-indigo-500/75 rounded-lg p-1 w-[7rem] md:w-[15rem]">
                          <p className=" text-center">{client.clientMunicipality}</p>
                      </div>
                    </div>
                  </div>
                      
                  <div className="m-5 flex justify-around">
                      <div className=" flex flex-col">
                        <p className="text-xs md:text-sm font-bold">Teléfono</p> 
                        <div className=" border-2 border-indigo-500/75 rounded-lg w-[7rem] md:w-[15rem] p-1 ">
                            <p className=" text-center">{client.clientPhoneNumber}</p>
                        </div>
                      </div>
  
                      <div className=" flex flex-col">
                      <p className="text-xs md:text-sm font-bold">Otro teléfono</p> 
                        <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[7rem] md:w-[15rem] p-1">
                            <p className=" text-center">{client.clientOtherPhoneNumber}</p>
                        </div>
                      </div>
                    </div>  
  
                    <div className="m-5 flex justify-around">
                      <div className=" flex flex-col">
                        <p className="text-xs md:text-sm font-bold">Dirección</p> 
                        <div className=" border-2 border-indigo-500/75 rounded-lg w-[7rem] md:w-[15rem] p-1 ">
                            <p className=" text-center">{client.clientAddress}</p>
                        </div>
                      </div>
  
                      <div className=" flex flex-col">
                      <p className="text-xs md:text-sm font-bold">Otro contacto</p> 
                        <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[7rem] md:w-[15rem] p-1">
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