import React, { useEffect, useState } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, user} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {useForm, Controller} from 'react-hook-form';
import { useUsers } from '../Context/userContext';
import {Select, SelectItem} from "@nextui-org/react";
import { useRoles } from '../../Roles/context/rolesContext';
import { useParams, useNavigate } from 'react-router-dom';
import {AiTwotoneEdit} from 'react-icons/Ai';



export  function UserRegister() {
const {isOpen, onOpen, onOpenChange} = useDisclosure();
const {register , setValue, handleSubmit, formState:{errors}, control} = useForm();
const {createUser , getUser, updateUser } = useUsers();
const navigate = useNavigate();
const params = useParams();
const {roles} = useRoles();


useEffect(() => {
  const loadUser = async () => {
  if (params.idUser) {
      const user = await getUser(params.idUser);
      setValue("userDocumentType",user.user.userDocumentType);
      setValue('userDocumentNumber', user.user.userDocumentNumber);
      setValue('userDepartment',user.user.userDepartment);
      setValue('userMunicipality',user.user.userMunicipality);
      setValue("userName", user.user.userName);
      setValue('userLastName',user.user.userLastName);
      setValue('userEmail',user.user.userEmail);
      setValue('userPassword',user.user.userPassword);
      setValue('userPhoneNumber',user.user.userPhoneNumber);
      setValue('userOtherPhoneNumber',user.user.userOtherPhoneNumber);
      setValue('userAddress',user.user.userAddress);
      setValue('idRolUser',user.user.idRolUser);
      };
  }
  loadUser();
  },[])

const onSubmit = (data) => {
  try {
   if(params.idUser) {
     updateUser(params.idUser, {...data}).then(response => {
      console.log(response);
     });
     navigate('/Users');
    } else {
      createUser(data);
      console.log(data);
     }
   } catch (error) {
   throw new Error;
   }
};

const [userDepartment, setUserDepartment] = useState('');
const [userMunicipality, setUserMunicipality] = useState(''); 



  return (
    <div className='flex'>
      <Button onPress={onOpen} className='absolute right-0 top-40 mx-6 my-20 bg-gradient-to-r from-cyan-500 to-blue-800 text-white font-bold'>{params.idUser ? <AiTwotoneEdit className='text-white text-2xl'/> : 'Registrar usuario' }</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">{params.idUser ? `Editar Usuario` : `Crear Usuario`}</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex ">
                      <div className=' flex-col m-3 w-[200px]'>
                      {/* <Controller
                            name="userDocument"
                            control={control}
                            defaultValue=""
                            rules={{ required: 'Este campo es requerido' }}
                            render={({ field }) => (
                              <Select {...field} variant="underlined" label='Tipo de documento'>
                                <SelectItem value="opcion1">Cedula de ciudadanía</SelectItem>
                                <SelectItem value="opcion2">Cedula de extranjería</SelectItem>
                                <SelectItem value="opcion2">Cedula de extranjería</SelectItem>
                              </Select>
                            )}
                          />
                          {errors.userDocument && <p className="text-red-500">{errors.userDocument.message}</p>} */}
                        <Select variant="underlined" label='Tipo de documento' id='userDocumentType' {...register("userDocumentType" , {required : true})} >
                          <SelectItem key='Cedula de ciudadania'>Cedula de ciudadanía</SelectItem>
                          <SelectItem key='Cedula de extranjería'>Cedula de extranjería</SelectItem>
                          <SelectItem key='Pasaporte'>Pasaporte</SelectItem>
                        </Select>
                        {errors.userDocumentType && <p className=' text-red-600'>Campo requerido</p>}
                      </div>

                      <div className=' flex-col m-3'>
                        <Input type="number" label="Numero documento" isClearable variant="underlined" id="userDocumentNumber"
                        {...register("userDocumentNumber" , {required : true})}  />
                        {errors.userDocumentNumber && <p className=' text-red-600 '>Campo requerido</p>}
                      </div>
                      
                  </div>

                  <div className=' flex'> 
                      <div className='flex-col m-3 w-[200px]'>
                      <Input type="text" variant="underlined" isClearable label='Departamento' id='userDepartment'
                        {...register("userDepartment" , {required : true})}  
                        />
                          {/* <Select
                            id='userDepartment'
                            {...register("userDepartment" , {required : true})}
                            onChange={(e) => setUserDepartment(e.target.value)}
                            value={userDepartment}
                            className='m-1'
                            variant='underlined'
                            label='Departamento'
                            >
                              {Deparments.map((index) => (
                                <SelectItem key={index.departamento} value={index.departamento}  >  
                                  {index.departamento}
                                </SelectItem>
                              ))}
                          </Select> */}
                          {errors.userDepartment && <p className=' text-red-600'>Campo requerido</p>} 
                      </div>

                      <div className='flex-col m-3 w-[200px]'>
                      <Input type="text" variant="underlined" isClearable label='Ciudad o municipio' id='userMunicipality'
                        {...register("userMunicipality" , {required : true})} /> 
                      
                        {/* <Select
                            className='m-1'
                            label='Ciudad o municipio'
                            variant='underlined'
                            disabled={!userDepartment}
                            id='userMunicipality'
                            onChange={(e) => setUserMunicipality(e.target.value)}
                            value={userMunicipality}
                            {...register("userMunicipality" , {required : true})}
                            >
                            {userDepartment &&
                                Deparments.find((department) => department.departamento === userDepartment)
                                    .ciudades.map((ciudad) => (
                                        <SelectItem key={ciudad} value={ciudad}>
                                            {ciudad}
                                        </SelectItem>
                                ))}
                        </Select> */}
                        {errors.userMunicipality && <p className=' text-red-600'>Campo requerido</p>} 
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
                      <Select label='Rol'  variant='underlined' {...register("idRolUser", {required : true})}>
                          {roles.map((roles) => (
                          <SelectItem key={roles.idRol} value={roles.rolName}>
                              {roles.rolName}
                          </SelectItem>
                          ))}
                      </Select>
                      {errors.idRolUser && <p className=' text-red-600'>Campo requerido</p>}
                  </div> 
                  </div>


                  <div className=' text-center my-3 '>
                    <button type='submit' className='bg-gradient-to-r from-cyan-500 to-blue-800 text-white font-bold w-20 h-10 rounded-lg'>{params.idUser ? "Actualizar" : "Crear"}</button>
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
