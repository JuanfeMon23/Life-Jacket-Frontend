import React from 'react'
import { usePurchases } from '../context/purchaseContext';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {useForm} from 'react-hook-form';
import {GrStatusGood} from 'react-icons/gr'
import {TiDeleteOutline} from 'react-icons/ti'

export function StatusPurchase(props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {handleSubmit} = useForm();
    const {statusPurchase} = usePurchases();
    const purchase = props.purchase;

    function onSubmit(){
        statusPurchase(purchase.idPurchase);
    };    
  return (
    <div className='flex'>
    {purchase.purchaseStatus === "true" ? <Button isIconOnly className=' bg-green-600 rounded-lg mr-2' onPress={onOpen}><GrStatusGood className='text-2xl'/></Button> 
    : <Button className=' mr-2' onPress={onOpen}><TiDeleteOutline className='text-white text-2xl'/></Button>}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className=" items-center">¿Deseas anular la compra?</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=' text-center m-3'>
                        <button className=' bg-green-600  w-20 h-18 p-3 rounded-lg text-white' type='submit'>Aceptar</button>
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
