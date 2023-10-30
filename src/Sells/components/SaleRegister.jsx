import React,{useState, useEffect} from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input, Button, Select, SelectItem, Textarea} from "@nextui-org/react";
import {useForm, Controller} from 'react-hook-form';
import { useClients } from '../../Clients/context/clientsContext';
import { useVehicles } from '../../Vehicles/context/vehiclesContext';
import { useParams, useNavigate } from 'react-router-dom';
import { useSells } from '../context/sellsContext';


export function SaleRegister() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {register , setValue, handleSubmit, formState:{errors}, control, reset} = useForm();
    const {createSell} = useSells();
    const {clients} = useClients();
    const {vehicles} = useVehicles();

    const onSubmit = (data, e) => {
        { onSubmit ? createSell(data) && reset() : 2 }        
    }
  return (
    <div className='flex'>
    <Button onPress={onOpen}className='absolute right-0 top-15 m-5 bg-gradient-to-r from-cyan-500 to-blue-800 text-white font-bold'>Registrar</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">Datos de la venta</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=' flex'>
                        <div className='flex-col m-3 w-[200px]'>
                        <Controller
                              name='idClientSale'
                              control={control}
                              rules={{
                                required : 'Campo obligatorio'
                              }}
                              render={({field}) => (
                                <Select
                                  {...field}
                                  label="Documento del cliente"
                                  variant="bordered"
                                  color={errors.idClientSale ? "danger" : ""}
                                  errorMessage={errors.idClientSale?.message}
                                  className="max-w-xs"
                                  onChange={(e) => {
                                    field.onChange(e);
                                  }}
                                >
                                  {clients.filter(client => client.clientStatus === true).map((client) => (
                                    <SelectItem key={client.idClient} value={client.clientDocument}>
                                        {client.clientDocument}
                                    </SelectItem>
                                  ))}
                                  </Select>
                              )}
                            />
                        </div>

                        <div className='flex-col m-3 w-[200px]'>
                        <Controller
                              name='idVehicleSale'
                              control={control}
                              rules={{
                                required : 'Campo obligatorio'
                              }}
                              render={({field}) => (
                                <Select
                                  {...field}
                                  label="Placa del vehículo"
                                  variant="bordered"
                                  color={errors.idVehicleSale ? "danger" : ""}
                                  errorMessage={errors.idVehicleSale?.message}
                                  className="max-w-xs"
                                  onChange={(e) => {
                                    field.onChange(e);
                                  }}
                                >
                                {vehicles.filter(vehicles => vehicles.vehicleStatus === true).map((vehicles) => (
                                    <SelectItem key={vehicles.idVehicle} value={vehicles.licensePlate}>
                                        {vehicles.licensePlate}
                                    </SelectItem>
                                  ))}
                                  </Select>
                              )}
                            />
                        </div>
                    </div>

                    <div className=' flex'>
                        <div className=' flex-col m-3 w-[200px]'>
                        <Controller
                              name="saleDate"
                              control={control}
                              rules={{
                                required : 'Campo obligatorio'
                              }}
                              render={({ field }) => (
                                <Input
                                  {...field}
                                  type="datetime-local"
                                  label="Fecha de compra"
                                  variant="bordered"
                                  color={errors.saleDate ? "danger" : ""}
                                  errorMessage={errors.saleDate?.message}
                                  className="max-w-xs"
                                />
                            )}
                          /> 
                        </div>

                        <div className=' flex-col m-3'>
                        <Controller
                              name="saleFinalPrice"
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
                                  label="Precio de venta"
                                  variant="bordered"
                                  color={errors.saleFinalPrice? "danger" : ""}
                                  errorMessage={errors.saleFinalPrice?.message}
                                  className="max-w-xs"
                                />
                              )}
                            />
                        </div>  

                    </div>

                    <div className=' flex'>
                        <div className=' flex-col m-3'>
                        <Controller
                          name="saleDepartment"
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
                              label="Departamento"
                              variant="bordered"
                              color={errors.saleDepartment ? "danger" : ""}
                              errorMessage={errors.saleDepartment?.message}
                              className="max-w-xs"
                            />
                          )}
                        /> 
                        </div>

                        <div className=' flex-col m-3'>
                        <Controller
                          name="saleMunicipality"
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
                              label="Ciudad o municipio"
                              variant="bordered"
                              color={errors.saleMunicipality ? "danger" : ""}
                              errorMessage={errors.saleMunicipality?.message}
                              className="max-w-xs"
                            />
                          )}
                        />
                        </div>  

                    </div>

                    <div className=' m-3'>
                    <Controller
                          name="salePecuniaryPenalty"
                          control={control}
                          rules={{
                            required: "Campo requerido"
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="number"
                              label="Sanción pecunaria"
                              variant="bordered"
                              color={errors.salePecuniaryPenalty ? "danger" : ""}
                              errorMessage={errors.salePecuniaryPenalty?.message}
                              className="max-w-xs"
                            />
                          )}
                        />
                    </div>

                    <div className=' m-3'>
                    <Controller
                              name="saleLimitations"
                              control={control}
                              rules={{
                                required: "Campo requerido",
                                minLength: {
                                  value: 3,
                                  message: "Almenos 3 caracteres"
                                },
                                maxLength: {
                                  value: 200,
                                  message: "Maximo 200 caracteres"
                                }
                              }}
                              render={({ field }) => (
                                <Textarea
                                  {...field}
                                  type="text"
                                  label="Limitaciones"
                                  variant="bordered"
                                  color={errors.saleLimitations ? "danger" : ""}
                                  errorMessage={errors.saleLimitations?.message}
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
