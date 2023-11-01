import React, { useEffect, useState } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {useForm, Controller} from 'react-hook-form';
import {AiTwotoneEdit} from 'react-icons/Ai';
import { useUsers } from '../Context/userContext';
import {Select, SelectItem} from "@nextui-org/react";
import { toast } from "react-toastify";
import { useRoles } from '../../Roles/context/rolesContext';

export function EditUser(props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {register , setValue, handleSubmit, formState:{errors}, control} = useForm();
    const {updateUser } = useUsers();
    const {roles} = useRoles();
    const user = props.user

    const onSubmit = (data, event) => {
        updateUser(user.idUser, data)
        event.preventDefault();
    };

    const handleEvent = (event) => {
      event.preventDefault();
      toast.error('No puedes actualizar un usuario inhabilitado.' ,{
        autoClose : 1500,
        position: toast.POSITION.TOP_CENTER
    });
    };


  return (
    <div className='flex'>
      {user.userStatus === true ? <Button isIconOnly onPress={onOpen}className=' bg-gradient-to-r from-[#D99C23] to-[#D45229] hover:bg-[#A37D1A] rounded-lg text-white font-bold '>{<AiTwotoneEdit className='text-white text-2xl'/>}</Button>
       : <Button isIconOnly onClick={handleEvent}>{<AiTwotoneEdit className='text-white text-2xl'/>}</Button>}
        
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
            <ModalContent>
                {(onclose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-3">Editar usuario</ModalHeader>
                    <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex ">
                      <div className=' flex-col m-3 w-[200px]'>
                        <Controller
                          name='userTypeDocument'
                          control={control}
                          defaultValue={user.userTypeDocument}
                          rules={{
                            required : 'Campo obligatorio'
                          }}
                          render={({field}) => (
                            <Select
                              {...field}
                              type="text"
                              label="Tipo de documento"
                              variant="bordered"
                              color={errors.userTypeDocument ? "danger" : ""}
                              errorMessage={errors.userTypeDocument?.message}
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
                        name="userDocument"
                        control={control}
                        defaultValue={user.userDocument}
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
                            color={errors.userDocument? "danger" : ""}
                            errorMessage={errors.userDocument?.message}
                            className="max-w-xs"
                          />
                        )}
                      />
                      </div>
                      
                  </div>

                  <div className=' flex'> 
                      <div className='flex-col m-3 w-[200px]'>
                      <Controller
                          name="userDepartment"
                          control={control}
                          defaultValue={user.userDepartment}
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
                              label="Departamento"
                              variant="bordered"
                              color={errors.userDepartment ? "danger" : ""}
                              errorMessage={errors.userDepartment?.message}
                              className="max-w-xs"
                            />
                          )}
                        /> 
                      </div>

                      <div className='flex-col m-3 w-[200px]'>
                      <Controller
                          name="userMunicipality"
                          control={control}
                          defaultValue={user.userMunicipality}
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
                              color={errors.userMunicipality ? "danger" : ""}
                              errorMessage={errors.userMunicipality?.message}
                              className="max-w-xs"
                            />
                          )}
                        />
                      </div>
                  </div>


                    <div className="flex ">
                      <div className=' flex-col m-3'>
                      <Controller
                          name="userName"
                          control={control}
                          defaultValue={user.userName}
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
                              color={errors.userLastName ? "danger" : ""}
                              errorMessage={errors.userLastName?.message}
                              className="max-w-xs"
                            />
                          )}
                        />
                      </div>
                    
                  </div>

                  <div className=" flex">
                    <div className='flex-col m-3'>
                    <Controller
                        name="userEmail"
                        control={control}
                        defaultValue={user.userEmail}
                        rules={{
                          required: "Email requerido",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Email invalido"
                          }
                        }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            type="email"
                            label="Email"
                            variant="bordered"
                            color={errors.userEmail ? "danger" : ""}
                            errorMessage={errors.userEmail?.message}
                            className="max-w-xs"
                          />
                        )}
                      />
                    </div>


                    <div className='flex-col m-3'> 
                    <Controller
                      name="userPassword"
                      control={control}
                      defaultValue={user.userPassword}
                      rules={{
                        required: "Contraseña requerida",
                        minLength: {
                          value: 8,
                          message: "Al menos 8 caracteres"
                        },
                        pattern: {
                          value: /^(?=.*[A-Z])/,
                          message: "Al menos una letra mayúscula"
                        },
                        pattern : {
                          value :  /^(?=.*[!@#$%^&*])/,
                          message : 'Almenos un caracter especial'
                        }
                      }}
                      render={({ field }) => (
                        <Input
                          {...field}
                          type="password"
                          label="Contraseña"
                          variant="bordered"
                          color={errors.userPassword ? "danger" : ""}
                          errorMessage={errors.userPassword?.message}
                          className="max-w-xs"
                        />
                      )}
                    />
                    </div>
                  </div>

                  <div className=" flex">
                    <div className='flex-col m-3'>
                        <Controller
                        name="userPhoneNumber"
                        control={control}
                        defaultValue={user.userPhoneNumber}
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
                            color={errors.userPhoneNumber? "danger" : ""}
                            errorMessage={errors.userPhoneNumber?.message}
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
                            color={errors.userOtherPhoneNumber? "danger" : ""}
                            errorMessage={errors.userOtherPhoneNumber?.message}
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
                            required: "Campo requerido"
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="text"
                              label="Dirreción"
                              variant="bordered"
                              color={errors.userAddress ? "danger" : ""}
                              errorMessage={errors.userAddress?.message}
                              className="max-w-xs"
                            />
                          )}
                        />
                    </div>     

                    <div className='flex-col m-3 w-[200px]'>
                    <Controller
                          name='idRolUser'
                          control={control}
                          defaultValue={user.idRol}
                          rules={{
                            required : 'Campo obligatorio'
                          }}
                          render={({field}) => (
                            <Select
                              {...field}
                              type="text"
                              label="Rol"
                              variant="bordered"
                              color={errors.idRolUser ? "danger" : ""}
                              errorMessage={errors.idRolUser?.message}
                              className="max-w-xs"
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


                  <div className=' text-center my-3 '>
                    <button type='submit' className='bg-gradient-to-r from-cyan-500 to-blue-800 text-white font-bold w-20 h-10 rounded-lg'>Editar</button>
                  </div>
                  
                </form> 
                    </>
                )}
            </ModalContent>
        </Modal>
    </div>
  )
}
