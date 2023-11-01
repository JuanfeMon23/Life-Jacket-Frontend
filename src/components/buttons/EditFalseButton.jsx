import React from 'react'
import { Button } from '@nextui-org/react'
import {AiTwotoneEdit} from 'react-icons/Ai';


export  function EditFalseButton() {
  return (   
    <Button isIconOnly className='bg-gradient-to-r from-[#252525] to-[#252525] rounded-lg text-white font-bold'>
        <AiTwotoneEdit className=' text-white text-2xl'/>
    </Button>  
  )
}