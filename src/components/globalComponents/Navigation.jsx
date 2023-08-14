import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {
  return (
    <nav className=' h-screen w-48 mx-2 my-2 flex justify-center flex-col bg-indigo-950  rounded-lg'>
        <h1 className=' text-center text-2xl text-white py-2 font-bold '> Modulos </h1>
        <ul className='w-full h-3'>
            <li className=' w-full items-center cursor-pointer my-1 py-2 px-2 hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg'>
                <div className=' flex'>
                    <Link className="text-white items-center" to='/Users'>Usuarios</Link>
                </div>
            </li>

            <li className=' w-full text-center cursor-pointer  hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg'>
                <div className=' flex text-center'>
                    <Link className="text-white items-center" to='/Users'>Usuarios</Link>
                </div>
            </li>
        </ul>
    </nav>
  )
}
