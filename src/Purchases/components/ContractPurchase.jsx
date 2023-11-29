import React from 'react'
import { usePurchases } from '../context/purchaseContext'
import { IoDocumentTextOutline } from "react-icons/io5";
import { Button } from '@nextui-org/react';
import { toast } from 'react-toastify';


export  function ContractPurchase(props) {
    const {contractPurchase, purchases} = usePurchases();
    const purchase = props.purchase

    function handleContract(){
        contractPurchase(purchase.idPurchase)
    }

    function handleError(){
        toast.error('No se puede generar un contrato de compras anuladas.' ,{
            position: toast.POSITION.TOP_CENTER,
            autoClose : 1500
        });
    }
  return (
    purchase.purchaseStatus === "true" ?  <Button isIconOnly className=' bg-purple-900' onClick={handleContract} title='Contrato de compra' type='submit'><IoDocumentTextOutline className=' text-white'/></Button>
     : <Button isIconOnly className='' onClick={handleError} title='Contrato de compra' type='submit'><IoDocumentTextOutline className=' text-white'/></Button>    
  )
}
