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

                  <div className=" flex m-5 ml-12">
                      <div className="flex flex-col">
                        <p className="text-xs md:text-sm font-bold">Cédula</p>
                        <div className="md:border-2 md:border-indigo-500/75 rounded-lg p-1 w-[16rem] md:w-[20rem] md:w-[33rem]">
                            <p className=" text-center">{client.clientDocument}</p>
                        </div>
                      </div>
                    </div>

                    <div className={styles.firstContainer}>
                      <div className={styles.secondContainer}>
                        <p className={styles.firstP}>Nombres</p> 
                        <div className={styles.thirdContainer}>
                            <p className={styles.secondP}>{client.clientName}</p>
                        </div>
                      </div>
  
                      <div className={styles.secondContainer}>
                      <p className={styles.firstP}>Apellidos</p> 
                        <div className={styles.thirdContainer}>
                            <p className={styles.secondP}>{client.clientLastName}</p>
                        </div>
                      </div>
                    </div>   

                    <div className={styles.firstContainer}>
                      <div className={styles.secondContainer}>
                        <p className={styles.firstP}>Departamento</p> 
                        <div className={styles.thirdContainer}>
                            <p className={styles.secondP}>{client.clientDepartment}</p>
                        </div>
                      </div>
  
                      <div className={styles.secondContainer}>
                      <p className={styles.firstP}>Ciudad o municipio</p> 
                        <div className={styles.thirdContainer}>
                            <p className={styles.secondP}>{client.clientMunicipality}</p>
                        </div>
                      </div>
                    </div>                   

                      
                    <div className={styles.firstContainer}>
                      <div className={styles.secondContainer}>
                        <p className={styles.firstP}>Teléfono</p> 
                        <div className={styles.thirdContainer}>
                            <p className={styles.secondP}>{client.clientPhoneNumber}</p>
                        </div>
                      </div>
  
                      <div className={styles.secondContainer}>
                      <p className={styles.firstP}>Otro teléfono</p> 
                        <div className={styles.thirdContainer}>
                            <p className={styles.secondP}>{client.clientOtherPhoneNumber}</p>
                        </div>
                      </div>
                    </div>   
  
                    <div className={styles.firstContainer}>
                      <div className={styles.secondContainer}>
                        <p className={styles.firstP}>Dirección</p> 
                        <div className={styles.thirdContainer}>
                            <p className={styles.secondP}>{client.clientAddress}</p>
                        </div>
                      </div>
  
                      <div className={styles.secondContainer}>
                      <p className={styles.firstP}>Otro contacto</p> 
                        <div className={styles.thirdContainer}>
                            <p className={styles.secondP}>{client.clientOtherContact}</p>
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