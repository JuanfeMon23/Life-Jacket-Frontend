import React from 'react'
import { useClients } from '../context/clientsContext'
import { WatchClient } from './WatchClient';
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import {AiTwotoneEdit} from 'react-icons/Ai'; 


export  function CardClient() {
    const {clients} = useClients();
  return (
    clients.map((clients) => (
        <Card key={clients.id} className=' h-30 w-13 mx-2 my-2 shadow-2xl'>
         <div className='bg-gradient-to-r from-[#252525] to-[#231949] h-10 text-white justify-around flex mx-3 rounded-lg' >
           <p>Cedula</p>
           <p>{clients.clientDocument}</p>  
         </div>
   
         <CardBody className=' bg-white'>
           <div className=' bg-white flex  items-center'> 
               <p className=' text-zinc-950 mx-3 text-sm '>Nombre Completo:</p>
               <div className=' border-2 border-indigo-500/75 rounded-lg py-1 px-1 flex w-40'>
                 <p className=' text-zinc-950 text-center text-xs'>{clients.clientName}&nbsp;</p>
                 <p className=' text-zinc-950 text-xs'>{clients.clientLastName}</p>
   
               </div>
           </div>
           <div className=' flex my-2 items-center'>
               <p className=' mx-3 text-sm'>Telefono: </p>
               <p className='border-2 border-indigo-500/75 rounded-lg py-1 px-1 w-40 text-xs'>{clients.clientPhoneNumber}</p>
           </div>
   
           <div className='flex justify-center pt-3'>
             <div>
               <button className=''> <WatchClient client={clients} id={clients.id}/></button>
             </div>
                 {/* <button className=' bg-gradient-to-r from-[#D99C23] to-[#D45229] rounded-lg text-white w-12' ><AiTwotoneEdit/></button> */}
                 <Button className=' bg-gradient-to-r from-[#D99C23] to-[#D45229] rounded-lg'><Link to={`/Clients/${clients.idClient}`}><AiTwotoneEdit className='text-white text-2xl'/></Link></Button>
           </div>
         </CardBody>
        </Card> 
       ))
  )
}
