import React from 'react'
import {useForm} from 'react-hook-form';
import {Modal, ModalContent, ModalHeader, ModalBody,  useDisclosure,  Button} from "@nextui-org/react";
import { usePurchases } from '../context/purchaseContext';
import {GrStatusGood} from 'react-icons/gr'
import {TiDeleteOutline} from 'react-icons/ti';
import { toast } from "react-toastify";

export  function DeletePurchase(props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {handleSubmit} = useForm();
    const {deletePurchase} = usePurchases();
    const purchase = props.purchase;

    function onSubmit(){
        deletePurchase(purchase.idPurchase);
    };

    function handleDelete(){
        toast.error('No puedes eliminar una compra habilitada.' ,{
            autoClose : 2000,
            position: toast.POSITION.TOP_CENTER
        });
    };

  return (
    <div className=' flex'>
        {purchase.purchaseStatus === "false"  ? <Button isIconOnly className=' bg-green-600 rounded-lg' onPress={onOpen}><GrStatusGood className='text-2xl'/></Button> : <Button isIconOnly className=' bg-slate-600 rounded-lg' onClick={handleDelete}><TiDeleteOutline className='text-white text-2xl'/></Button>}
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className=" items-center">¿Deseas eliminar la compra?</ModalHeader>
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
