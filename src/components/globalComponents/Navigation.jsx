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
    <nav className=' h-screen w-48 mx-2 my-2 flex justify-center flex-col bg-indigo-950  rounded-lg'>
        <h1 className=' text-center text-2xl text-white py-2 font-bold '> Modulos </h1>
        <ul className='w-full h-3'>
            <li className=' w-full items-center cursor-pointer my-1 py-2 px-2 hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg'>
                <div className=' flex text-center'>
                    <IoBarChart className=' text-white'/>
                    <Link className="text-white text-center" to='/Dashboard'>Dashboard</Link>
                </div>
            </li>

            <li className=' w-full items-center cursor-pointer my-1 py-2 px-2 hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg'>
                <div className=' flex'>
                    <FaIdBadge className='text-white'/>
                    <Link className="text-white items-center" to='/Users'>Usuarios</Link>
                </div>
            </li>

            <li className=' w-full items-center cursor-pointer my-1 py-2 px-2 hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg'>
                <div className=' flex '>
                    <FaCar className=' text-white'/>
                    <Link className="text-white items-center" to='/Vehicles'>Vehiculos</Link>
                </div>
            </li>

            <li className=' w-full  cursor-pointer my-1 py-2 px-2 hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg'>
                <div className='flex justify-center'>
                    <FaCartPlus className='text-white'/>
                    <Link className="text-white items-center" to='/Purchases'>Compras</Link>
                </div>
            </li>

            <li className=' w-full items-center cursor-pointer my-1 py-2 px-2 hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg'>
                <div className=' flex'>
                    <FaMoneyBillWave className=' text-white'/>
                    <Link className="text-white items-center" to='/Sells'>Ventas</Link>
                </div>
            </li>

            <li className=' w-full items-center cursor-pointer my-1 py-2 px-2 hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg'>
                <div className=' flex'>
                    <FaUserPlus className=' text-white'/>
                    <Link className="text-white items-center" to='/Clients'>Clientes</Link>
                </div>
            </li>

            <li className=' w-full items-center cursor-pointer my-1 py-2 px-2 hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg'>
                <div className=' flex items-center'>
                    <FaTools className='text-white'/>
                    <Link className="text-white items-center" to='/Improvements'>Mejoras</Link>
                </div>
            </li>
        </ul>
    </nav>
  )
}
