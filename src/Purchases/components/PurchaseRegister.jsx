import React,{useState, useEffect} from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input, Button, Select, SelectItem, Textarea} from "@nextui-org/react";
import {useForm} from 'react-hook-form';
import { usePurchases } from '../context/purchaseContext';
import { useClients } from '../../Clients/context/clientsContext';
import { useVehicles } from '../../Vehicles/context/vehiclesContext';
import { useParams, useNavigate } from 'react-router-dom';


export function PurchaseRegister() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {register , setValue, handleSubmit, formState:{errors}} = useForm();
    const {createPurchase} = usePurchases();
    const {clients} = useClients();
    const {vehicles} = useVehicles();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = (data) => {
        createPurchase(data);
    }
  return (
    <div className='flex'>
    <Button onPress={onOpen}className='absolute right-0 top-40 mx-6 my-20 bg-gradient-to-r from-cyan-500 to-blue-800 text-white font-bold'>{params.idUser ? <AiTwotoneEdit className='text-white text-2xl'/> : 'Registrar' }</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">Datos de la compra</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=' flex'>
                        <div className='flex-col m-3 w-[200px]'>
                            <Select label='Documento del cliente'  variant='underlined' {...register("idClientPurchase", {required : true})}>
                                {clients.map((clients) => (
                                <SelectItem key={clients.idClient} value={clients.clientDocument}>
                                    {clients.clientDocument}
                                </SelectItem>
                                ))}
                            </Select>
                            {errors.idClientPurchase && <p className=' text-red-600'>Campo requerido</p>}
                        </div>

                        <div className='flex-col m-3 w-[200px]'>
                            <Select label='Placa del vehículo'  variant='underlined' {...register("idVehiclePurchase", {required : true})}>
                                {vehicles.map((vehicles) => (
                                <SelectItem key={vehicles.idVehicle} value={vehicles.licensePlate}>
                                    {vehicles.licensePlate}
                                </SelectItem>
                                ))}
                            </Select>
                            {errors.idVehiclePurchase && <p className=' text-red-600'>Campo requerido</p>}
                        </div>
                    </div>

                    <div className=' flex'>
                        <div className=' flex-col m-3 w-[200px]'>
                            <Input type="date" label="Fecha"  isClearable variant="underlined" id='purchaseDate'
                            {...register("purchaseDate" , {required : true})}/>
                            {errors.purchaseDate && <p className=' text-red-600'>Campo requerido</p>}
                        </div>

                        <div className=' flex-col m-3'>
                            <Input type="number" label="Precio compra"  isClearable variant="underlined" id='purchaseFinalPrice'
                            {...register("purchaseFinalPrice" , {required : true})}/>
                            {errors.purchaseFinalPrice && <p className=' text-red-600'>Campo requerido</p>}
                        </div>  

                    </div>

                    <div className=' flex'>
                        <div className=' flex-col m-3'>
                            <Input type="text" label="Departamento"  isClearable variant="underlined" id='purchaseDepartment'
                            {...register("purchaseDepartment" , {required : true})}/>
                            {errors.purchaseDepartment && <p className=' text-red-600'>Campo requerido</p>}
                        </div>

                        <div className=' flex-col m-3'>
                            <Input type="text" label="Municipio"  isClearable variant="underlined" id='purchaseMunicipality'
                            {...register("purchaseMunicipality" , {required : true})}/>
                            {errors.purchaseMunicipality && <p className=' text-red-600'>Campo requerido</p>}
                        </div>  

                    </div>

                    <div className=' m-3'>
                            <Input type="number" label="Sancíon pecunaria"  isClearable variant="underlined" id='purchasePecuniaryPenalty'
                            {...register("purchasePecuniaryPenalty" , {required : true})}/>
                            {errors.purchasePecuniaryPenalty && <p className=' text-red-600'>Campo requerido</p>}
                    </div>

                    <div className=' m-3'>
                            <Textarea label="Limitaciones"  isClearable variant="bordered" id='purchaseLimitations'
                            {...register("purchaseLimitations" , {required : true})}/>
                            {errors.purchaseLimitations && <p className=' text-red-600'>Campo requerido</p>}
                    </div>


                  <div className=' text-center my-3 '>
                    <button type='submit' className='bg-gradient-to-r from-cyan-500 to-blue-800 text-white font-bold w-20 h-10 rounded-lg'>Crear</button>
                  </div>
                  
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
