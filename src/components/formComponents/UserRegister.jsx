import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import { ButtonAccept } from "../ButtonAccept";
import {useForm} from 'react-hook-form'

export  function UserRegister() {
const {isOpen, onOpen, onOpenChange} = useDisclosure();
const {register} = useForm();

const handleSubmit = (data) => {
  console.log(data);
}
  return (
    <div className='flex'>
    <Button onPress={onOpen}className='bg-gradient-to-r from-cyan-500 to-blue-800 text-white font-bold'>Registrar</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">Datos del usuario</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit}>
                  <div className=" flex gap-4">
                    <Input type="text" variant="underlined" label='Nombres' {...register("Nombres" , {required : true})}/>
                    <Input type="text" label="Apellidos"  variant="underlined" {...register("Apellidos" , {required : true})}/>
                  </div>

                  <div className=" flex gap-4">
                    <Input type="email" label="Email" variant="underlined" {...register("Email" , {required : true})}/>
                    <Input type="password" label="Password" variant="underlined"{...register("Password" , {required : true})}/>
                  </div>

                  <div className=" flex gap-4">
                    <Input type="text" label="Telefono" variant="underlined"{...register("Telefono" , {required : true})}/>
                    <Input type="text" label="Otro telefono" variant="underlined"{...register("OtroTelefono" , {required : true})}/>
                  </div>

                  <div className=" flex gap-4">
                    <Input type="text" label="Direccion" variant="underlined"{...register("Direccion" , {required : true})}/>
                    <Input type="text" label="rol select" variant="underlined"{...register("Rol" , {required : true})}/>
                  </div>

                  <ButtonAccept onPress={onClose}/>
                </form>


           
              </ModalBody>
              <ModalFooter>
              
                  
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
