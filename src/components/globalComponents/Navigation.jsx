import React from 'react'
import { Link } from 'react-router-dom'
import {FaIdBadge} from 'react-icons/fa'
import {FaCartPlus} from 'react-icons/fa'
import {FaCar} from 'react-icons/fa'
import {FaMoneyBillWave} from 'react-icons/fa'
import {FaTools} from 'react-icons/fa'
import {FaUserPlus} from 'react-icons/fa'
import {IoBarChart} from 'react-icons/io5'

export function Navigation() {
  return (
    <nav className=' h-screen w-[17rem] m-2 flex justify-center flex-col bg-[#0D0628] rounded-xl'>
        <h1 className=' text-center text-2xl text-white p font-bold '> Modulos </h1>
        <ul className='w-full h-[30rem] flex flex-col'>
            <li className=' flex justify-center w-[16rem] cursor-pointer p-3 m-1 hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg'>
                <div className=' flex  items-center gap-5'>
                    <IoBarChart className=' text-white '/>
                    <Link className="text-white text-center" to='/Dashboard'>Dashboard</Link>
                </div>
            </li>

            <li className='flex justify-center w-[16rem] cursor-pointer p-3 m-1 hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg'>
                <div className=' flex  items-center gap-5'>
                    <FaIdBadge className='text-white'/>
                    <Link className="text-white items-center" to='/Users'>Usuarios</Link>            
                </div>
            </li>

            <li className=' flex justify-center w-[16rem] cursor-pointer p-3 m-1 hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg'>
                <div className=' flex items-center gap-5 '>
                    <FaCar className=' text-white'/>
                    <Link className="text-white items-center" to='/Vehicles'>Vehiculos</Link>
                </div>
            </li>

            <li className=' flex justify-center w-[16rem] cursor-pointer p-3 m-1 hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg'>
                <div className=' flex items-center gap-5 '>
                    <FaCartPlus className='text-white'/>
                    <Link className="text-white items-center" to='/Purchases'>Compras</Link>
                </div>
            </li>

            <li className=' flex justify-center w-[16rem] cursor-pointer p-3 m-1 hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg'>
                <div className=' flex items-center gap-5 '>
                    <FaMoneyBillWave className=' text-white'/>
                    <Link className="text-white items-center" to='/Sells'>Ventas</Link>
                </div>
            </li>

            <li className='flex justify-center w-[16rem] cursor-pointer p-3 m-1 hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg'>
                <div className=' flex items-center gap-5'>
                    <FaUserPlus className=' text-white'/>
                    <Link className="text-white items-center" to='/Clients'>Clientes</Link>
                </div>
            </li>

            <li className='flex justify-center w-[16rem] cursor-pointer p-3 m-1 hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg'>
                <div className=' flex items-center gap-5'>
                    <FaTools className='text-white'/>
                    <Link className="text-white items-center" to='/Improvements'>Mejoras</Link>
                </div>
            </li>
        </ul>
    </nav>
  )
}
