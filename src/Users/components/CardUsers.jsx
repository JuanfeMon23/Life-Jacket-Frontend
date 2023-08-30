import React from 'react';
import { useUsers } from '../Context/userContext';
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import { WatchUser } from './WatchUser';

export function CardUsers() {
  const {users} = useUsers();

  return (
    users.map((users) => (
     <Card key={users.id} className=' h-30 w-13 mx-2 my-2'>
      <div className='bg-gradient-to-r from-[#252525] to-[#231949] h-10 text-white justify-around flex mx-3 rounded-lg' >
        <p>Rol:</p>
        <p>{users.userName}</p>  
      </div>

      <CardBody className=' bg-white'>
        <div className=' bg-white flex '> 
            <p className=' text-zinc-950 mx-3 text-sm '>Nombre Completo:</p>
            <div className=' border-2 border-indigo-500/75 rounded-lg py-1 px-1 flex w-40'>
              <p className=' text-zinc-950 text-center text-sm'>{users.userName}&nbsp;</p>
              <p className=' text-zinc-950 text-sm'>{users.userLastName}</p>

            </div>
        </div>
        <div className=' flex my-2'>
            <p className=' mx-3 text-sm'>Correo Electronico: </p>
            <p className='border-2 border-indigo-500/75 rounded-lg py-1 px-1 w-40 text-sm'>{users.userEmail}</p>
        </div>

        <div className=' flex'>
              <button> <WatchUser user={users} id={users.id}/></button>
              <button> Editar </button>
              <button> Estado </button>
        </div>
      </CardBody>
     </Card> 
    ))
  )
}
