import React from 'react'
import { Select, SelectItem, Button } from '@nextui-org/react';
import { ButtonAccept } from '../../components/ButtonAccept';
import { useForm , Controller } from 'react-hook-form';
import {Input} from "@nextui-org/react";
import { useVehicles } from '../context/vehiclesContext.jsx';

export  function VehicleDetail() {
    const { handleSubmit : handleSubmitVehicle, formState : {errors}, control : controlVehicle, reset : resetVehicle} = useForm();
    const {createVehicleDetail, vehicles} = useVehicles();

    const handleDetail = (data) => {
        {handleDetail ? createVehicleDetail(data) && resetVehicle : 2 }
        console.log(data)
      };

  return (
    <div>
        <form onSubmit={handleSubmitVehicle(handleDetail)}>
                    <div className=' m-3'>
                    <Controller
                          name='idVehicleOtherVehicleInformation'
                          control={controlVehicle}
                          rules={{
                            required : 'Campo obligatorio'
                          }}
                          render={({field}) => (
                            <Select
                              {...field}
                              label="Placa del vehiculo"
                              variant="bordered"
                              color={errors.idVehicleOtherVehicleInformation ? "danger" : ""}
                              errorMessage={errors.idVehicleOtherVehicleInformation?.message}
                              className="max-w-xs"
                              onChange={(e) => {
                                field.onChange(e);
                              }}
                            >
                            {vehicles.map((vehicles) => (
                              <SelectItem key={vehicles.idVehicle} value={vehicles.licensePlate}>
                                  {vehicles.licensePlate}
                              </SelectItem>
                          ))}
                            </Select>
                          )}
                        />
                    </div>
                  <div className=' flex'>
                    <div className='flex-col m-3'>
                    <Controller
                          name="business"
                          control={controlVehicle}
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
                            control={controlVehicle}
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
                              control={controlVehicle}
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
                                control={controlVehicle}
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
                                  control={controlVehicle}
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
                                control={controlVehicle}
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
                                control={controlVehicle}
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
    </div>
  )
}
