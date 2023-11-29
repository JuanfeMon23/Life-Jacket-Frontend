import React from 'react'
import { useSells } from '../context/sellsContext';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {useForm} from 'react-hook-form';
import {TiDeleteOutline} from 'react-icons/ti'
import {HiOutlineCheckCircle} from 'react-icons/hi';
import { toast } from "react-toastify";

export  function StatusSale(props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {handleSubmit} = useForm();
    const {statusSale} = useSells();
    const sale = props.sale;

    function onSubmit(){
        statusSale(sale.idSale);
    }; 


    function handleStatus(){
      toast.error('Venta anulada.' ,{
        autoClose : 1500,
        position: toast.POSITION.TOP_CENTER
    });
    };

  return (
    <div className='flex'>
    {sale.saleStatus === "true" ? <Button isIconOnly title='Anular venta' className=' bg-yellow-950/70 rounded-lg mr-2' onPress={onOpen}><TiDeleteOutline className='text-2xl text-white'/></Button>
     : <Button isIconOnly title='Anular venta' className=' mr-2' onClick={handleStatus} ><HiOutlineCheckCircle className='text-white text-2xl'/></Button>}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className=" justify-center text-2xl m-4">¿Deseas anular la venta?</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=' text-center m-3'>
                        <button className=' bg-emerald-600 hover:bg-emerald-900  w-20 h-18 p-3 rounded-lg text-white' type='submit'>Aceptar</button>
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
