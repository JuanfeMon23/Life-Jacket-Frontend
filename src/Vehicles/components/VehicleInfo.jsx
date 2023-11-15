import React from 'react'
import { Select, SelectItem, Button } from '@nextui-org/react';
import { ButtonAccept } from '../../components/ButtonAccept';
import { useForm , Controller } from 'react-hook-form';
import {Input} from "@nextui-org/react";
import { useVehicles } from '../context/vehiclesContext.jsx';
import { RequiredIcon } from '../../components/globalComponents/RequiredIcon.jsx';

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
                              message: "Máximo 6 caracteres"
                            }
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="text"
                              label="Placa del vehículo"
                              variant="bordered"
                              endContent={<RequiredIcon/>}
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
                              message: "Máximo 15 caracteres"
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
                              endContent={<RequiredIcon/>}
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
                              message: "Al menos 3 caracteres"
                            },
                            maxLength: {
                              value: 40,
                              message: "Máximo 40 caracteres"
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
                              endContent={<RequiredIcon/>}
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
                            endContent={<RequiredIcon/>}
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
                              message: "Al menos 3 caracteres"
                            },
                            maxLength: {
                              value: 40,
                              message: "Máximo 40 caracteres"
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
                              endContent={<RequiredIcon/>}
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
                              message: "Máximo 40 caracteres"
                            }
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="text"
                              label="Línea"
                              variant="bordered"
                              endContent={<RequiredIcon/>}
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
                              label="Tecnomecánica"
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
                              value: 15,
                              message: "Máximo 15 caracteres"
                            }
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="text"
                              label="Color"
                              variant="bordered"
                              endContent={<RequiredIcon/>}
                              color={errors.color ? "danger" : ""}
                              errorMessage={errors.color?.message}
                              className="max-w-xs"
                            />
                          )}
                        /> 
                    </div>
                    <div className=' flex-col m-3'>
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
                  </div>
                  
                  <div className=' flex'>
                    <div className='flex-col m-3'>
                    <Controller
                          name="business"
                          control={controlVehicle}
                          rules={{
                            minLength: {
                              value: 3,
                              message: "Al menos 3 caracteres"
                            },
                            maxLength: {
                              value: 20,
                              message: "Máximo 20 caracteres"
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
                            control={controlVehicle}
                            rules={{
                              minLength: {
                                value: 7,
                                message: "Al menos 7 caracteres"
                              },
                              maxLength: {
                                value: 17,
                                message: "Máximo 17 caracteres"
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
                              control={controlVehicle}
                              rules={{
                                minLength: {
                                  value: 7,
                                  message: "Al menos 7 caracteres"
                                },
                                maxLength: {
                                  value: 12,
                                  message: "Máximo 12 caracteres"
                                }
                              }}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  type="text"
                                  label="Motor"
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
                                control={controlVehicle}
                                rules={{
                                  minLength: {
                                    value: 7,
                                    message: "Al menos 7 caracteres"
                                  },
                                  maxLength: {
                                    value: 18,
                                    message: "Máximo 18 caracteres"
                                  }
                                }}
                                render={({ field }) => (
                                  <Input
                                    {...field}
                                    type="text"
                                    label="Chasis"
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
                                  control={controlVehicle}
                                  rules={{
                                    minLength: {
                                      value: 7,
                                      message: "Al menos 7 caracteres"
                                    },
                                    maxLength: {
                                      value: 12,
                                      message: "Máximo 12 caracteres"
                                    }
                                  }}
                                  render={({ field }) => (
                                    <Input
                                      {...field}
                                      type="number"
                                      label="Cédula del propietario"
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
                                control={controlVehicle}
                                rules={{
                                  minLength: {
                                    value: 7,
                                    message: "Al menos 7 caracteres"
                                  },
                                  maxLength: {
                                    value: 12,
                                    message: "Máximo 20 caracteres"
                                  }
                                }}
                                render={({ field }) => (
                                  <Input
                                    {...field}
                                    type="text"
                                    label="Matrícula a nombre de"
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
                                control={controlVehicle}
                                rules={{
                                  minLength: {
                                    value: 1,
                                    message: "Al menos 1 caracteres"
                                  },
                                  maxLength: {
                                    value: 2,
                                    message: "Máximo 2 caracteres"
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
                            control={controlVehicle}
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
                                <SelectItem key='Publico'>Público</SelectItem>
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
    </div>
  )
}
