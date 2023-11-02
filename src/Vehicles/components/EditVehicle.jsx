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
    <Button isIconOnly onPress={onOpen}className=' bg-gradient-to-r from-[#D99C23] to-[#D45229] rounded-lg text-white font-bold'>{<AiTwotoneEdit className='text-white text-2xl'/>}</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior={scrollBehavior}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">Editar Vehiculo</ModalHeader>
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

                  <div className=' flex'>
                    <div className='flex-col m-3'>
                    <Controller
                          name="business"
                          defaultValue={vehicles.othervehicleinformation.business}
                          control={control}
                          rules={{
                            minLength: {
                              value: 3,
                              message: "Almenos 3 caracteres"
                            },
                            maxLength: {
                              value: 20,
                              message: "Maximo 20 caracteres"
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
                              color={errors.business ? "danger" : ""}
                              errorMessage={errors.business?.message}
                              className="max-w-xs"
                            />
                          )}
                        /> 
                    </div>
                    <div className='flex-col m-3'>
                      <Controller
                            name="series"
                            defaultValue={vehicles.othervehicleinformation.series}
                            control={control}
                            rules={{
                              minLength: {
                                value: 7,
                                message: "Almenos 7 caracteres"
                              },
                              maxLength: {
                                value: 17,
                                message: "Maximo 17 caracteres"
                              }
                            }}
                            render={({ field }) => (
                              <Input
                                {...field}
                                type="text"
                                label="Serie"
                                variant="bordered"
                                color={errors.series ? "danger" : ""}
                                errorMessage={errors.series?.message}
                                className="max-w-xs"
                              />
                            )}
                          /> 
                    </div>
                  </div>

                  <div className=' flex'>
                    <div className='flex-col m-3'>
                      <Controller
                              name="motor"
                              control={control}
                              defaultValue={vehicles.othervehicleinformation.motor}
                              rules={{
                                minLength: {
                                  value: 7,
                                  message: "Almenos 7 caracteres"
                                },
                                maxLength: {
                                  value: 12,
                                  message: "Maximo 12 caracteres"
                                }
                              }}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  type="text"
                                  label="motor"
                                  variant="bordered"
                                  color={errors.motor ? "danger" : ""}
                                  errorMessage={errors.motor?.message}
                                  className="max-w-xs"
                                />
                              )}
                          />
                    </div>
                    <div className='flex-col m-3'>
                      <Controller
                                name="chasis"
                                defaultValue={vehicles.othervehicleinformation.chassis}
                                control={control}
                                rules={{
                                  minLength: {
                                    value: 7,
                                    message: "Almenos 7 caracteres"
                                  },
                                  maxLength: {
                                    value: 18,
                                    message: "Maximo 18 caracteres"
                                  }
                                }}
                                render={({ field }) => (
                                  <Input
                                    {...field}
                                    type="text"
                                    label="chasis"
                                    variant="bordered"
                                    color={errors.chasis ? "danger" : ""}
                                    errorMessage={errors.chasis?.message}
                                    className="max-w-xs"
                                  />
                                )}
                            />
                    </div>
                  </div>

                  <div className=' flex'>
                    <div className='flex-col m-3'>
                        <Controller
                                  name="identificationCard"
                                  defaultValue={vehicles.othervehicleinformation.identificationCard}
                                  control={control}
                                  rules={{
                                    minLength: {
                                      value: 7,
                                      message: "Almenos 7 caracteres"
                                    },
                                    maxLength: {
                                      value: 12,
                                      message: "Maximo 12 caracteres"
                                    }
                                  }}
                                  render={({ field }) => (
                                    <Input
                                      {...field}
                                      type="number"
                                      label="Cedula del propietario"
                                      variant="bordered"
                                      color={errors.identificationCard ? "danger" : ""}
                                      errorMessage={errors.identificationCard?.message}
                                      className="max-w-xs"
                                    />
                                  )}
                              />
                    </div>
                    <div className='flex-col m-3'>
                      <Controller
                                name="register"
                                control={control}
                                defaultValue={vehicles.othervehicleinformation.register}
                                rules={{
                                  minLength: {
                                    value: 7,
                                    message: "Almenos 7 caracteres"
                                  },
                                  maxLength: {
                                    value: 12,
                                    message: "Maximo 20 caracteres"
                                  }
                                }}
                                render={({ field }) => (
                                  <Input
                                    {...field}
                                    type="text"
                                    label="Matricula a nombre de"
                                    variant="bordered"
                                    color={errors.register ? "danger" : ""}
                                    errorMessage={errors.register?.message}
                                    className="max-w-xs"
                                  />
                                )}
                            />
                    </div>
                  </div>

                  <div className=' flex'>
                    <div className='flex-col m-3'>
                      <Controller
                                name="capacity"
                                defaultValue={vehicles.othervehicleinformation.capacity}
                                control={control}
                                rules={{
                                  minLength: {
                                    value: 1,
                                    message: "Almenos 1 caracteres"
                                  },
                                  maxLength: {
                                    value: 2,
                                    message: "Maximo 2 caracteres"
                                  }
                                }}
                                render={({ field }) => (
                                  <Input
                                    {...field}
                                    type="text"
                                    label="Capacidad"
                                    variant="bordered"
                                    color={errors.capacity ? "danger" : ""}
                                    errorMessage={errors.capacity?.message}
                                    className="max-w-xs"
                                  />
                                )}
                            />
                    </div>
                    <div className='flex-col m-3 w-[200px] '>
                      <Controller
                            name='service'
                            defaultValue={vehicles.othervehicleinformation.service}
                            control={control}
                            rules={{
                            }}
                            render={({field}) => (
                              <Select
                                {...field}
                                label="Servicio"
                                variant="bordered"
                                color={errors.service ? "danger" : ""}
                                errorMessage={errors.service?.message}
                                className="max-w-xs"
                                onChange={(e) => {
                                  field.onChange(e);
                                }}
                              >
                                <SelectItem key='Publico'>Publico</SelectItem>
                                <SelectItem key='Privado'>Privado</SelectItem>
                              </Select>
                            )}
                          />
                    </div>
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
