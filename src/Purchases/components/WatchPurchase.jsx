import React, { useEffect } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {FiEye}from "react-icons/fi";


export function WatchPurchase(props) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const purchase = props.purchase
 
  return (
    <>
      <Button  className='bg-gradient-to-r from-[#2D78BE] to-[#6D2CC0]' onPress={onOpen}><FiEye className="text-white text-2xl"/></Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl" isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className=" bg-gradient-to-r from-[#252525] to-[#231949] text-white flex items-center ">Informacion de la compra</ModalHeader>
                <ModalBody key={purchase.idPurchase}>
                  
                <div className="m-5 flex justify-around">
                    <div className=" flex flex-col">
                      <p className="font-bold">Fecha</p> 
                      <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                          <p className=" text-center">{purchase.purchaseDate}</p>
                      </div>
                    </div>

                    <div className=" flex flex-col">
                    <p className="font-bold">Placa del vehículo</p> 
                      <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                          <p className=" text-center">{purchase.vehicle.licensePlate}</p>
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
                      <p className="font-bold">Precio de la compra</p> 
                      <div className=" border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1 ">
                          <p className=" text-center">{`$${purchase.purchaseFinalPrice}`}</p>
                      </div>
                    </div>

                    <div className=" flex flex-col">
                    <p className="font-bold">Limitaciones</p> 
                      <div className=" items-end border-2 border-indigo-500/75 rounded-lg w-[15rem] p-1">
                          <p className=" text-center">{purchase.purchaseLimitations}</p>
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
