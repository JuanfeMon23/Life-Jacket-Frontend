import React from 'react'

export  function Title(props) {
  return (
    <>
    <div className=''>
        <div className='  p-3 m-3 mt-12 rounded-lg'>
            <h1 className=' text-2xl font-bold mt-7 '>{props.Title}</h1>
        </div>       
    </div>
    </>

  )
}
