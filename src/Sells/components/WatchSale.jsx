import React, { useEffect } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {FiEye}from "react-icons/fi";


export function WatchSale(props) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const sale = props.sale
 
  return (
    <>
      <Button  className='bg-gradient-to-r from-[#2D78BE] to-[#6D2CC0]' onPress={onOpen}><FiEye className="text-white text-2xl"/></Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl" isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className=" bg-gradient-to-r from-[#252525] to-[#231949] text-white flex items-center ">Información de la venta</ModalHeader>
                <ModalBody key={sale.idPurchase}>
                  
                <div className="m-5 flex justify-around">
                    <div className=" flex flex-col">
                      <p className="font-bold">Fecha</p> 
                      <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                          <p className=" text-center">{sale.saleDate}</p>
                      </div>
                    </div>

                    <div className=" flex flex-col">
                    <p className="font-bold">Placa del vehículo</p> 
                      <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                          <p className=" text-center">{sale.vehicle.licensePlate}</p>
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
                      <p className="font-bold">Precio de la venta</p> 
                      <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                          <p className=" text-center">{`$${sale.saleFinalPrice}`}</p>
                      </div>
                    </div>

                    <div className=" flex flex-col">
                    <p className="font-bold">Limitaciones</p> 
                      <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                          <p className=" text-center">{sale.saleLimitations}</p>
                      </div>
                    </div>
                  </div>                     

                </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}