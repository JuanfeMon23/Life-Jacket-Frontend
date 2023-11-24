import React, { useEffect } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {FiEye}from "react-icons/fi";
import {Accordion, AccordionItem} from "@nextui-org/react";


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
              <ModalHeader className=" bg-gradient-to-r from-[#252525] to-[#231949] text-white flex items-center ">Información de la compra</ModalHeader>
                <ModalBody key={purchase.idPurchase}>
                  
                <Accordion variant="bordered" color="primary">
                  <AccordionItem key='1' aria-label="datos" title="Datos de la compra">
                    <div className="m-5 flex justify-around">
                      <div className=" flex flex-col">
                        <p className="font-bold">Precio de la compra</p> 
                        <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                            <p className=" text-center">  {typeof purchase.purchaseFinalPrice === "number" ? purchase.purchaseFinalPrice.toLocaleString("es-ES", { style: "currency", currency: "COP" }) : "No válido"}</p>
                        </div>
                      </div>

                      <div className=" flex flex-col">
                      <p className="font-bold">Limitaciones</p> 
                        <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                            <p className=" text-center">{purchase.purchaseLimitations}</p>
                        </div>
                      </div>
                    </div>  
                    
                    <div className="m-5 flex justify-around">
                      <div className=" flex flex-col">
                        <p className="font-bold">Departamento de la compra</p> 
                        <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                            <p className=" text-center">{purchase.purchaseDepartment}</p>
                        </div>
                      </div>

                      <div className=" flex flex-col">
                      <p className="font-bold">Cíudad o municipio</p> 
                        <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                            <p className=" text-center">{purchase.purchaseMunicipality}</p>
                        </div>
                      </div>
                    </div> 

                    <div className="m-5 flex justify-around">
                    <div className=" flex flex-col">
                      <p className="font-bold">Fecha</p> 
                      <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                          <p className=" text-center">{new Date(purchase.purchaseDate).toLocaleString("es-ES", {
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

                  <AccordionItem key='2' aria-label="datos" title="Datos del Vehículo">
                  <div className="m-5 flex justify-around">
                    <div className=" flex flex-col">
                      <p className="font-bold">Placa</p> 
                      <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                          <p className=" text-center">{purchase.vehicle.licensePlate}</p>
                      </div>
                    </div>

                    <div className=" flex flex-col">
                    <p className="font-bold">Vehículo</p> 
                      <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                          <p className=" text-center">{purchase.vehicle.vehicleType}</p>
                      </div>
                    </div>
                  </div>

                  <div className="m-5 flex justify-around">
                    <div className=" flex flex-col">
                      <p className="font-bold">Marca</p> 
                      <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                          <p className=" text-center">{purchase.vehicle.brand}</p>
                      </div>
                    </div>

                    <div className=" flex flex-col">
                    <p className="font-bold">Modelo</p> 
                      <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                          <p className=" text-center">{purchase.vehicle.model}</p>
                      </div>
                    </div>
                  </div>

                  <div className="m-5 flex justify-around">
                    <div className=" flex flex-col">
                      <p className="font-bold">Tipo</p> 
                      <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                          <p className=" text-center">{purchase.vehicle.type}</p>
                      </div>
                    </div>

                    <div className=" flex flex-col">
                    <p className="font-bold">Línea</p> 
                      <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                          <p className=" text-center">{purchase.vehicle.line}</p>
                      </div>
                    </div>
                  </div>
                  </AccordionItem>

                  <AccordionItem key='3' aria-label="datos" title="Datos del cliente">
                    <div className="m-5 flex justify-around">
                    <div className=" flex flex-col">
                      <p className="font-bold">Tipo de documento</p> 
                      <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                          <p className=" text-center">{purchase.client.clientTypeDocument}</p>
                      </div>
                    </div>

                    <div className=" flex flex-col">
                    <p className="font-bold">Número de documento</p> 
                      <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                          <p className=" text-center">{purchase.client.clientDocument}</p>
                      </div>
                    </div>
                  </div>
                    <div className="m-5 flex justify-around">
                      <div className=" flex flex-col">
                        <p className="font-bold">Nombres del cliente</p> 
                        <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                            <p className=" text-center">{purchase.client.clientName}</p>
                        </div>
                      </div>

                      <div className=" flex flex-col">
                      <p className="font-bold">Apellidos del cliente</p> 
                        <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                            <p className=" text-center">{purchase.client.clientLastName}</p>
                        </div>
                      </div>
                    </div>

                    <div className="m-5 flex justify-around">
                      <div className=" flex flex-col">
                        <p className="font-bold">Número de teléfono</p> 
                        <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                            <p className=" text-center">{purchase.client.clientPhoneNumber}</p>
                        </div>
                      </div>

                      <div className=" flex flex-col">
                      <p className="font-bold">Dirección</p> 
                        <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                            <p className=" text-center">{purchase.client.clientAddress}</p>
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
