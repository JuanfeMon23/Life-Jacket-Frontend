import React from 'react'
import {useForm} from 'react-hook-form';
import {Modal, ModalContent, ModalHeader, ModalBody,  useDisclosure,  Button} from "@nextui-org/react";
import { useSells } from '../context/sellsContext';
import {GrStatusGood} from 'react-icons/gr'
import {TiDeleteOutline} from 'react-icons/ti';
import { toast } from "react-toastify";

export  function DeleteSale(props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {handleSubmit} = useForm();
    const {deleteSale} = useSells();
    const sale = props.sale;
    
    function onSubmit(){
        deleteSale(sale.idSale);
    };

    function handleDelete(){
        toast.error('No puedes eliminar una venta habilitada.' ,{
            autoClose : 1500,
            position: toast.POSITION.TOP_CENTER
        });
    };

  return (
    <div>
        {sale.saleStatus === "false"  ? <Button className=' bg-green-600 rounded-lg' onPress={onOpen}><GrStatusGood className='text-2xl'/></Button> : <Button className=' bg-slate-600 rounded-lg' onClick={handleDelete}><TiDeleteOutline className='text-white text-2xl'/></Button>}
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className=" items-center">¿Deseas eliminar la venta?</ModalHeader>
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
