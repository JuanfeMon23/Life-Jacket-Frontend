import React, { useEffect } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {FiEye}from "react-icons/fi";
import {Accordion, AccordionItem} from "@nextui-org/react";


export function WatchSale(props) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const sale = props.sale
 
  return (
    <>
      <Button title='Ver venta'  className='bg-gradient-to-r from-[#2D78BE] to-[#6D2CC0] mr-2' onPress={onOpen}><FiEye className="text-white text-2xl"/></Button>
      <Modal isOpen={isOpen} className=" mr-2" onOpenChange={onOpenChange} size="2xl" isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className=" bg-gradient-to-r from-[#252525] to-[#231949] text-white flex items-center ">Información de la venta</ModalHeader>
                <ModalBody key={sale.idPurchase}>                
                <Accordion variant="bordered" color="primary">
                  <AccordionItem key='1' aria-label="datos" title="Datos de la venta">
                    <div className="m-5 flex justify-around">
                      <div className=" flex flex-col">
                        <p className="font-bold">Precio de la venta</p> 
                        <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                            <p className=" text-center">{typeof sale.saleFinalPrice === "number" ? sale.saleFinalPrice.toLocaleString("es-ES", { style: "currency", currency: "COP" }) : "No válido"}</p>
                        </div>
                      </div>

                      <div className=" flex flex-col">
                      <p className="font-bold">Limitaciones</p> 
                        <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                            <p className=" text-center">{sale.saleLimitations}</p>
                        </div>
                      </div>
                    </div>  
                    
                    <div className="m-5 flex justify-around">
                      <div className=" flex flex-col">
                        <p className="font-bold">Departamento de la venta</p> 
                        <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                            <p className=" text-center">{sale.saleDepartment}</p>
                        </div>
                      </div>

                      <div className=" flex flex-col">
                      <p className="font-bold">Cíudad o municipio</p> 
                        <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                            <p className=" text-center">{sale.saleMunicipality}</p>
                        </div>
                      </div>
                    </div> 

                    <div className="m-5 flex justify-around">
                    <div className=" flex flex-col">
                      <p className="font-bold">Fecha</p> 
                      <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                          <p className=" text-center">{sale.saleDate}</p>
                      </div>
                    </div>
                  </div>  
                  </AccordionItem>

                  <AccordionItem key='2' aria-label="datos" title="Datos del Vehículo">
                  <div className="m-5 flex justify-around">
                    <div className=" flex flex-col">
                      <p className="font-bold">Placa</p> 
                      <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                          <p className=" text-center">{sale.vehicle.licensePlate}</p>
                      </div>
                    </div>

                    <div className=" flex flex-col">
                    <p className="font-bold">Vehículo</p> 
                      <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                          <p className=" text-center">{sale.vehicle.vehicleType}</p>
                      </div>
                    </div>
                  </div>

                  <div className="m-5 flex justify-around">
                    <div className=" flex flex-col">
                      <p className="font-bold">Marca</p> 
                      <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                          <p className=" text-center">{sale.vehicle.brand}</p>
                      </div>
                    </div>

                    <div className=" flex flex-col">
                    <p className="font-bold">Modelo</p> 
                      <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                          <p className=" text-center">{sale.vehicle.model}</p>
                      </div>
                    </div>
                  </div>

                  <div className="m-5 flex justify-around">
                    <div className=" flex flex-col">
                      <p className="font-bold">Tipo</p> 
                      <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                          <p className=" text-center">{sale.vehicle.type}</p>
                      </div>
                    </div>

                    <div className=" flex flex-col">
                    <p className="font-bold">Línea</p> 
                      <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                          <p className=" text-center">{sale.vehicle.line}</p>
                      </div>
                    </div>
                  </div>
                  </AccordionItem>

                  <AccordionItem key='3' aria-label="datos" title="Datos del cliente">
                    <div className="m-5 flex justify-around">
                    <div className=" flex flex-col">
                      <p className="font-bold">Tipo de documento</p> 
                      <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                          <p className=" text-center">{sale.client.clientTypeDocument}</p>
                      </div>
                    </div>

                    <div className=" flex flex-col">
                    <p className="font-bold">Número de documento</p> 
                      <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                          <p className=" text-center">{sale.client.clientDocument}</p>
                      </div>
                    </div>
                  </div>
                    <div className="m-5 flex justify-around">
                      <div className=" flex flex-col">
                        <p className="font-bold">Nombres del cliente</p> 
                        <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                            <p className=" text-center">{sale.client.clientName}</p>
                        </div>
                      </div>

                      <div className=" flex flex-col">
                      <p className="font-bold">Apellidos del cliente</p> 
                        <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                            <p className=" text-center">{sale.client.clientLastName}</p>
                        </div>
                      </div>
                    </div>

                    <div className="m-5 flex justify-around">
                      <div className=" flex flex-col">
                        <p className="font-bold">Número de teléfono</p> 
                        <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                            <p className=" text-center">{sale.client.clientPhoneNumber}</p>
                        </div>
                      </div>

                      <div className=" flex flex-col">
                      <p className="font-bold">Dirección</p> 
                        <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                            <p className=" text-center">{sale.client.clientAddress}</p>
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
