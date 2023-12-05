import React, { useEffect } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure} from "@nextui-org/react";
import {FiEye}from "react-icons/fi";
import { toast } from "react-toastify";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { styles } from "../../components/styles";

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
        {vehicles.vehicleStatus === "true" ? <Button title='Ver vehículo' isIconOnly  className='bg-gradient-to-r from-[#2D78BE] to-[#6D2CC0] mr-2' onPress={onOpen}><FiEye className="text-white text-2xl"/></Button>
         : <Button isIconOnly title='Ver vehículo' className=" mr-2" onClick={handleWatch} ><FiEye className="text-white text-2xl"/></Button> }
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl" scrollBehavior={'inside'} isDismissable={false}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="  flex items-center ">Información del vehículo</ModalHeader>
                  <ModalBody key={vehicles.idVehicle}>      
                  <Accordion variant="bordered" color="primary">
                        <AccordionItem key="1" aria-label="Datos" title="Datos principales">
                        <div className={styles.firstContainer}>
                          <div className={styles.secondContainer}>
                            <p className={styles.firstP}>Placa</p> 
                            <div className={styles.thirdContainer}>
                                <p className=" text-center">{vehicles.licensePlate}</p>
                            </div>
                          </div>
                          <div className={styles.secondContainer}>
                              <p className={styles.firstP}>Vehículo</p> 
                                <div className={styles.thirdContainer}>
                                    <p className=" text-center">{vehicles.vehicleType}</p>
                                </div>
                          </div>
                       </div>                      
                          <div className={styles.firstContainer}>
                              <div className={styles.secondContainer}>
                                <p className={styles.firstP}>Tipo de vehículo</p> 
                                <div className={styles.thirdContainer}>
                                    <p className=" text-center">{vehicles.type}</p>
                                </div>
                              </div>

                              <div className={styles.secondContainer}>
                              <p className={styles.firstP}>Marca</p> 
                                <div className={styles.thirdContainer}>
                                    <p className=" text-center">{vehicles.brand}</p>
                                </div>
                              </div>
                          </div> 

                          <div className={styles.firstContainer}>
                              <div className={styles.secondContainer}>
                                <p className={styles.firstP}>Modelo</p> 
                                <div className={styles.thirdContainer}>
                                    <p className=" text-center">{vehicles.model}</p>
                                </div>
                              </div>

                              <div className={styles.secondContainer}>
                                <p className={styles.firstP}>Línea</p> 
                                <div className={styles.thirdContainer}>
                                <p className=" text-center">{vehicles.line}</p>
                              </div>
                            </div>
                          </div>

                    

                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Datos fisicos" title="Datos físicos">
                            <div className={styles.firstContainer}>
                              <div className={styles.secondContainer}>
                                <p className={styles.firstP}>Kilometraje</p> 
                                <div className={styles.thirdContainer}>
                                    <p className=" text-center">{vehicles.mileage ? vehicles.mileage : 'No hay datos.'}</p>
                                </div>
                              </div>

                              <div className={styles.secondContainer}>
                              <p className={styles.firstP}>Cilindraje</p> 
                                <div className={styles.thirdContainer}>
                                    <p className=" text-center">{vehicles.cylinderCapacity ? vehicles.cylinderCapacity : 'No hay datos.'}</p>
                                </div>
                              </div>
                          </div> 

                          <div className={styles.firstContainer}>
                              <div className={styles.secondContainer}>
                                <p className={styles.firstP}>Combustible</p> 
                                <div className={styles.thirdContainer}>
                                    <p className=" text-center">{vehicles.fuel ? vehicles.fuel : 'No hay datos.' }</p>
                                </div>
                              </div>

                              <div className={styles.secondContainer}>
                              <p className={styles.firstP}>Tracción</p> 
                                <div className={styles.thirdContainer}>
                                    <p className=" text-center">{vehicles.othervehicleinformation.traction ? vehicles.othervehicleinformation.traction : 'No hay datos.'}</p>
                                </div>
                              </div>
                          </div> 

                          <div className={styles.firstContainer}>
                              <div className={styles.secondContainer}>
                                <p className={styles.firstP}>Correa dentada</p> 
                                <div className={styles.thirdContainer}>
                                    <p className=" text-center">{vehicles.othervehicleinformation.timingBelt ? vehicles.othervehicleinformation.timingBelt : 'No hay datos.' }</p>
                                </div>
                              </div>

                              <div className={styles.secondContainer}>
                                <p className={styles.firstP}>Chasis</p> 
                                <div className={styles.thirdContainer}>
                                    <p className=" text-center">{vehicles.othervehicleinformation.chassis ? vehicles.othervehicleinformation.chassis : 'No hay datos.'}</p>
                                </div>
                              </div>
                          </div> 

                          <div className={styles.firstContainer}>
                              <div className={styles.secondContainer}>
                                <p className={styles.firstP}>Serie</p> 
                                <div className={styles.thirdContainer}>
                                    <p className=" text-center">{vehicles.othervehicleinformation.series ? vehicles.othervehicleinformation.series : 'No hay datos.'}</p>
                                </div>
                              </div>

                              <div className={styles.secondContainer}>
                                <p className={styles.firstP}>Capacidad</p> 
                                <div className={styles.thirdContainer}>
                                    <p className=" text-center">{vehicles.othervehicleinformation.capacity ? `${vehicles.othervehicleinformation.capacity} Personas` : 'No hay datos.'}</p>
                                </div>
                              </div>
                          </div> 

                          <div className={styles.firstContainer}>
                            <div className={styles.secondContainer}>
                                <p className={styles.firstP}>Motor</p> 
                                <div className={styles.thirdContainer}>
                                    <p className=" text-center">{vehicles.othervehicleinformation.motor ? vehicles.othervehicleinformation.motor : 'No hay datos.'}</p>
                                </div>
                              </div>

                              <div className={styles.secondContainer}>
                                <p className={styles.firstP}>Color</p> 
                                <div className={styles.thirdContainer}>
                                    <p className=" text-center">{vehicles.color ? vehicles.color : 'No hay datos.'}</p>
                                </div>
                              </div>
                          </div>

                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Datos legales" title="Datos legales">
                          <div className={styles.firstContainer}>
                            <div className={styles.secondContainer}>
                              <p className={styles.firstP}>Soat</p> 
                              <div className={styles.thirdContainer}>
                                  <p className=" text-center">{vehicles.soat ? 
                                  new Date(vehicles.soat).toLocaleString("es-ES", {
                                    year: "numeric",
                                    month: "2-digit",
                                    day: "2-digit"
                                  }) 
                                  : 'No hay datos.'}</p>
                              </div>
                            </div>

                            <div className={styles.secondContainer}>
                            <p className={styles.firstP}>Tecnomecánica</p> 
                              <div className={styles.thirdContainer}>
                                  <p className=" text-center">{vehicles.technomechanics ? 
                                  new Date(vehicles.technomechanics).toLocaleString("es-ES", {
                                    year: "numeric",
                                    month: "2-digit",
                                    day: "2-digit"
                                  }) 
                                  : 'No hay datos.'}</p>
                              </div>
                            </div>
                        </div> 
                        <div className={styles.firstContainer}>
                            <div className={styles.secondContainer}>
                              <p className={styles.firstP}>Cédula propietario</p> 
                              <div className={styles.thirdContainer}>
                                  <p className=" text-center">{vehicles.othervehicleinformation.identificationCard ? vehicles.othervehicleinformation.identificationCard  : 'No hay datos.'}</p>
                              </div>
                            </div>

                            <div className={styles.secondContainer}>
                            <p className={styles.firstP}>Matrícula</p> 
                              <div className={styles.thirdContainer}>
                                  <p className=" text-center">{vehicles.othervehicleinformation.register ? vehicles.othervehicleinformation.register: 'No hay datos.'}</p>
                              </div>
                            </div>
                        </div> 

                        <div className={styles.firstContainer}>
                            <div className={styles.secondContainer}>
                              <p className=" text-xs md:text-sm font-bold">Empresa</p> 
                              <div className={styles.thirdContainer}>
                                  <p className=" text-center">{vehicles.othervehicleinformation.business ? vehicles.othervehicleinformation.business  : 'No hay datos.'}</p>
                              </div>
                            </div>

                            <div className={styles.secondContainer}>
                            <p className=" text-xs md:text-sm font-bold">Servicio</p> 
                              <div className={styles.thirdContainer}>
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