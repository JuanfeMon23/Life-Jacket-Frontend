import React from 'react'
import { Select, SelectItem, Button } from '@nextui-org/react';
import { ButtonAccept } from '../../components/ButtonAccept';
import { useForm , Controller } from 'react-hook-form';
import {Input} from "@nextui-org/react";
import { useVehicles } from '../context/vehiclesContext.jsx';

export  function VehicleInfo() {
    const { handleSubmit : handleSubmitVehicle, formState : {errors}, control : controlVehicle, reset : resetVehicle} = useForm();
    const {createVehicle} = useVehicles();

    const onSubmit = (data) => {   
        {onSubmit ? createVehicle({...data}) && resetVehicle : 2 }
    };
  return (
    <div>
        <form onSubmit={handleSubmitVehicle(onSubmit)}>
                  <div className=" flex">
                    <div className=' flex-col m-3'>
                    <Controller
                          name="licensePlate"
                          control={controlVehicle}
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
                              value={field.value ? field.value.toUpperCase() : field.value}
                              onChange={(e) => field.onChange(e.target.value.toUpperCase())}
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
                          control={controlVehicle}
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
                          control={controlVehicle}
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
                        control={controlVehicle}
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
                          control={controlVehicle}
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
                          control={controlVehicle}
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
                        control={controlVehicle}
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
                        control={controlVehicle}
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
                          control={controlVehicle}
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
                          control={controlVehicle}
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
                            control={controlVehicle}
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
                          name="technomechanics"
                          control={controlVehicle}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="date"
                              label="Tecnomecanica"
                              variant="bordered"
                              color={errors.technomechanics ? "danger" : ""}
                              errorMessage={errors.technomechanics?.message}
                              className="max-w-xs"
                            />
                          )}
                        /> 

                    </div>
                  </div>
                  <div className='flex'>
                  <div className=' flex-col m-3'>
                    <Controller
                          name="color"
                          control={controlVehicle}
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
                              label="Color"
                              variant="bordered"
                              color={errors.color ? "danger" : ""}
                              errorMessage={errors.color?.message}
                              className="max-w-xs"
                            />
                          )}
                        /> 
                    </div>

                    <div className='flex-col m-3'>
                    <Controller
                          name="vehiclePrice"
                          control={controlVehicle}
                          rules={{
                            required: "Campo requerido",
                            maxLength: {
                              value: 15,
                              message: "Maximo 15 caracteres"
                            },
                            minLength : {
                              value : 4,
                              message : " Minimo 4 Caracteres"
                            }
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="number"
                              label="Precio"
                              variant="bordered"                          
                              color={errors.vehiclePrice ? "danger" : ""}
                              errorMessage={errors.vehiclePrice?.message}
                              className="max-w-xs"
                            />
                          )}
                        /> 
                    </div>

                  </div>
                  
                  <div className=' m-3'>
                  <Controller
                          name="timingBelt"
                          control={controlVehicle}
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
                  <div className=' text-center my-3 '>
                    <ButtonAccept/>
                  </div>
                  
                </form>
    </div>
  )
}
