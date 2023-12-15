import React,{useState, useEffect} from 'react'
import {useVehicles} from '../../Vehicles/context/vehiclesContext';
import {useImprovements} from '../context/improvementsContext';
import {Input, Textarea} from "@nextui-org/react";
import {useForm, Controller} from 'react-hook-form';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import { useParams } from 'react-router-dom';
import {AiOutlinePlusCircle} from '../../../node_modules/react-icons/ai';
import { RequiredIcon } from '../../components/globalComponents/RequiredIcon.jsx';
import { createImprovementsRequest } from '../api/Improvements.js';
import { toast } from "react-toastify";
import { ButtonAccept } from '../../components/ButtonAccept';

export function ImprovementRegister() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {getVehicles, vehicles} = useVehicles();
    const {register , setValue, handleSubmit, formState:{errors}, control, reset} = useForm({
      defaultValues: {
        idVehicleImprovement : '',
        improvementDate: '',
        improvementPrice: '',
        improvementDescription: ''
      }
    });
    const {getImprovements} = useImprovements();


    useEffect(() => {
        getVehicles();
    },[])

    const onSubmit = async (data) => {
      try {
          const res = await createImprovementsRequest(data);
          toast.success('Mejora registrada con éxito!',{
              position: toast.POSITION.TOP_CENTER,
              autoClose: 1500
          });
          getImprovements();
          reset();
          return res.data;
      } catch (error) {
          toast.error(error.response.data.message ,{
              position: toast.POSITION.TOP_CENTER,
              autoClose: 1500
          });
          console.log(error);
          throw new Error(error.message);
      }
    };

  return (
    <div className='flex'>
      <Button title='Agregar mejora' endContent={<AiOutlinePlusCircle className=' text-2xl'/>} color="primary" variant="solid" onPress={onOpen} className=' text-white font-bold'>Agregar</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-3">Datos de la mejora</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-col m-3 justify-center items-center'>
                            <Controller
                                name='idVehicleImprovement'
                                control={control}
                                rules={{
                                    required : 'Campo requerido'
                                }}
                                render={({field}) => (
                                    <Select
                                    {...field}
                                    label="Placa del vehículo"
                                    variant="bordered"
                                    endContent={<RequiredIcon/>}
                                    color={errors.idVehicleImprovement ? "danger" : ""}
                                    errorMessage={errors.idVehicleImprovement?.message}
                                    className="max-w-xs"
                                    onChange={(e) => {
                                        field.onChange(e);
                                    }}
                                    >
                                {vehicles.filter(vehicles => vehicles.vehicleStatus === "true").map((vehicles) => (
                                    <SelectItem key={vehicles.idVehicle} value={vehicles.licensePlate}>
                                        {`${vehicles.licensePlate} - ${vehicles.brand}`}
                                    </SelectItem>
                                  ))}
                                    </Select>
                                )}
                                />
                        </div>

                            <div className='flex flex-col m-3 justify-center items-center'>
                            <Controller
                              name="improvementDate"
                              control={control}
                              rules={{
                                required : 'Campo requerido',
                                validate: value => {
                                  const currentDate = new Date();
                                  const selectedDate = new Date(value);
                                  if (selectedDate > currentDate) {
                                    return 'La fecha no puede ser mayor a la fecha actual';
                                  }
                                  const minDate = new Date().setDate(currentDate.getDate() - 20);
                                  if (selectedDate < minDate) {
                                    return 'La fecha no puede ser menor a 20 días antes de la fecha actual';
                                  }
                                  return true;
                                }
                              }}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  type="date"
                                  label="Fecha de mejora"
                                  variant="bordered"
                                  endContent={<RequiredIcon/>}
                                  color={errors.improvementDate ? "danger" : ""}
                                  errorMessage={errors.improvementDate?.message}
                                  className="max-w-xs"
                                />
                            )}
                          /> 
                            </div>

                            <div className='flex flex-col m-3 justify-center items-center'>
                            <Controller
                              name="improvementPrice"
                              control={control}
                              rules={{
                                required: "Campo requerido",
                                minLength : {
                                  value : 3,
                                  message : 'Al menos 3 números'
                                },
                                maxLength : {
                                  value : 9,
                                  message : 'Máximo 9 números'
                                },
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
                                  endContent={<RequiredIcon/>}
                                  color={errors.improvementPrice? "danger" : ""}
                                  errorMessage={errors.improvementPrice?.message}
                                  className="max-w-xs"
                                />
                              )}
                            />
                            </div>  

                        <div className='flex flex-col m-3 justify-center items-center'>
                        <Controller
                          name="improvementDescription"
                          control={control}
                          rules={{
                            required: "Campo requerido",
                            minLength: {
                              value: 3,
                              message: "Al menos 3 caracteres"
                            },
                            maxLength: {
                              value: 40,
                              message: "Máximo 40 caracteres"
                            },
                            pattern: {
                              value: /^(?!.* {3})[^\s]+(?:\s[^\s]+)*$/,
                              message: "No más de dos espacios consecutivos"
                            }
                          }}
                          render={({ field }) => (
                            <Textarea
                              {...field}
                              type="text"
                              label="Descripción de la mejora"
                              variant="bordered"
                              endContent={<RequiredIcon/>}
                              color={errors.improvementDescription ? "danger" : ""}
                              errorMessage={errors.improvementDescription?.message}
                              className="max-w-xs"
                            />
                          )}
                        /> 
                        </div>

                      <div className=' text-center my-3 '>
                      <ButtonAccept/>
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
  
