import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button} from "@nextui-org/react";
import {useForm} from 'react-hook-form';
import { toast } from "react-toastify";
import {AiOutlineDelete} from 'react-icons/Ai';
import { useVehicles } from '../../context/vehiclesContext';


export  function DeleteBrands(props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {handleSubmit} = useForm();
    const {deleteBrands} = useVehicles();
    const brand = props.brand

    const onSubmit = () => {
        deleteBrands(brand.idBrand);
    }

  return (
    <div className=' flex'>
        <Button title='Eliminar registro' isIconOnly className=' bg-red-400' onPress={onOpen}><AiOutlineDelete className={`text-2xl text-white`}/></Button> 
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <> 
            <ModalHeader className=" justify-center text-2xl m-4  ">¿Deseas eliminar el registro?</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=' text-center m-3'>
                        <button className=' bg-emerald-600  w-20 h-18 p-3 rounded-lg text-white' type='submit'>Aceptar</button>
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
