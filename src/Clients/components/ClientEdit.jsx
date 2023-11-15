import React, { useEffect , useState} from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import { ButtonAccept } from '../../components/ButtonAccept';
import {useForm, Controller} from 'react-hook-form';
import { useClients } from '../context/clientsContext';
import {AiTwotoneEdit} from 'react-icons/Ai';
import { Select, SelectItem } from '@nextui-org/react';
import { toast } from "react-toastify";

export  function  ClientEdit(props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {register , handleSubmit, setValue,  formState:{errors}, control, reset} = useForm();
    const {updateClient} = useClients();
    const clients = props.client

    const onSubmit = (data) => {
        {onSubmit ? updateClient(clients.idClient, {...data}) && reset : '' }
    };

    const handleEvent = (event) => {
      event.preventDefault();
      toast.error('No puedes actualizar un cliente inhabilitado.' ,{
        autoClose : 1500,
        position: toast.POSITION.TOP_CENTER
    });
    };

  return (
    <div className='flex'>
    {clients.clientStatus === "true" ? <Button isIconOnly onPress={onOpen}className=' bg-gradient-to-r from-[#D99C23] to-[#D45229] rounded-lg text-white font-bold'>{<AiTwotoneEdit className='text-white text-2xl'/>}</Button>
    :  <Button isIconOnly onClick={handleEvent}>{<AiTwotoneEdit className='text-white text-2xl'/>}</Button>}   
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">Datos del cliente</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                              label="Dirección"
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
                            label="Teléfono"
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
                            label="Otro teléfono"
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
                              label="Otro contacto"
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
