import React from 'react'
import { useSells } from '../context/sellsContext';
import { IoDocumentTextOutline } from "react-icons/io5";
import { Button } from '@nextui-org/react';
import { toast } from 'react-toastify';

export  function ContractSale(props) {
    const {contractSale, sells} = useSells();
    const sale = props.sale
    
    function handleContract(){
        contractSale(sale.idSale)
    }

    function handleError(){
        toast.error('No se puede generar un contrato de ventas anuladas.' ,{
            position: toast.POSITION.TOP_CENTER,
            autoClose : 1500
        });
    }
  return (
    sale.saleStatus === "true" ?  <Button isIconOnly className=' bg-purple-900' onClick={handleContract} title='Contrato de venta' type='submit'><IoDocumentTextOutline className=' text-white'/></Button>
    : <Button isIconOnly onClick={handleError} title='Contrato de venta' type='submit'><IoDocumentTextOutline className=' text-white'/></Button>
  )
}
