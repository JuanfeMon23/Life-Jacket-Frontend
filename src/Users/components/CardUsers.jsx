import React from 'react';
import { useUsers } from '../Context/userContext';
import {Card, CardHeader, CardBody} from "@nextui-org/react";

export function CardUsers() {
  const {users} = useUsers();
  return (
    users.map((users) => (
     <Card key={users.id} className=' h-30 w-13 mx-2 my-2top-1'>
      <div className='bg-indigo-950 h-10 text-white justify-around flex mx-3 rounded-lg' >
        <p>Rol:</p>
        <p>{users.userName}</p>  
      </div>

      <CardBody className=' bg-white'>
        <div className=' bg-white flex '>
            <p className=' text-zinc-950 mx-3'>Nombre Completo:</p>
            <div className=' border-2 border-indigo-500/75 rounded-lg py-1 px-1 flex'>
              <p className=' text-zinc-950 '>{users.userName}&nbsp;</p>
              <p className=' text-zinc-950 '>{users.userLastName}</p>

            </div>
        </div>
        <div className=' flex my-2'>
            <p className=' mx-3 '>Correo Electronico: </p>
            <p className='border-2 border-indigo-500/75 rounded-lg py-1 px-1'>{users.userEmail}</p>
        </div>
      </CardBody>
     </Card> 
    ))
  )
}
