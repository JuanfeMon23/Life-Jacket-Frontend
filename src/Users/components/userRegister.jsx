import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Select, SelectSection, SelectItem} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import { ButtonAccept } from '../../components/ButtonAccept';
import {useForm} from 'react-hook-form';
import { useUsers } from '../Context/userContext';

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
    <Button onPress={onOpen}className='absolute right-0 mx-6 my-20 bg-gradient-to-r from-cyan-500 to-blue-800 text-white font-bold'>Registrar usuario</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">Datos del usuario</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex ">
                    <div className=' flex-col mx-3'>
                      <Input type="text" variant="underlined" label='Nombres' id='Nombres'
                      {...register("Nombres" , {required : true})}/>
                      {errors.Nombres && <p className=' text-red-600'>Campo requerido</p>}
                    </div>

                    <div className=' flex-col mx-3'>
                    <Input type="text" label="Apellidos"  variant="underlined" id="Apellidos"
                    {...register("Apellidos" , {required : true})}/>
                    {errors.Apellidos && <p className=' text-red-600 '>Campo requerido</p>}
                    </div>
                    
                  </div>

                  <div className=" flex">
                    <div className='flex-col m-3'>
                    <Input type="email" label="Email" variant="underlined" id='Email'
                    {...register("Email" , {required : true})}/>
                    {errors.Email && <p className=' text-red-600  '>Campo requerido</p>}
                    </div>


                    <div className='flex-col m-3'> 
                      <Input type="password" label="Password" variant="underlined" id='Password'
                    {...register("Password" , {required : true})}/>
                    {errors.Password && <p className=' text-red-600 '>Campo requerido</p>}
                    </div>
                  </div>

                  <div className=" flex">
                    <div className='flex-col m-3'>
                    <Input type="text" label="Telefono" variant="underlined" id='Telefono'
                    {...register("Telefono" , {required : true})}/>
                    {errors.Telefono && <p className=' text-red-600  '>Campo requerido</p>}
                    </div>


                    <div className='flex-col m-3'> 
                      <Input type="text" label="Otro Telefono" variant="underlined" id='OtroTelefono'
                    {...register("OtroTelefono" , {required : true})}/>
                    {errors.otroTelefono && <p className=' text-red-600'>Campo requerido</p>}
                    </div>
                  </div>

                  <div className=" flex">
                    <div className='flex-col m-3'>
                    <Input type="text" label="Dirección" variant="underlined" id='Direccion'
                    {...register("Direccion" , {required : true})}/>
                    {errors.Direccion && <p className=' text-red-600  '>Campo requerido</p>}
                    </div>

                    
                    <Select label="Seleccione rol" ></Select>
                    </div>
                    
{/*                   
                    <div className='flex-col m-3'> 
                      <Input label="Rol" variant="underlined" id='Rol' 
                    {...register("Rol" , {required : true})}/>
                    {errors.Rol && <p className=' text-red-600 '>Campo requerido</p>}
                    </div> */}



                  <div className=' text-center my-3 '>
                    <ButtonAccept onPress={onClose}/>
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
