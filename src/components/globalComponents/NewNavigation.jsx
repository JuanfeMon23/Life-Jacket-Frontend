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
    <div className=' '>
          <nav className= " xl:w-72 md:w-45 sm:w-25  bg-[#0D0628] xl:h-[98vh] md:h-[95vh]   p-5 s rounded-xl m-2 duration-300 ease-in-out">
            <div className="flex gap-x-4 items-center">
            </div>
            <ul className="pt-6 ">
              {Menus.map((Menu) => (
                <Link to={Menu.path}>
                <li key={Menu.title} className={` p-4  text-white  flex rounded-lg items-center gap-x-4 md:gap-x-6 cursor-pointer 
                  ${location.pathname === Menu.path ? 'bg-gradient-to-r from-cyan-500 to-blue-800 text-white' : ' hover:bg-slate-200/20'}`}>
                        <Menu.icon />
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
