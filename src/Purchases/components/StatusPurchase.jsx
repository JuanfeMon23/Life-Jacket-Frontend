import React from 'react'
import { usePurchases } from '../context/purchaseContext';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {useForm} from 'react-hook-form';
import {TiDeleteOutline} from 'react-icons/ti'
import {HiOutlineCheckCircle} from 'react-icons/hi';
import { toast } from "react-toastify";

export function StatusPurchase(props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {handleSubmit} = useForm();
    const {statusPurchase} = usePurchases();
    const purchase = props.purchase;

    function onSubmit(){
        statusPurchase(purchase.idPurchase);
    };
    
    const handleDelete = (event) => {
      event.preventDefault();
      toast.error('La compra ya fué anulada.' ,{
        autoClose : 1500,
        position: toast.POSITION.TOP_CENTER
    });
    };

  return (
    <div className='flex'>
    {purchase.purchaseStatus === "true" ? <Button title='Anular compra' isIconOnly className=' bg-yellow-950/70 rounded-lg mr-2' onPress={onOpen}><TiDeleteOutline className='text-2xl text-white'/></Button> 
    : <Button isIconOnly className=' mr-2' title='Anular compra' onClick={handleDelete}><HiOutlineCheckCircle className='text-white text-2xl'/></Button>}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className=" justify-center text-2xl m-4">¿Deseas anular la compra?</ModalHeader>
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
