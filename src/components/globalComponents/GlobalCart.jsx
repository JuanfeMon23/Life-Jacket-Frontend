import React from 'react';
import {Card,CardBody, } from "@nextui-org/react";
import {AiTwotoneEdit} from 'react-icons/Ai'



export function GlobalCart(props) {
  return (
     <Card className=' h-30 w-13 mx-2 my-2 shadow-2xl'>
      <div className='bg-gradient-to-r from-[#252525] to-[#231949] h-10 text-white justify-around flex mx-3 rounded-lg' >
        <p>{title}</p>
        <p>{titleValue}</p>  
      </div>
      
      <CardBody className=' bg-white'>
        <div className=' bg-white flex  items-center m-2'> 
            <p className=' text-zinc-950 mx-3 text-sm '>{firstLabel}</p>
            <div className=' border-2 border-indigo-500/75 rounded-lg py-1 px-1 flex w-40'>
              <p className=' text-zinc-950 text-center text-xs'>{firstValue}</p>
            </div>
        </div >

        <div className=' bg-white flex  items-center m-2'>
          <p className=' text-zinc-950 mx-3 text-sm '>{secondLabel}</p>
          <div className=' border-2 border-indigo-500/75 rounded-lg py-1 px-1 flex w-40'>
          <p className=' text-zinc-950 text-xs'>{secondValue}</p>
          </div>
        </div>

        <div className=' flex my-2 items-center m-2'>
            <p className=' mx-3 text-sm'>{thirdLabel}</p>
            <p className='border-2 border-indigo-500/75 rounded-lg py-1 px-1 w-40 text-xs'>{thirdValue}</p>
        </div>

        <div className='flex justify-center pt-3'>
          <div>
            <button className=''> <WatchUser user={users} id={users.id}/></button>
          </div>
              <Button className=' bg-gradient-to-r from-[#D99C23] to-[#D45229] rounded-lg'><Link to={`/Users/${users.idUser}`}><AiTwotoneEdit className='text-white text-2xl'/></Link></Button>
              <button> Estado </button>
        </div>
      </CardBody>
     </Card> 
    ) 
}
