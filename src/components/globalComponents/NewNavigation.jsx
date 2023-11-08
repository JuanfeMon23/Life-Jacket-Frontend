import React from 'react'
import { Link } from 'react-router-dom';
import {FaIdBadge} from 'react-icons/fa'
import {FaCartPlus} from 'react-icons/fa'
import {FaCar} from 'react-icons/fa'
import {FaMoneyBillWave} from 'react-icons/fa'
import {FaTools} from 'react-icons/fa'
import {FaUserPlus} from 'react-icons/fa'
import {IoBarChart} from 'react-icons/io5'
import { FaExchangeAlt} from 'react-icons/fa'
import { useLocation } from 'react-router-dom';
import {PiGearSix} from 'react-icons/pi';

export function NewNavigation() {
    const location = useLocation();

    const Menus = [
        {title: 'Dashboard', path:'/Dashboard', icon : IoBarChart},
        {title: 'Roles', path:'/Roles', icon : PiGearSix},
        {title : 'Usuarios', path:'/Users', icon : FaIdBadge },
        {title : 'Vehículos', path:'/Vehicles', icon : FaCar},
        {title: 'Compras', path:'/Purchases', icon : FaCartPlus},
        {title : 'Ventas', path:'/Sells', icon: FaMoneyBillWave },
        {title: 'Clientes', path:'/Clients' , icon : FaUserPlus},
        {title : 'Cambios', path:'/Exchangues', icon : FaExchangeAlt},
        {title : 'Mejoras', path:'/Improvements', icon : FaTools}
    ]

  return (
    <div className=' lg:w-72  md:w-[25vh] '>
          <nav className= " w-[5vh] h-screen sm:w-[28vh]  bg-[#0D0628] lg:h-[98vh] md:h-[95vh]   p-5 s rounded-xl m-2 duration-300 ease-in-out">
            <div className="flex gap-x-4 items-center">
            </div>
            <ul className="pt-6  ">
              {Menus.map((Menu) => (
                <Link to={Menu.path}>
                <li key={Menu.title} className={` text-white/0 sm:text-white  lg:p-4    sm:flex  rounded-lg items-center gap-x-4 md:gap-x-6 cursor-pointer 
                  ${location.pathname === Menu.path ? 'bg-[#DFDCE6] text-[#0D0628]' : ' hover:bg-slate-200/20'}`}>
                        <Menu.icon className=' text-white' />
                        <span className="origin-left duration-200 ">
                            {Menu.title}
                        </span>
                </li>
                </Link>
                    ))}
            </ul> 
        </nav>
    </div>

  )
}
