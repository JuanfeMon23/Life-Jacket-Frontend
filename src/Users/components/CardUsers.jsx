import React from 'react';
import { useUsers } from '../Context/userContext';
import {Card, CardHeader, CardBody} from "@nextui-org/react";

export function CardUsers() {
  const {users} = useUsers();
  return (
    users.map((users) => (
     <Card key={users.id} className=' h-30 w-13 mx-2 my-2'>
      <div className='bg-indigo-950 text-white justify-around flex relative' >
        <p>Rol:</p>
        <p>{users.userName}</p>  
      </div>

      <CardBody className=' bg-white'>
        <div className=' bg-white flex'>
            <p className=' text-zinc-950 mx-3'>Nombre Completo:</p>
            <p className=' text-zinc-950'>{users.userName}</p>
            <p className=' text-zinc-950'>{users.userLastName}</p>
        </div>
        <div className=' flex'>
            <p className=' mx-3'>Correo Electronico: </p>
            <p>{users.userEmail}</p>
        </div>
      </CardBody>
     </Card> 
    ))
  )
}
