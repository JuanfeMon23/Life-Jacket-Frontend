import React, { useEffect, useState } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, user} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {useForm, Controller} from 'react-hook-form';
import { useUsers } from '../Context/userContext';
import {Select, SelectItem} from "@nextui-org/react";
import { useRoles } from '../../Roles/context/rolesContext';
import {AiOutlinePlusCircle} from 'react-icons/Ai';

export  function UserRegister() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {register , setValue, handleSubmit, formState:{errors}, control, reset} = useForm();
  const {createUser} = useUsers();
  const {roles} = useRoles();



  const onSubmit = (data) => {
      createUser(data);
      reset();
  };

  return (
    <div className='flex'>
      <Button endContent={<AiOutlinePlusCircle className=' text-2xl'/>} color="primary" variant="solid" onPress={onOpen} className=' text-white font-bold'>Agregar</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">Crear Usuario</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex ">
                      <div className=' flex-col m-3 w-[200px]'>
                        <Controller
                          name='userTypeDocument'
                          control={control}
                          rules={{
                            required : 'Campo obligatorio'
                          }}
                          render={({field}) => (
                            <Select
                              {...field}
                              label="Tipo de documento"
                              variant="bordered"
                              color={errors.userTypeDocument ? "danger" : ""}
                              errorMessage={errors.userTypeDocument?.message}
                              className="max-w-xs"
                              onChange={(e) => {
                                field.onChange(e);
                              }}
                            >
                              <SelectItem key='Cedula de ciudadania'>CC</SelectItem>
                            </Select>
                          )}
                        />
                      </div>

                      <div className=' flex-col m-3'>
                      <Controller
                        name="userDocument"
                        control={control}
                        rules={{
                          required: "Campo requerido",
                          minLength : {
                            value : 7 ,
                            message : 'Al menos 7 numeros'
                          },
                          maxLength : {
                            value : 12,
                            message : 'Maximo 12 números'
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
                          rules={{
                            required : 'Campo obligatorio'
                          }}
                          render={({field}) => (
                            <Select
                              {...field}
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
