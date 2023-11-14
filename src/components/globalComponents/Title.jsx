import React from 'react'

export  function Title(props) {
  return (
    <>
    <div className=''>
        <div className='  p-1 m-1 mt-6 rounded-lg'>
            <h1 className=' text-2xl font-bold m-7 '>{props.Title}</h1>
        </div>       
    </div>
    </>

  )
}
