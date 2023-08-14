import React from 'react'

export  function Title(props) {
  return (
    <div className=' flex'>
        <div>
            <h1 className=' text-5xl font-bold my-3'>{props.Title}</h1>
        </div>

        <div>

        </div>

        <span className=' w-90 h-1.3 bg-gray-950 '></span>
    </div>
  )
}
