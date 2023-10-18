    import { Button } from '@nextui-org/react'
import React from 'react'
    
    export  function RegisterButton(props) {
      return (
        <Button type='submit' className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
            {props.title}
        </Button>
      )
    }
    