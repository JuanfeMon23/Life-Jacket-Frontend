import React from 'react'

export  function Title(props) {
  return (
    <>
    <div className=''>
        <div>
            <h1 className=' text-2xl font-bold m-7'>{props.Title}</h1>
        </div>       
    </div>
    
    <div className=' sm:w-[50rem] md:w-[80rem]  lg:w-[99rem]  h-1.5 '> </div>   
    </>

  )
}
