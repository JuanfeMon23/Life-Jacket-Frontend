import React, { useEffect } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure} from "@nextui-org/react";
import {FiEye}from "react-icons/fi";
import { toast } from "react-toastify";
import {Accordion, AccordionItem} from "@nextui-org/react";

export function WatchVehicle (props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const vehicles = props.vehicle

    function handleWatch(event){
      event.preventDefault();
      toast.error('No puedes ver un vehiculo inhabilitado.' ,{
        autoClose : 1500,
        position: toast.POSITION.TOP_CENTER
    });
    }

    return (
        <>
        {vehicles.vehicleStatus === "true" ? <Button isIconOnly  className='bg-gradient-to-r from-[#2D78BE] to-[#6D2CC0]' onPress={onOpen}><FiEye className="text-white text-2xl"/></Button>
         : <Button isIconOnly onClick={handleWatch} ><FiEye className="text-white text-2xl"/></Button> }
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl" scrollBehavior={'inside'} isDismissable={false}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="  flex items-center ">Informacion del Vehículo</ModalHeader>
                  <ModalBody key={vehicles.idVehicle}>      
                  <Accordion variant="bordered" color="primary">
                        <AccordionItem key="1" aria-label="Datos" title="Datos principales">
                        <div className="m-5 flex justify-around">
                          <div className=" flex flex-col">
                            <p className="font-bold">Placa</p> 
                            <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                                <p className=" text-center">{vehicles.licensePlate}</p>
                            </div>
                          </div>
                       </div>                      
                          <div className="m-5 flex justify-around">
                              <div className=" flex flex-col">
                                <p className="font-bold">Vehículo</p> 
                                <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                                    <p className=" text-center">{vehicles.vehicleType}</p>
                                </div>
                              </div>

                              <div className=" flex flex-col">
                              <p className="font-bold">Marca</p> 
                                <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                                    <p className=" text-center">{vehicles.brand}</p>
                                </div>
                              </div>
                          </div> 

                          <div className="m-5 flex justify-around">
                              <div className=" flex flex-col">
                                <p className="font-bold">Modelo</p> 
                                <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                                    <p className=" text-center">{vehicles.model}</p>
                                </div>
                              </div>

                            <div className=" flex flex-col">
                              <p className="font-bold">Tipo de vehículo</p> 
                                <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                                    <p className=" text-center">{vehicles.type}</p>
                                </div>
                              </div>
                          </div> 

                          <div className="m-5 flex justify-around">
                          <div className=" flex flex-col">
                            <p className="font-bold">Linea</p> 
                            <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                                <p className=" text-center">{vehicles.line}</p>
                            </div>
                          </div>
                       </div> 
                           
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Datos fisicos" title="Datos fisicos">
                            <div className="m-5 flex justify-around">
                              <div className=" flex flex-col">
                                <p className="font-bold">Kilometraje</p> 
                                <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                                    <p className=" text-center">{vehicles.mileage ? vehicles.mileage : 'No hay datos.'}</p>
                                </div>
                              </div>

                              <div className=" flex flex-col">
                              <p className="font-bold">Cilindraje</p> 
                                <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                                    <p className=" text-center">{vehicles.cylinderCapacity ? vehicles.cylinderCapacity : 'No hay datos.'}</p>
                                </div>
                              </div>
                          </div> 

                          <div className="m-5 flex justify-around">
                              <div className=" flex flex-col">
                                <p className="font-bold">Gasolina</p> 
                                <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                                    <p className=" text-center">{vehicles.fuel ? vehicles.fue : 'No hay datos.' }</p>
                                </div>
                              </div>

                              <div className=" flex flex-col">
                              <p className="font-bold">Tracción</p> 
                                <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                                    <p className=" text-center">{vehicles.othervehicleinformation.traction ? vehicles.othervehicleinformation.traction : 'No hay datos.'}</p>
                                </div>
                              </div>
                          </div> 

                          <div className="m-5 flex justify-around">
                              <div className=" flex flex-col">
                                <p className="font-bold">Correa dentada</p> 
                                <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                                    <p className=" text-center">{vehicles.othervehicleinformation.timingBelt ? vehicles.othervehicleinformation.timingBelt : 'No hay datos.' }</p>
                                </div>
                              </div>

                              <div className=" flex flex-col">
                                <p className="font-bold">Chasis</p> 
                                <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                                    <p className=" text-center">{vehicles.othervehicleinformation.chassis ? vehicles.othervehicleinformation.chassis : 'No hay datos.'}</p>
                                </div>
                              </div>
                          </div> 

                          <div className="m-5 flex justify-around">
                              <div className=" flex flex-col">
                                <p className="font-bold">Serie</p> 
                                <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                                    <p className=" text-center">{vehicles.othervehicleinformation.series ? vehicles.othervehicleinformation.series : 'No hay datos.'}</p>
                                </div>
                              </div>

                              <div className=" flex flex-col">
                                <p className="font-bold">Capacidad</p> 
                                <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                                    <p className=" text-center">{vehicles.othervehicleinformation.capacity ? `${vehicles.othervehicleinformation.capacity} Personas` : 'No hay datos.'}</p>
                                </div>
                              </div>
                          </div> 

                          <div className="m-5 flex justify-around">
                            <div className=" flex flex-col">
                                <p className="font-bold">Motor</p> 
                                <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                                    <p className=" text-center">{vehicles.othervehicleinformation.motor ? vehicles.othervehicleinformation.motor : 'No hay datos.'}</p>
                                </div>
                              </div>

                              <div className=" flex flex-col">
                                <p className="font-bold">Color</p> 
                                <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                                    <p className=" text-center">{vehicles.color ? vehicles.color : 'No hay datos.'}</p>
                                </div>
                              </div>
                          </div>

                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Datos legales" title="Datos legales">
                          <div className="m-5 flex justify-around">
                            <div className=" flex flex-col">
                              <p className="font-bold">Soat</p> 
                              <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                                  <p className=" text-center">{vehicles.soat ? vehicles.soat : 'No hay datos.'}</p>
                              </div>
                            </div>

                            <div className=" flex flex-col">
                            <p className="font-bold">Tecnomecanica</p> 
                              <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                                  <p className=" text-center">{vehicles.technomechanics ? vehicles.technomechanics : 'No hay datos.'}</p>
                              </div>
                            </div>
                        </div> 
                        <div className="m-5 flex justify-around">
                            <div className=" flex flex-col">
                              <p className="font-bold">Cedula propietario</p> 
                              <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                                  <p className=" text-center">{vehicles.othervehicleinformation.identificationCard ? vehicles.othervehicleinformation.identificationCard  : 'No hay datos.'}</p>
                              </div>
                            </div>

                            <div className=" flex flex-col">
                            <p className="font-bold">Matricula</p> 
                              <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                                  <p className=" text-center">{vehicles.othervehicleinformation.register ? vehicles.othervehicleinformation.register: 'No hay datos.'}</p>
                              </div>
                            </div>
                        </div> 

                        <div className="m-5 flex justify-around">
                            <div className=" flex flex-col">
                              <p className="font-bold">Empresa</p> 
                              <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                                  <p className=" text-center">{vehicles.othervehicleinformation.business ? vehicles.othervehicleinformation.business  : 'No hay datos.'}</p>
                              </div>
                            </div>

                            <div className=" flex flex-col">
                            <p className="font-bold">Servicio</p> 
                              <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                                  <p className=" text-center">{vehicles.othervehicleinformation.service ? vehicles.othervehicleinformation.service: 'No hay datos.'}</p>
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
    )
}