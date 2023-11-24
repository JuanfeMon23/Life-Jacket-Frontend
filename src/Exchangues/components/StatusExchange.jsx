import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {useForm} from 'react-hook-form';
import {TiDeleteOutline} from 'react-icons/ti'
import { useExchange } from '../context/ExchangeContext';
import {HiOutlineCheckCircle} from 'react-icons/hi';
import { toast } from "react-toastify";

export function StatusExchange(props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {handleSubmit} = useForm();
    const {nullifyExchange} = useExchange();
    const exchange = props.exchange;

    function onSubmit(){
        nullifyExchange(exchange.idExchange)
    }

    function handleAnulate(event){
        event.preventDefault();
        toast.error('Intercambio anulado' ,{
          autoClose : 1500,
          position: toast.POSITION.TOP_CENTER
      });
    };
    
  return (
<div className='flex'>
    {exchange.exchangeStatus === "true" ? <Button title="Anular intercambio" isIconOnly className='  bg-yellow-950/70 rounded-lg mr-2' onPress={onOpen}>< TiDeleteOutline className={`text-2xl text-white`}/></Button> 
    : <Button title="Anular intercambio" onClick={handleAnulate}   isIconOnly>< HiOutlineCheckCircle className='text-white text-2xl'/></Button>}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className=" justify-center text-2xl m-4">¿Deseas anular el intercambio?</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=' text-center m-3'>
                        <Button className=' bg-emerald-600 hover:bg-emerald-900  w-20 h-18 p-3 rounded-lg text-white' type='submit'>Aceptar</Button>
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
