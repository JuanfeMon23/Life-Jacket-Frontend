import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";
import { Select, SelectItem, Button } from '@nextui-org/react';
import { ButtonAccept } from '../../components/ButtonAccept';
import { useForm , Controller } from 'react-hook-form';
import { useVehicles } from '../context/vehiclesContext.jsx';
import { useState , useEffect} from 'react';
import {Input} from "@nextui-org/react";
import {AiTwotoneEdit} from 'react-icons/Ai';

export  function EditVehicle (props) {
    const [scrollBehavior, setScrollBehavior] = React.useState("inside");
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {register , handleSubmit, setValue,  formState:{errors}, control} = useForm();
    const {updateVehicle} = useVehicles();
    const vehicles = props.vehicle;


    const onSubmit = (data) => {
        updateVehicle(vehicles.idVehicle, data);
    };


  return (
    <div className='flex'>
    <Button onPress={onOpen}className=' bg-gradient-to-r from-[#D99C23] to-[#D45229] rounded-lg text-white font-bold'>{<AiTwotoneEdit className='text-white text-2xl'/>}</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior={scrollBehavior}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">Datos del Vehiculo</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className=" flex">
                    <div className=' flex-col m-3'>
                    <Controller
                          name="licensePlate"
                          control={control}
                          defaultValue={vehicles.licensePlate}
                          rules={{
                            required: "Campo requerido",
                            maxLength: {
                              value: 6,
                              message: "Maximo 6 caracteres"
                            }
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}                        
                              type="text"
                              label="Placa del vehículo"
                              variant="bordered"
                              color={errors.licensePlate ? "danger" : ""}
                              errorMessage={errors.licensePlate?.message}
                              className="max-w-xs"
                            />
                          )}
                        /> 
                    </div>

                    <div className='flex-col m-3'>
                    <Controller
                          name="vehicleType"
                          control={control}
                          defaultValue={vehicles.vehicleType}
                          rules={{
                            required: "Campo requerido",
                            maxLength: {
                              value: 15,
                              message: "Maximo 15 caracteres"
                            },
                            pattern: {
                              value: /^[a-zA-Z\s]*$/,
                              message: "Solo letras"
                            }
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="text"
                              label="Vehículo"
                              variant="bordered"
                              color={errors.vehicleType ? "danger" : ""}
                              errorMessage={errors.vehicleType?.message}
                              className="max-w-xs"
                            />
                          )}
                        /> 
                    </div>
                  </div>

                  <div className=" flex">
                    <div className=' flex-col m-3'>
                    <Controller
                          name="brand"
                          control={control}
                          defaultValue={vehicles.brand}
                          rules={{
                            required: "Campo requerido",
                            minLength: {
                              value: 3,
                              message: "Almenos 3 caracteres"
                            },
                            maxLength: {
                              value: 40,
                              message: "Maximo 40 caracteres"
                            },
                            pattern: {
                              value: /^[a-zA-Z\s]*$/,
                              message: "Solo letras"
                            }
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="text"
                              label="Marca"
                              variant="bordered"
                              color={errors.brand ? "danger" : ""}
                              errorMessage={errors.brand?.message}
                              className="max-w-xs"
                            />
                          )}
                        /> 
                    </div>

                    <div className='flex-col m-3'>
                    <Controller
                        name="model"
                        control={control}
                        defaultValue={vehicles.model}
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
                            label="Modelo"
                            variant="bordered"
                            color={errors.model? "danger" : ""}
                            errorMessage={errors.model?.message}
                            className="max-w-xs"
                          />
                        )}
                      />
                    </div>
                  </div>

                  <div className=" flex">
                    <div className=' flex-col m-3'>
                    <Controller
                          name="type"
                          control={control}
                          defaultValue={vehicles.type}
                          rules={{
                            required: "Campo requerido",
                            minLength: {
                              value: 3,
                              message: "Almenos 3 caracteres"
                            },
                            maxLength: {
                              value: 40,
                              message: "Maximo 40 caracteres"
                            },
                            pattern: {
                              value: /^[a-zA-Z\s]*$/,
                              message: "Solo letras"
                            }
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="text"
                              label="Tipo"
                              variant="bordered"
                              color={errors.type ? "danger" : ""}
                              errorMessage={errors.type?.message}
                              className="max-w-xs"
                            />
                          )}
                        /> 
                    </div>

                    <div className='flex-col m-3'>
                    <Controller
                          name="line"
                          control={control}
                          defaultValue={vehicles.line}
                          rules={{
                            required: "Campo requerido",
                            maxLength: {
                              value: 40,
                              message: "Maximo 40 caracteres"
                            }
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="text"
                              label="Linea"
                              variant="bordered"
                              color={errors.line ? "danger" : ""}
                              errorMessage={errors.line?.message}
                              className="max-w-xs"
                            />
                          )}
                        /> 
                    </div>
                  </div>

                  <div className=" flex">
                    <div className=' flex-col m-3'>
                    <Controller
                        name="mileage"
                        control={control}
                        defaultValue={vehicles.mileage}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="number"
                            label="Kilometraje"
                            variant="bordered"
                            color={errors.mileage? "danger" : ""}
                            errorMessage={errors.mileage?.message}
                            className="max-w-xs"
                          />
                        )}
                      />
                    </div>

                    <div className='flex-col m-3'>
                    <Controller
                        name="cylinderCapacity"
                        control={control}
                        defaultValue={vehicles.cylinderCapacity}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="number"
                            label="Cilindraje"
                            variant="bordered"
                            color={errors.cylinderCapacity? "danger" : ""}
                            errorMessage={errors.cylinderCapacity?.message}
                            className="max-w-xs"
                          />
                        )}
                      />

                    </div>
                  </div>

                  <div className=" flex">
                    <div className=' flex-col m-3'>
                    <Controller
                          name="fuel"
                          control={control}
                          defaultValue={vehicles.fuel}
                          rules={{
                            pattern: {
                              value: /^[a-zA-Z\s]*$/,
                              message: "Solo letras"
                            }
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="text"
                              label="Combustible"
                              variant="bordered"
                              color={errors.fuel ? "danger" : ""}
                              errorMessage={errors.fuel?.message}
                              className="max-w-xs"
                            />
                          )}
                        />            
                    </div>

                    <div className='flex-col m-3'>
                    <Controller
                          name="traction"
                          control={control}
                          defaultValue={vehicles.traction}
                          rules={{

                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="text"
                              label="Tracción"
                              variant="bordered"
                              color={errors.traction ? "danger" : ""}
                              errorMessage={errors.traction?.message}
                              className="max-w-xs"
                            />
                          )}
                        />  
                    </div>
                  </div>

                  
                  <div className=" flex">
                    <div className=' flex-col m-3'>
                      <Controller
                            name="soat"
                            control={control}
                            defaultValue={vehicles.soat}
                            render={({ field }) => (
                              <Input
                                {...field}
                                type="date"
                                label="Soat"
                                variant="bordered"
                                color={errors.soat ? "danger" : ""}
                                errorMessage={errors.soat?.message}
                                className="max-w-xs"
                              />
                            )}
                          /> 
                    
                    </div>

                    <div className='flex-col m-3'>
                    <Controller
                          name="technomecanics"
                          control={control}
                          defaultValue={vehicles.technomecanics}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="date"
                              label="Tecnomecanica"
                              variant="bordered"
                              color={errors.technomecanics ? "danger" : ""}
                              errorMessage={errors.technomecanics?.message}
                              className="max-w-xs"
                            />
                          )}
                        /> 

                    </div>
                  </div>
                  
                  <div className=' m-3'>
                  <Controller
                          name="timingBelt"
                          control={control}
                          defaultValue={vehicles.timingBelt}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="text"
                              label="Correa dentada"
                              variant="bordered"
                              color={errors.timingBelt ? "danger" : ""}
                              errorMessage={errors.timingBelt?.message}
                              className="max-w-xs"
                            />
                          )}
                        /> 
                  </div>

                  {/* <ModalHeader className='flex flex-col gap-3 m-5'>Más información del vehículo</ModalHeader>

                  <div className=' flex'>
                    <div className='flex-col m-3'>
                      <Input type="text" label="Empresa" isClearable variant="underlined" id='business'
                            {...register("business")}/>
                    </div>

                    <div className='flex-col m-3'>
                      <Input type="Empresa" label="Correa dentada" isClearable variant="underlined" id='series'
                            {...register("series")}/>
                    </div>

                  </div>

                  <div className=' flex'>
                    <div className='flex-col m-3'>
                      <Input type="text" label="Color" isClearable variant="underlined" id='color'
                            {...register("color")}/>
                    </div>

                    <div className='flex-col m-3'>
                      <Input type="text" label="Motor" isClearable variant="underlined" id='motor'
                            {...register("motor")}/>
                    </div>
                  </div>

                  <div className=' flex'>
                    <div className='flex-col m-3'>
                      <Input type="text" label="Matricula a nombre dé" isClearable variant="underlined" id='register'
                            {...register("register")}/>
                    </div>

                    <div className='flex-col m-3'>
                      <Input type="number" label="Numero de cedula" isClearable variant="underlined" id='identificationCard'
                            {...register("identificationCard")}/>
                    </div>
                  </div>

                  <div className=' flex'>
                    <div className='flex-col m-3'>
                      <Input type="text" label="Chasis" isClearable variant="underlined" id='chassis'
                            {...register("chassis")}/>
                    </div>

                    <div className='flex-col m-3'>
                      <Input type="number" label="Capacidad" isClearable variant="underlined" id='capacity'
                            {...register("capacity")}/>
                    </div>
                  </div>
                  <div className=' flex'>
                    <div className='flex-col m-3 w-[200px]'>
                        <Select variant="underlined" label='Servicio' id='service' {...register("service")} >
                          <SelectItem key='Publico'>Publico</SelectItem>
                          <SelectItem key='Privado'>Privado</SelectItem>
                        </Select>
                    </div>
                  </div> */}

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
