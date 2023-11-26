import React, { useEffect } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {FiEye}from "react-icons/fi";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { styles } from "../../components/styles";


export function WatchPurchase(props) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const purchase = props.purchase
 
  return (
    <>
      <Button isIconOnly title='Ver compra' className='bg-gradient-to-r from-[#2D78BE] to-[#6D2CC0] mr-2' onPress={onOpen}><FiEye className="text-white text-2xl"/></Button>
      <Modal isOpen={isOpen} className=" mr-2" onOpenChange={onOpenChange} size="2xl" isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="  text-[#252525] flex items-center ">Información de la compra</ModalHeader>
                <ModalBody key={purchase.idPurchase}>
                  
                <Accordion variant="bordered" color="primary">
                  <AccordionItem key='1' aria-label="datos" title="Datos de la compra">
                    <div className={styles.firstContainer}>
                      <div className={styles.secondContainer}>
                        <p className={styles.firstP}>Precio de la compra</p> 
                        <div className={styles.thirdContainer}>
                            <p className={styles.secondP}>  {typeof purchase.purchaseFinalPrice === "number" ? purchase.purchaseFinalPrice.toLocaleString("es-ES") : "No válido"}</p>
                        </div>
                      </div>

                      <div className={styles.secondContainer}>
                      <p className={styles.firstP}>Limitaciones</p> 
                        <div className={styles.thirdContainer}>
                            <p className={styles.secondP}>{purchase.purchaseLimitations}</p>
                        </div>
                      </div>
                    </div>  
                    
                    <div className={styles.firstContainer}>
                      <div className={styles.secondContainer}>
                        <p className={styles.firstP}>Departamento de la compra</p> 
                        <div className={styles.thirdContainer}>
                            <p className={styles.secondP}>{purchase.purchaseDepartment}</p>
                        </div>
                      </div>

                      <div className={styles.secondContainer}>
                      <p className={styles.firstP}>Cíudad o municipio</p> 
                        <div className={styles.thirdContainer}>
                            <p className={styles.secondP}>{purchase.purchaseMunicipality}</p>
                        </div>
                      </div>
                    </div> 

                    <div className={styles.firstContainer}>
                    <div className={styles.secondContainer}>
                      <p className={styles.firstP}>Fecha</p> 
                      <div className={styles.thirdContainer}>
                          <p className={styles.secondP}>{new Date(purchase.purchaseDate).toLocaleString("es-ES", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit"
                          })}</p>
                      </div>
                    </div>
                  </div>  
                  </AccordionItem>

                  <AccordionItem key='2' aria-label="datos" title="Datos del vehículo">
                  <div className={styles.firstContainer}>
                    <div className={styles.secondContainer}>
                      <p className={styles.firstP}>Placa</p> 
                      <div className={styles.thirdContainer}>
                          <p className={styles.secondP}>{purchase.vehicle.licensePlate}</p>
                      </div>
                    </div>

                    <div className={styles.secondContainer}>
                    <p className={styles.firstP}>Vehículo</p> 
                      <div className={styles.thirdContainer}>
                          <p className={styles.secondP}>{purchase.vehicle.vehicleType}</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.firstContainer}>
                    <div className={styles.secondContainer}>
                      <p className={styles.firstP}>Marca</p> 
                      <div className={styles.thirdContainer}>
                          <p className={styles.secondP}>{purchase.vehicle.brand}</p>
                      </div>
                    </div>

                    <div className={styles.secondContainer}>
                    <p className={styles.firstP}>Modelo</p> 
                      <div className={styles.thirdContainer}>
                          <p className={styles.secondP}>{purchase.vehicle.model}</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.firstContainer}>
                    <div className={styles.secondContainer}>
                      <p className={styles.firstP}>Tipo</p> 
                      <div className={styles.thirdContainer}>
                          <p className={styles.secondP}>{purchase.vehicle.type}</p>
                      </div>
                    </div>

                    <div className={styles.secondContainer}>
                    <p className={styles.firstP}>Línea</p> 
                      <div className={styles.thirdContainer}>
                          <p className={styles.secondP}>{purchase.vehicle.line}</p>
                      </div>
                    </div>
                  </div>
                  </AccordionItem>

                  <AccordionItem key='3' aria-label="datos" title="Datos del cliente">
                    <div className={styles.firstContainer}>
                    <div className={styles.secondContainer}>
                      <p className={styles.firstP}>Tipo de documento</p> 
                      <div className={styles.thirdContainer}>
                          <p className={styles.secondP}>{purchase.client.clientTypeDocument}</p>
                      </div>
                    </div>

                    <div className={styles.secondContainer}>
                    <p className={styles.firstP}>Número de documento</p> 
                      <div className={styles.thirdContainer}>
                          <p className={styles.secondP}>{purchase.client.clientDocument}</p>
                      </div>
                    </div>
                  </div>
                    <div className={styles.firstContainer}>
                      <div className={styles.secondContainer}>
                        <p className={styles.firstP}>Nombres del cliente</p> 
                        <div className={styles.thirdContainer}>
                            <p className={styles.secondP}>{purchase.client.clientName}</p>
                        </div>
                      </div>

                      <div className={styles.secondContainer}>
                      <p className={styles.firstP}>Apellidos del cliente</p> 
                        <div className={styles.thirdContainer}>
                            <p className={styles.secondP}>{purchase.client.clientLastName}</p>
                        </div>
                      </div>
                    </div>

                    <div className={styles.firstContainer}>
                      <div className={styles.secondContainer}>
                        <p className={styles.firstP}>Número de teléfono</p> 
                        <div className={styles.thirdContainer}>
                            <p className={styles.secondP}>{purchase.client.clientPhoneNumber}</p>
                        </div>
                      </div>

                      <div className={styles.secondContainer}>
                      <p className={styles.firstP}>Dirección</p> 
                        <div className={styles.thirdContainer}>
                            <p className={styles.secondP}>{purchase.client.clientAddress}</p>
                        </div>
                      </div>
                    </div>

                  </AccordionItem>
                  
                </Accordion>
                </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
