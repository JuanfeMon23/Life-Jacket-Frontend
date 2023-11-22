import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, Accordion, AccordionItem, Button, useDisclosure} from "@nextui-org/react";
import {FiEye}from "react-icons/fi";
import { toast } from "react-toastify";
import { styles } from '../../components/styles';


export  function WatchExchange(props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const exchange = props.exchange;

    const handleEvent = (event) => {
        event.preventDefault();
        toast.error('No puedes ver un intercambio anulado' ,{
          autoClose : 1500,
          position: toast.POSITION.TOP_CENTER
      });
      };

  return (
    <div>
      <Button title="Ver intercambio" isIconOnly className='bg-gradient-to-r from-[#2D78BE] to-[#6D2CC0] mr-2' onPress={onOpen}><FiEye className="text-white text-2xl"/></Button>
      <Modal isOpen={isOpen} className=" mr-2" onOpenChange={onOpenChange} size="2xl" isDismissable={false}>
        <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader>Información del intercambio</ModalHeader>
                <ModalBody>
                    <Accordion variant='bordered' color="primary" >
                        <AccordionItem key='1' aria-aria-label='exchangeDates' title='Datos del intercambio'>
                        <div className={styles.firstContainer}>
                            <div className={styles.secondContainer}>
                                <p className={styles.firstP}>Fecha </p> 
                                <div className={styles.thirdContainer}>
                                    <p className={styles.secondP}>{`${
                                        new Date(exchange.exchangeDate).toLocaleString("es-ES", {
                                            year: "numeric",
                                            month: "2-digit",
                                            day: "2-digit",
                                            hour: "2-digit",
                                            minute: "2-digit"
                                        })
                                    }`}</p>
                                </div>
                            </div>

                            <div className={styles.secondContainer}>
                                <p className={styles.firstP}>Limitaciones</p> 
                                <div className={styles.thirdContainer}>
                                    <p className={styles.secondP}>{`${exchange.exchangeLimitations}`}</p>
                                </div>
                            </div>
                        </div> 

                        <div className={styles.firstContainer}>
                            <div className={styles.secondContainer}>
                                <p className={styles.firstP}>Dinero</p> 
                                <div className={styles.thirdContainer}>
                                    <p className={styles.secondP}>{`${
                                        typeof exchange.exchangeCashPrice === "number" ? exchange.exchangeCashPrice.toLocaleString("es-ES", { style: "currency", currency: "COP" }) : "No válido"
                                    }`}</p>
                                </div>
                            </div>

                            <div className={styles.secondContainer}>
                                <p className={styles.firstP}>Tipo de intercambio</p> 
                                <div className={styles.thirdContainer}>
                                    <p className={styles.secondP}>{`${exchange.exchangeCashPriceStatus === "true" ? 'Entrante' : 'No aplica' || exchange.exchangeCashPriceStatus === "false" ?  'Saliente' : 'No aplica'}`}</p>
                                </div>
                            </div>
                        </div>  

                        <div className={styles.firstContainer}>
                            <div className={styles.secondContainer}>
                                <p className={styles.firstP}>Departamento </p> 
                                <div className={styles.thirdContainer}>
                                    <p className={styles.secondP}>{`${exchange.exchangeDepartment}`}</p>
                                </div>
                            </div>

                            <div className={styles.secondContainer}>
                                <p className={styles.firstP}>Municipio</p> 
                                <div className={styles.thirdContainer}>
                                    <p className={styles.secondP}>{`${exchange.exchangeMunicipality}`}</p>
                                </div>
                            </div>
                        </div> 

                        </AccordionItem>
                        <AccordionItem key='2' aria-aria-label='exchangeClientDates' title='Datos del cliente'>
                        <div className={styles.firstContainer}>
                            <div className={styles.secondContainer}>
                                <p className={styles.firstP}>Documento </p> 
                                <div className={styles.thirdContainer}>
                                    <p className={styles.secondP}>{`${exchange.client.clientTypeDocument}`}</p>
                                </div>
                            </div>

                            <div className={styles.secondContainer}>
                                <p className={styles.firstP}>Numero</p> 
                                <div className={styles.thirdContainer}>
                                    <p className={styles.secondP}>{`${exchange.client.clientDocument}`}</p>
                                </div>
                            </div>
                        </div> 

                        <div className={styles.firstContainer}>
                            <div className={styles.secondContainer}>
                                <p className={styles.firstP}>Nombres </p> 
                                <div className={styles.thirdContainer}>
                                    <p className={styles.secondP}>{`${exchange.client.clientName}`}</p>
                                </div>
                            </div>

                            <div className={styles.secondContainer}>
                                <p className={styles.firstP}>Apellidos</p> 
                                <div className={styles.thirdContainer}>
                                    <p className={styles.secondP}>{`${exchange.client.clientLastName}`}</p>
                                </div>
                            </div>
                        </div> 

                        
                        <div className={styles.firstContainer}>
                            <div className={styles.secondContainer}>
                                <p className={styles.firstP}>Numero </p> 
                                <div className={styles.thirdContainer}>
                                    <p className={styles.secondP}>{`${exchange.client.clientPhoneNumber}`}</p>
                                </div>
                            </div>

                            <div className={styles.secondContainer}>
                                <p className={styles.firstP}>Dirección</p> 
                                <div className={styles.thirdContainer}>
                                    <p className={styles.secondP}>{`${exchange.client.clientAddress}`}</p>
                                </div>
                            </div>
                        </div> 

                        
                        </AccordionItem>
                        <AccordionItem key='3' aria-aria-label='exchangeVehiclesDates' title='Datos de los vehiculos'>
                            {exchange.vehiclesExchange.map((exchange, i) => (
                                <div className=' border-2 mb-5 rounded-lg' key={i}>
                                    <div className={styles.firstContainer}>
                                        <div className={styles.secondContainer}>
                                            <p className={styles.firstP}>Placa </p> 
                                            <div className={styles.thirdContainer}>
                                                <p className={styles.secondP}>{`${exchange.licensePlate}`}</p>
                                            </div>
                                        </div>

                                        <div className={styles.secondContainer}>
                                            <p className={styles.firstP}>Tipo</p> 
                                            <div className={styles.thirdContainer}>
                                                <p className={styles.secondP}>{`${exchange.vehicleType}`}</p>
                                            </div>
                                        </div>
                                    </div> 

                                    <div className={styles.firstContainer}>
                                        <div className={styles.secondContainer}>
                                            <p className={styles.firstP}>Marca </p> 
                                            <div className={styles.thirdContainer}>
                                                <p className={styles.secondP}>{`${exchange.brand}`}</p>
                                            </div>
                                        </div>

                                        <div className={styles.secondContainer}>
                                            <p className={styles.firstP}>Linea</p> 
                                            <div className={styles.thirdContainer}>
                                                <p className={styles.secondP}>{`${exchange.line}`}</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            ))}
                        </AccordionItem>
                    </Accordion>
                </ModalBody>
                </>
            )}
        </ModalContent>
      </Modal>
    </div>
  )
}
