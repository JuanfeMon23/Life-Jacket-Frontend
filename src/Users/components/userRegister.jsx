import React, { useEffect } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {useForm} from 'react-hook-form';
import { useUsers } from '../Context/userContext';
import {Select, SelectItem} from "@nextui-org/react";
import { useRoles } from '../../Roles/context/rolesContext';
import { useParams, useNavigate } from 'react-router-dom';


export  function UserRegister() {
const {isOpen, onOpen, onOpenChange} = useDisclosure();
const {register , setValue, handleSubmit, formState:{errors}} = useForm();
const {createUser , getUser, updateUser } = useUsers();
const params = useParams();
const {roles} = useRoles();

const onSubmit = (data) => {
  // createUser(data);
  try {
   if(params.idUser) {
     updateUser(params.idUser, {...data})
     console.log(data);
    } else {
      createUser(data);
       console.log(data);
     }
   } catch (error) {
   throw new Error;
   }
};

useEffect(() => {
  const loadUser = async () => {
   if (params.idUser) {
      const user = await getUser(params.idUser);
      setValue('userName', user.userName);
      setValue('userLastName', user.userName);
      setValue('userEmail', user.userEmail);
      setValue('userPassword', user.userPassword);
      setValue('userPhoneNumber', user.userPhoneNumber);
      setValue('userOtherPhoneNumber', user.userOtherPhoneNumber);
      setValue('userAddress', user.userAddress);
      // setValue('Rol', user.idRol);
    };
    loadUser();
   }
},[])

  return (
    <div className='flex'>
    <Button onPress={onOpen}className='absolute right-0 top-40 mx-6 my-20 bg-gradient-to-r from-cyan-500 to-blue-800 text-white font-bold'>Registrar usuario</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">Datos del usuario</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex ">
                    <div className=' flex-col mx-3'>
                      <Input type="text" variant="underlined" isClearable  label='Nombres' id='userName'
                      {...register("userName" , {required : true})}/>
                      {errors.userName && <p className=' text-red-600'>Campo requerido</p>}
                    </div>

                    <div className=' flex-col mx-3'>
                    <Input type="text" label="Apellidos" isClearable variant="underlined" id="userLastName"
                    {...register("userLastName" , {required : true})}/>
                    {errors.userLastName && <p className=' text-red-600 '>Campo requerido</p>}
                    </div>
                    
                  </div>

                  <div className=" flex">
                    <div className='flex-col m-3'>
                    <Input type="email" label="Email" isClearable variant="underlined" id='userEmail'
                    {...register("userEmail" , {required : true})}/>
                    {errors.userEmail && <p className=' text-red-600'>Campo requerido</p>}
                    </div>


                    <div className='flex-col m-3'> 
                      <Input type="password" label="Password"isClearable  variant="underlined" id='userPassword'
                    {...register("userPassword" , {required : true})}/>
                    {errors.userPassword && <p className=' text-red-600'>Campo requerido</p>}
                    </div>
                  </div>

                  <div className=" flex">
                    <div className='flex-col m-3'>
                    <Input type="text" label="Telefono" isClearable variant="underlined" id='userPhoneNumber'
                    {...register("userPhoneNumber" , {required : true})}/>
                    {errors.userPhoneNumber && <p className=' text-red-600'>Campo requerido</p>}
                    </div>


                    <div className='flex-col m-3'> 
                      <Input type="text" label="Otro Telefono" isClearable  variant="underlined" id='userOtherPhoneNumber'
                    {...register("userOtherPhoneNumber" , {required : true})}/>
                    {errors.userOtherPhoneNumber && <p className=' text-red-600'>Campo requerido</p>}
                    </div>
                  </div>

                  <div className=" flex">
                    <div className='flex-col '>
                      <Input type="text" label="Dirección" isClearable variant="underlined" id='userAddress'
                      {...register("userAddress" , {required : true})}/>
                      {errors.userAddress && <p className=' text-red-600'>Campo requerido</p>}
                    </div>     

                    <div className='flex-col mx-3 w-60'>
                      <Select label='Rol' variant='underlined' {...register("idRolUser", {required : true})}>
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
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
