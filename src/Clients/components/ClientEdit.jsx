import React, { useEffect , useState} from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import { ButtonAccept } from '../../components/ButtonAccept';
import {useForm, Controller} from 'react-hook-form';
import { useClients } from '../context/clientsContext';
import {AiTwotoneEdit} from 'react-icons/Ai';
import { Select, SelectItem } from '@nextui-org/react';

export  function ClientEdit(props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {register , handleSubmit, setValue,  formState:{errors}, control} = useForm();
    const {updateClient} = useClients();
    const clients = props.client

    const onSubmit = (data) => {
        updateClient(clients.idClient, {...data});

    };


  return (
    <div className='flex'>
    <Button onPress={onOpen}className=' bg-gradient-to-r from-[#D99C23] to-[#D45229] rounded-lg text-white font-bold'>{<AiTwotoneEdit className='text-white text-2xl'/>}</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">Datos del cliente</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className=' flex'>
                    <div className=' flex-col m-3 w-[200px]'>
                    <Controller
                          name='clientTypeDocument'
                          control={control}
                          defaultValue={clients.clientTypeDocument}
                          rules={{
                            required : 'Campo obligatorio'
                          }}
                          render={({field}) => (
                            <Select
                              {...field}
                              type="text"
                              label="Tipo de documento"
                              variant="bordered"
                              color={errors.clientTypeDocument ? "danger" : ""}
                              errorMessage={errors.clientTypeDocument?.message}
                              className="max-w-xs"
                              onChange={(e) => {
                                field.onChange(e);
                              }}
                            >
                              <SelectItem key='Cedula de ciudadania'>Cedula de ciudadanía</SelectItem>
                              <SelectItem key='Cedula de extranjería'>Cedula de extranjería</SelectItem>
                              <SelectItem key='Pasaporte'>Pasaporte</SelectItem>
                            </Select>
                          )}
                        />

                    </div>
                    <div className=' flex-col m-3'>
                    <Controller
                        name="clientDocument"
                        control={control}
                        defaultValue={clients.clientDocument}
                        rules={{
                          required: "Campo requerido",
                          minLength : {
                            value : 7 ,
                            message : 'Al menos 7 numeros'
                          },
                          maxLength : {
                            value : 15 ,
                            message : 'Maximo 15 números'
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
                            label="Documento"
                            variant="bordered"
                            color={errors.clientDocument? "danger" : ""}
                            errorMessage={errors.clientDocument?.message}
                            className="max-w-xs"
                          />
                        )}
                      />
                    </div>

                  </div>

                  <div className=' flex'> 
                      <div className='flex-col m-3 w-[200px]'>
                      <Controller
                          name="clientDepartment"
                          control={control}
                          defaultValue={clients.clientDepartment}
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
                              color={errors.clientDepartment ? "danger" : ""}
                              errorMessage={errors.clientDepartment?.message}
                              className="max-w-xs"
                            />
                          )}
                        />
                      </div>

                      <div className='flex-col m-3 w-[200px]'>
                      <Controller
                          name="clientMunicipality"
                          control={control}
                          defaultValue={clients.clientMunicipality}
                          rules={{
                            required: "Nombres requeridos",
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
                              color={errors.clientMunicipality ? "danger" : ""}
                              errorMessage={errors.clientMunicipality?.message}
                              className="max-w-xs"
                            />
                          )}
                        />
                      </div>
                  </div>



                  <div className=" flex">
                    <div className=' flex-col m-3'>
                    <Controller
                          name="clientName"
                          control={control}
                          defaultValue={clients.clientName}
                          rules={{
                            required: "Nombres requeridos",
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
                              label="Nombres"
                              variant="bordered"
                              color={errors.clientName ? "danger" : ""}
                              errorMessage={errors.clientName?.message}
                              className="max-w-xs"
                            />
                          )}
                        />
                    </div>

                    <div className='flex-col m-3'>
                    <Controller
                          name="clientLastName"
                          control={control}
                          defaultValue={clients.clientLastName}
                          rules={{
                            required: "Apellidos requeridos",
                            minLength: {
                              value: 3,
                              message: "Almenos 6 caracteres"
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
                              label="Apellidos"
                              variant="bordered"
                              color={errors.clientLastName ? "danger" : ""}
                              errorMessage={errors.clientLastName?.message}
                              className="max-w-xs"
                            />
                          )}
                        />
                    </div>

                  </div>

                  <div className=' m-3'>
                  <Controller
                          name="clientAddress"
                          control={control}
                          defaultValue={clients.clientAddress}
                          rules={{
                            required: "Campo requerido"
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="text"
                              label="Dirreción"
                              variant="bordered"
                              color={errors.clientAddress ? "danger" : ""}
                              errorMessage={errors.clientAddress?.message}
                              className="max-w-xs"
                            />
                          )}
                        />
                  </div>

                  <div className=' flex'>
                    <div className='flex-col m-3'> 
                    <Controller
                        name="clientPhoneNumber"
                        control={control}
                        defaultValue={clients.clientPhoneNumber}
                        rules={{
                          required: "Campo requerido",
                          minLength : {
                            value : 7 ,
                            message : 'Al menos 7 numeros'
                          },

                          pattern: {
                            value: /^[0-9]*$/, // This pattern will only match numbers
                            message: "Solo números"
                          }
                        }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="number"
                            label="Telefono"
                            variant="bordered"
                            color={errors.clientPhoneNumber? "danger" : ""}
                            errorMessage={errors.clientPhoneNumber?.message}
                            className="max-w-xs"
                          />
                        )}
                      />
                    </div>

                    <div className=' flex-col m-3'>
                    <Controller
                        name="clientOtherPhoneNumber"
                        control={control}
                        defaultValue={clients.clientOtherPhoneNumber}
                        rules={{
                          required: "Campo requerido",
                          minLength : {
                            value : 7 ,
                            message : 'Al menos 7 numeros'
                          },

                          pattern: {
                            value: /^[0-9]*$/, // This pattern will only match numbers
                            message: "Solo números"
                          }
                        }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="number"
                            label="Otro Telefono"
                            variant="bordered"
                            color={errors.clientOtherPhoneNumber? "danger" : ""}
                            errorMessage={errors.clientOtherPhoneNumber?.message}
                            className="max-w-xs"
                          />
                        )}
                      />

                    </div>
                  </div>

                  <div className='m-3'>
                  <Controller
                          name="clientOtherContact"
                          control={control}
                          defaultValue={clients.clientOtherContact}
                          rules={{
                            required: "Nombres requeridos",
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
                              label="Otro Contacto"
                              variant="bordered"
                              color={errors.clientOtherContact ? "danger" : ""}
                              errorMessage={errors.clientOtherContact?.message}
                              className="max-w-xs"
                            />
                          )}
                        />
                  </div>


                  <div className=" flex">
                    
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
