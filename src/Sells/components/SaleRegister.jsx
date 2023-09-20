import React,{useState, useEffect} from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input, Button, Select, SelectItem, Textarea} from "@nextui-org/react";
import {useForm} from 'react-hook-form';
import { useClients } from '../../Clients/context/clientsContext';
import { useVehicles } from '../../Vehicles/context/vehiclesContext';
import { useParams, useNavigate } from 'react-router-dom';
import { useSells } from '../context/sellsContext';


export function SaleRegister() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {register , setValue, handleSubmit, formState:{errors}} = useForm();
    const {createSell} = useSells();
    const {clients} = useClients();
    const {vehicles} = useVehicles();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = (data) => {
        createSell(data);
    }
  return (
    <div className='flex'>
    <Button onPress={onOpen}className='absolute right-0 top-40 mx-6 my-20 bg-gradient-to-r from-cyan-500 to-blue-800 text-white font-bold'>{params.idUser ? <AiTwotoneEdit className='text-white text-2xl'/> : 'Registrar' }</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">Datos de la venta</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=' flex'>
                        <div className='flex-col m-3 w-[200px]'>
                            <Select label='Documento del cliente'  variant='underlined' {...register("idClientSale", {required : true})}>
                                {clients.map((clients) => (
                                <SelectItem key={clients.idClient} value={clients.clientDocument}>
                                    {clients.clientDocument}
                                </SelectItem>
                                ))}
                            </Select>
                            {errors.idClientPurchase && <p className=' text-red-600'>Campo requerido</p>}
                        </div>

                        <div className='flex-col m-3 w-[200px]'>
                            <Select label='Placa del vehículo'  variant='underlined' {...register("idVehicleSale", {required : true})}>
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
                            <Input type="date" label="Fecha"  isClearable variant="underlined" id='saleDate'
                            {...register("saleDate" , {required : true})}/>
                            {errors.saleDate && <p className=' text-red-600'>Campo requerido</p>}
                        </div>

                        <div className=' flex-col m-3'>
                            <Input type="number" label="Precio venta"  isClearable variant="underlined" id='saleFinalPrice'
                            {...register("saleFinalPrice" , {required : true})}/>
                            {errors.saleFinalPrice && <p className=' text-red-600'>Campo requerido</p>}
                        </div>  

                    </div>

                    <div className=' flex'>
                        <div className=' flex-col m-3'>
                            <Input type="text" label="Departamento"  isClearable variant="underlined" id='saleDepartment'
                            {...register("saleDepartment" , {required : true})}/>
                            {errors.saleDepartment && <p className=' text-red-600'>Campo requerido</p>}
                        </div>

                        <div className=' flex-col m-3'>
                            <Input type="text" label="Municipio"  isClearable variant="underlined" id='saleMunicipality'
                            {...register("saleMunicipality" , {required : true})}/>
                            {errors.saleMunicipality && <p className=' text-red-600'>Campo requerido</p>}
                        </div>  

                    </div>

                    <div className=' m-3'>
                            <Input type="number" label="Sancíon pecunaria"  isClearable variant="underlined" id='salePecuniaryPenalty'
                            {...register("salePecuniaryPenalty" , {required : true})}/>
                            {errors.salePecuniaryPenalty && <p className=' text-red-600'>Campo requerido</p>}
                    </div>

                    <div className=' m-3'>
                            <Textarea label="Limitaciones"  isClearable variant="bordered" id='saleLimitations'
                            {...register("saleLimitations" , {required : true})}/>
                            {errors.saleLimitations && <p className=' text-red-600'>Campo requerido</p>}
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
