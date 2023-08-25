import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Select, SelectSection, SelectItem} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import { ButtonAccept } from '../../components/ButtonAccept';
import {useForm} from 'react-hook-form';
import { useUsers } from '../Context/userContext';
import { SelectRoles } from '../../Roles/components/SelectRoles';

export  function UserRegister() {
const {isOpen, onOpen, onOpenChange} = useDisclosure();
const {register , handleSubmit, formState:{errors}} = useForm();
const {createUser } = useUsers();

const onSubmit = (data) => {
  createUser(data);
  console.log(data);
};

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
                      <Input type="text" variant="underlined" label='Nombres' id='userName'
                      {...register("userName" , {required : true})}/>
                      {errors.userName && <p className=' text-red-600'>Campo requerido</p>}
                    </div>

                    <div className=' flex-col mx-3'>
                    <Input type="text" label="Apellidos"  variant="underlined" id="userLastName"
                    {...register("userLastName" , {required : true})}/>
                    {errors.userLastName && <p className=' text-red-600 '>Campo requerido</p>}
                    </div>
                    
                  </div>

                  <div className=" flex">
                    <div className='flex-col m-3'>
                    <Input type="email" label="Email" variant="underlined" id='userEmail'
                    {...register("userEmail" , {required : true})}/>
                    {errors.userEmail && <p className=' text-red-600  '>Campo requerido</p>}
                    </div>


                    <div className='flex-col m-3'> 
                      <Input type="password" label="Password" variant="underlined" id='userPassword'
                    {...register("userPassword" , {required : true})}/>
                    {errors.userPassword && <p className=' text-red-600 '>Campo requerido</p>}
                    </div>
                  </div>

                  <div className=" flex">
                    <div className='flex-col m-3'>
                    <Input type="text" label="Telefono" variant="underlined" id='userPhoneNumber'
                    {...register("userPhoneNumber" , {required : true})}/>
                    {errors.userPhoneNumber && <p className=' text-red-600  '>Campo requerido</p>}
                    </div>


                    <div className='flex-col m-3'> 
                      <Input type="text" label="Otro Telefono" variant="underlined" id='userOtherPhoneNumber'
                    {...register("userOtherPhoneNumber" , {required : true})}/>
                    {errors.userOtherPhoneNumber && <p className=' text-red-600'>Campo requerido</p>}
                    </div>
                  </div>

                  <div className=" flex">
                    <div className='flex-col m-3'>
                      <Input type="text" label="Dirección" variant="underlined" id='userAddress'
                      {...register("userAddress" , {required : true})}/>
                      {errors.userAddress && <p className=' text-red-600'>Campo requerido</p>}
                    </div>      
                  </div>
                  <SelectRoles id='idRolName'/>
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
