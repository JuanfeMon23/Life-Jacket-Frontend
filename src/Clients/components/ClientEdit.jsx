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
import { RequiredIcon } from '../../components/globalComponents/RequiredIcon.jsx';

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
    {clients.clientStatus === "true" ? <Button title='Editar cliente' isIconOnly onPress={onOpen}className=' bg-gradient-to-r from-[#D99C23] to-[#D45229] rounded-lg text-white font-bold mr-2'>{<AiTwotoneEdit className='text-white text-2xl'/>}</Button>
    :  <Button title='Editar cliente' className=' mr-2' isIconOnly onClick={handleEvent}>{<AiTwotoneEdit className='text-white text-2xl'/>}</Button>}   
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">Editar cliente</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>

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
                              value: 20,
                              message: "Máximo 20 caracteres"
                            },
                            pattern: {
                              value: /^(?!.* {3})[^\s]+(?:\s[^\s]+)*$/,
                              message: "No más de dos espacios consecutivos"
                            }
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="text"
                              label="Nombres"
                              variant="bordered"
                              endContent={<RequiredIcon/>}
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
                              value: 20,
                              message: "Máximo 20 caracteres"
                            },
                            pattern: {
                              value: /^(?!.* {3})[^\s]+(?:\s[^\s]+)*$/,
                              message: "No más de dos espacios consecutivos"
                            }
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="text"
                              label="Apellidos"
                              variant="bordered"
                              endContent={<RequiredIcon/>}
                              color={errors.clientLastName ? "danger" : ""}
                              errorMessage={errors.clientLastName?.message}
                              className="max-w-xs"
                            />
                          )}
                        />
                    </div>

                  </div>

                  <div className=' flex'>
                    <div className='flex-col m-3'>
                      <Controller
                            name="clientAddress"
                            control={control}
                            defaultValue={clients.clientAddress}
                            rules={{
                              required: "Campo requerido",
                              pattern: {
                                value: /^(?!.* {3})[^\s]+(?:\s[^\s]+)*$/,
                                message: "No más de dos espacios consecutivos"
                              }
                            }}
                            render={({ field }) => (
                              <Input
                                {...field}
                                type="text"
                                label="Dirección"
                                variant="bordered"
                                endContent={<RequiredIcon/>}
                                color={errors.clientAddress ? "danger" : ""}
                                errorMessage={errors.clientAddress?.message}
                                className="max-w-xs"
                              />
                            )}
                          />
                    </div>
                    <div className='flex-col m-3'>
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
                                value: /^(?!.* {3})[^\s]+(?:\s[^\s]+)*$/,
                                message: "No más de dos espacios consecutivos"
                              }
                            }}
                            render={({ field }) => (
                              <Input
                                {...field}
                                type="text"
                                label="Otro contacto"
                                variant="bordered"
                                endContent={<RequiredIcon/>}
                                color={errors.clientOtherContact ? "danger" : ""}
                                errorMessage={errors.clientOtherContact?.message}
                                className="max-w-xs"
                              />
                            )}
                          />
                    </div>

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
                            message : 'Al menos 7 números'
                          },
                          maxLength : {
                            value : 12,
                            message : 'Máximo 12 números'
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
                            label="Teléfono"
                            variant="bordered"
                            endContent={<RequiredIcon/>}
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
                            message : 'Al menos 7 números'
                          },
                          maxLength : {
                            value : 12,
                            message : 'Máximo 12 números'
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
                            label="Otro teléfono"
                            variant="bordered"
                            endContent={<RequiredIcon/>}
                            color={errors.clientOtherPhoneNumber? "danger" : ""}
                            errorMessage={errors.clientOtherPhoneNumber?.message}
                            className="max-w-xs"
                          />
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
