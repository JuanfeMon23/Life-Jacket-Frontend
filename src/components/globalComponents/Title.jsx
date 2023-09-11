import React from 'react'

export  function Title(props) {
  return (
    <>
    <div className=''>
        <div>
            <h1 className=' text-5xl font-bold m-7'>{props.Title}</h1>
        </div>       
    </div>
    
    <div className=' w-[99rem] h-1.5 border-3 border-[#252525]'> </div>   
    </>

  )
}
