import React, { useEffect, useState } from 'react'
import {Input, ModalContent, ModalBody, useDisclosure, Modal} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {useForm, Controller} from 'react-hook-form';
import {Select, SelectItem} from "@nextui-org/react";
import { useParams} from 'react-router-dom';
import { useUsers } from '../Context/userContext';
import { useRoles } from '../../Roles/context/rolesContext';

export function EditUserContent() {
    const {updateUser, getUser} = useUsers();
    const {register , setValue, handleSubmit, formState:{errors}, control} = useForm();
    const {roles} = useRoles();
    const params = useParams();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    
    const onSubmit = () => {
           updateUser();
    }

    useEffect(() => {
        const loadUser = async () => {
        if (params.idUser) {
            const user = await getUser(params.idUser);
            console.log(user);
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

  return (
      <ModalBody>
      <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex ">
                        <div className=' flex-col m-3 w-[200px]'>
                        <Controller
                            name="nombre"
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
                          <Select variant="underlined" label='Tipo de documento' id='userDocumentType'  onChange={(e) => data.userDocumentType} {...register("userDocumentType" , {required : true})} >
                            <SelectItem key='Cedula de ciudadania'>Cedula de ciudadanía</SelectItem>
                            <SelectItem key='Cedula de extranjería'></SelectItem>
                            <SelectItem key='Pasaporte'>Pasaporte</SelectItem>
                          </Select>
                          {errors.userDocumentType && <p className=' text-red-600'>Campo requerido</p>}
                        </div>

                        <div className=' flex-col m-3'>
                          <Input type="number" label="Numero documento" isClearable variant="underlined" id="userDocumentNumber" onChange={(e) => data.userDocumentNumber}
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
                        <Input type="text" label="Nombres" isClearable variant="underlined" id="userName"
                          {...register("userName" , {required : true})} 
                          />
                          {errors.userName && <p className=' text-red-600'>Campo requerido</p>}                      
                        </div>

                        <div className=' flex-col m-3'>
                          <Input type="text" label="Apellidos" isClearable variant="underlined" id="userLastName"
                          {...register("userLastName" , {required : true})}  />
                          {errors.userLastName && <p className=' text-red-600 '>Campo requerido</p>}
                        </div>
                      
                    </div>

                    <div className=" flex">
                      <div className='flex-col m-3'>
                      <Input type="email" label="Email"  isClearable variant="underlined" id='userEmail'
                      {...register("userEmail" , {required : true})}/>
                      {errors.userEmail && <p className=' text-red-600'>Campo requerido</p>}
                      </div>


                      <div className='flex-col m-3'> 
                        <Input type="password" label="Password"isClearable   variant="underlined" id='userPassword'
                      {...register("userPassword" , {required : true})}/>
                      {errors.userPassword && <p className=' text-red-600'>Campo requerido</p>}
                      </div>
                    </div>

                    <div className=" flex">
                      <div className='flex-col m-3'>
                      <Input type="text" label="Telefono"  isClearable variant="underlined" id='userPhoneNumber'
                      {...register("userPhoneNumber" , {required : true})}/>
                      {errors.userPhoneNumber && <p className=' text-red-600'>Campo requerido</p>}
                      </div>


                      <div className='flex-col m-3'> 
                        <Input type="text" label="Otro Telefono"  isClearable  variant="underlined" id='userOtherPhoneNumber'
                      {...register("userOtherPhoneNumber" , {required : true})}/>
                      {errors.userOtherPhoneNumber && <p className=' text-red-600'>Campo requerido</p>}
                      </div>
                    </div>

                    <div className=" flex">
                      <div className='flex-col m-3 '>
                        <Input type="text" label="Dirección"  isClearable variant="underlined" id='userAddress'
                        {...register("userAddress" , {required : true})}/>
                        {errors.userAddress && <p className=' text-red-600'>Campo requerido</p>}
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
                      <button type='submit' className='bg-gradient-to-r from-cyan-500 to-blue-800 text-white font-bold w-20 h-10 rounded-lg'>Crear</button>
                    </div>
                    
                  </form>
      </ModalBody>
  )
}
