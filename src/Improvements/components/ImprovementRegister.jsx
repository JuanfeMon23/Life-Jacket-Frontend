import React,{useState, useEffect} from 'react'
import {useVehicles} from '../../Vehicles/context/vehiclesContext';
import {useImprovements} from '../context/improvementsContext';
import {Input, Textarea} from "@nextui-org/react";
import {useForm} from 'react-hook-form';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import { useParams, useNavigate } from 'react-router-dom';

export function ImprovementRegister() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {getVehicles, vehicles} = useVehicles();
    const {register , setValue, handleSubmit, formState:{errors}} = useForm();
    const {createImprovement} = useImprovements();
    const params = useParams();


    useEffect(() => {
        getVehicles();
    },[])

    const onSubmit = (data) => {
        createImprovement(data);
        
    };

  return (
    <div className='flex'>
        <Button onPress={onOpen}className='absolute right-0 top-40 mx-6 my-20 bg-gradient-to-r from-cyan-500 to-blue-800 text-white font-bold'>{params.idUser ? <AiTwotoneEdit className='text-white text-2xl'/> : 'Registrar' }</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-3">Datos de la Mejora</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex-col m-3 w-[400px]'>
                            <Select label='Placa del vehículo'  variant='underlined' {...register("idVehicleImprovement", {required : true})}>
                                {vehicles.map((vehicles) => (
                                <SelectItem key={vehicles.idVehicle} value={vehicles.licensePlate}>
                                    {vehicles.licensePlate}
                                </SelectItem>
                                ))}
                            </Select>
                            {errors.idVehicleImprovement && <p className=' text-red-600'>Campo requerido</p>}
                        </div>

                        <div className=' flex'>
                            <div className=' flex-col m-3'>
                                <Input type="date" label="Fecha"  isClearable variant="underlined" id='improvementDate'
                                {...register("improvementDate" , {required : true})}/>
                                {errors.improvementDate && <p className=' text-red-600'>Campo requerido</p>}
                            </div>

                            <div className=' flex-col m-3'>
                                <Input type="number" label="Precio"  isClearable variant="underlined" id='improvementPrice'
                                {...register("improvementPrice" , {required : true})}/>
                                {errors.improvementPrice && <p className=' text-red-600'>Campo requerido</p>}
                            </div>  

                        </div>

                        <div className='flex-col m-3 w-[400px]'>
                            <Textarea type='text' label='Descripcion' id='improvementDescription' variant='bordered'
                            {...register("improvementDescription" , {required : true})}
                            />
                            {errors.improvementDescription && <p className=' text-red-600'>Campo requerido</p>}
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
  
