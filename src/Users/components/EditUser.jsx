import React, { useEffect, useState } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, Select, SelectItem} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {useForm, Controller} from 'react-hook-form';
import {AiTwotoneEdit} from '../../../node_modules/react-icons/ai';
import { useUsers } from '../Context/userContext';
import { toast } from "react-toastify";
import { useRoles } from '../../Roles/context/rolesContext';
import { RequiredIcon } from '../../components/globalComponents/RequiredIcon.jsx';
import { ButtonAccept } from '../../components/ButtonAccept';

export function EditUser(props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const user = props.user
    const {register , setValue, handleSubmit, formState:{errors}, control, reset} = useForm({});
    const {updateUser } = useUsers();
    const {roles} = useRoles();

    const onSubmit = (data) => {    
      { onSubmit ? updateUser(user.idUser, {...data}) && reset :  ''}
    };

    const handleEvent = (event) => {
      event.preventDefault();
      toast.error('No puedes actualizar un usuario inhabilitado' ,{
        autoClose : 1500,
        position: toast.POSITION.TOP_CENTER
    });
    };


  return (
    <div className='flex'>
      {user.userStatus === "true" ? <Button title="Editar usuario" isIconOnly onPress={onOpen}className=' bg-gradient-to-r from-[#D99C23] to-[#D45229] hover:bg-[#A37D1A] rounded-lg text-white mr-2 font-bold '>{<AiTwotoneEdit className='text-white text-2xl'/>}</Button>
       : <Button isIconOnly title="Editar usuario" className=" mr-2" onClick={handleEvent}>{<AiTwotoneEdit className='text-white text-2xl'/>}</Button>}
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
            <ModalContent>
                {(onclose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-3">Editar usuario</ModalHeader>
                    <ModalBody>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className=' flex'>
                            <div className="flex-col m-3 justify-center items-center">
                            <Controller
                                  name='idRolUser'
                                  control={control}
                                  rules={{
                                    required : 'Campo obligatorio'
                                  }}
                                  render={({field}) => (
                                    <Select
                                      {...field}
                                      label="Rol"
                                      variant="bordered"
                                      endContent={<RequiredIcon/>}
                                      color={errors.idRolUser ? "danger" : ""}
                                      errorMessage={errors.idRolUser?.message}
                                      className=" md:w-[23rem]"
                                      onChange={(e) => {
                                        field.onChange(e);
                                      }}
                                    >
                                    {roles.map((roles) => (
                                      <SelectItem key={roles.idRol} value={roles.rolName}>
                                          {roles.rolName}
                                      </SelectItem>
                                  ))}
                                    </Select>
                                  )}
                                />
                          </div>  
                          </div>
                        <div className="flex ">
                          <div className=' flex-col m-3 w-[200px]'>
                          <Controller
                              name="userName"
                              control={control}
                              defaultValue={user.userName}
                              rules={{
                                required: "Campo requerido",
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
                                  color={errors.userName ? "danger" : ""}
                                  errorMessage={errors.userName?.message}
                                  className="max-w-xs"
                                />
                              )}
                            />
                          </div>

                          <div className=' flex-col m-3'>
                          <Controller
                              name="userLastName"
                              control={control}
                              defaultValue={user.userLastName}
                              rules={{
                                required: "Campo requerido",
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
                                  color={errors.userLastName ? "danger" : ""}
                                  errorMessage={errors.userLastName?.message}
                                  className="max-w-xs"
                                />
                              )}
                            />
                          </div>
                        
                      </div>
                        <div className=' flex'>
                            <div className=' flex-col m-3'>
                                <Controller
                                name="userEmail"
                                control={control}
                                defaultValue={user.userEmail}
                                rules={{
                                  required: "Campo requerido",
                                  pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Correo inválido"
                                  }
                                }}
                                render={({ field }) => (
                                  <Input
                                    {...field}
                                    type="email"
                                    label="Correo electrónico"
                                    variant="bordered"
                                    endContent={<RequiredIcon/>}
                                    color={errors.userEmail ? "danger" : ""}
                                    errorMessage={errors.userEmail?.message}
                                    className="max-w-xs"
                                  />
                                )}
                              />
                            </div>
                            <div className='flex-col m-3'>
                                <Controller
                                name="userPhoneNumber"
                                control={control}
                                defaultValue={user.userPhoneNumber}
                                rules={{
                                  required: "Campo requerido",
                                  minLength : {
                                    value : 7 ,
                                    message : 'Al menos 7 números'
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
                                    endContent={<RequiredIcon/>}
                                    color={errors.userPhoneNumber? "danger" : ""}
                                    errorMessage={errors.userPhoneNumber?.message}
                                    className="max-w-xs"
                                  />
                                )}
                              />
                        </div>

                        </div>
                      

                      <div className=" flex">
                      <div className='flex-col m-3 '>
                        <Controller
                              name="userAddress"
                              control={control}
                              defaultValue={user.userAddress}
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
                                  color={errors.userAddress ? "danger" : ""}
                                  errorMessage={errors.userAddress?.message}
                                  className="max-w-xs"
                                />
                              )}
                            />
                        </div> 

                        <div className='flex-col m-3'> 
                          <Controller
                              name="userOtherPhoneNumber"
                              control={control}
                              defaultValue={user.userOtherPhoneNumber}
                              rules={{
                                required: "Campo requerido",
                                minLength : {
                                  value : 7 ,
                                  message : 'Al menos 7 números'
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
                                  label="Otro Télefono"
                                  variant="bordered"
                                  endContent={<RequiredIcon/>}
                                  color={errors.userOtherPhoneNumber? "danger" : ""}
                                  errorMessage={errors.userOtherPhoneNumber?.message}
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
