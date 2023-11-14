import React,{useState, useEffect} from 'react'
import {useVehicles} from '../../Vehicles/context/vehiclesContext';
import {useImprovements} from '../context/improvementsContext';
import {Input, Textarea} from "@nextui-org/react";
import {useForm, Controller} from 'react-hook-form';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import { useParams, useNavigate } from 'react-router-dom';
import {AiOutlinePlusCircle} from 'react-icons/Ai';

export function ImprovementRegister() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {getVehicles, vehicles} = useVehicles();
    const {register , setValue, handleSubmit, formState:{errors}, control, reset} = useForm();
    const {createImprovement} = useImprovements();
    const params = useParams();


    useEffect(() => {
        getVehicles();
    },[])

    const onSubmit = (data) => {
        createImprovement(data);
        reset();
        
    };

  return (
    <div className='flex'>
      <Button endContent={<AiOutlinePlusCircle className=' text-2xl'/>} color="primary" variant="solid" onPress={onOpen} className=' text-white font-bold'>Agregar</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-3">Datos de la Mejora</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex-col m-3 w-[400px]'>
                            <Controller
                                name='idVehicleImprovement'
                                control={control}
                                rules={{
                                    required : 'Campo obligatorio'
                                }}
                                render={({field}) => (
                                    <Select
                                    {...field}
                                    label="Placa del vehículo"
                                    variant="bordered"
                                    color={errors.idVehicleImprovement ? "danger" : ""}
                                    errorMessage={errors.idVehicleImprovement?.message}
                                    className="max-w-xs"
                                    onChange={(e) => {
                                        field.onChange(e);
                                    }}
                                    >
                                {vehicles.filter(vehicles => vehicles.vehicleStatus === "true").map((vehicles) => (
                                    <SelectItem key={vehicles.idVehicle} value={vehicles.licensePlate}>
                                        {vehicles.licensePlate}
                                    </SelectItem>
                                  ))}
                                    </Select>
                                )}
                                />
                        </div>

                        <div className=' flex'>
                            <div className=' flex-col m-3'>
                            <Controller
                              name="improvementDate"
                              control={control}
                              rules={{
                                required : 'Campo obligatorio'
                              }}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  type="date"
                                  label="Fecha de mejora"
                                  variant="bordered"
                                  color={errors.improvementDate ? "danger" : ""}
                                  errorMessage={errors.improvementDate?.message}
                                  className="max-w-xs"
                                />
                            )}
                          /> 
                            </div>

                            <div className=' flex-col m-3'>
                            <Controller
                              name="improvementPrice"
                              control={control}
                              rules={{
                                required: "Campo requerido",
                                pattern: {
                                  value: /^[0-9]*$/, 
                                  message: "Solo números"
                                }
                              }}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  type="number"
                                  label="Precio de mejora"
                                  variant="bordered"
                                  color={errors.improvementPrice? "danger" : ""}
                                  errorMessage={errors.improvementPrice?.message}
                                  className="max-w-xs"
                                />
                              )}
                            />
                            </div>  

                        </div>

                        <div className='flex-col m-3 w-[400px]'>
                        <Controller
                          name="improvementDescription"
                          control={control}
                          rules={{
                            required: "Campo requerido",
                            minLength: {
                              value: 3,
                              message: "Almenos 3 caracteres"
                            },
                            maxLength: {
                              value: 40,
                              message: "Maximo 40 caracteres"
                            }
                          }}
                          render={({ field }) => (
                            <Textarea
                              {...field}
                              type="text"
                              label="Descripcion de la mejora"
                              variant="bordered"
                              color={errors.improvementDescription ? "danger" : ""}
                              errorMessage={errors.improvementDescription?.message}
                              className="max-w-xs"
                            />
                          )}
                        /> 
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
  
