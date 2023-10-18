import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {FaIdBadge} from 'react-icons/fa'
import {FaCartPlus} from 'react-icons/fa'
import {FaCar} from 'react-icons/fa'
import {FaMoneyBillWave} from 'react-icons/fa'
import {FaTools} from 'react-icons/fa'
import {FaUserPlus} from 'react-icons/fa'
import {IoBarChart} from 'react-icons/io5'
import { FaExchangeAlt} from 'react-icons/fa'
import {FiArrowLeftCircle} from 'react-icons/fi'

export function NewNavigation() {
    const [open, setOpen] = useState(true);

    const Menus = [
        {title: 'Dashboard', path:'/Dashboard', icon : IoBarChart},
        {title : 'Usuarios', path:'/Users', icon : FaIdBadge },
        {title : 'Vehículos', path:'/Vehicles', icon : FaCar},
        {title: 'Compras', path:'/Purchases', icon : FaCartPlus},
        {title : 'Ventas', path:'/Sells', icon: FaMoneyBillWave },
        {title: 'Clientes', path:'/Clients' , icon : FaUserPlus},
        {title : 'Cambios', path:'/Exchangues', icon : FaExchangeAlt},
        {title : 'Mejoras', path:'/Improvements', icon : FaTools}
    ]

  return (
    <nav className={`${open ? "w-72" : "w-20"} relative bg-[#0D0628] h-screen p-5 pt8 rounded-xl m-2 duration-300 ease-in-out`}>
        <div className="flex gap-x-4 items-center">
          <h1 className={`text-white origin-left font-bold text-xl duration-200 ${!open && "scale-0"}`}>
            Modulos
          </h1>
          <FiArrowLeftCircle 
            className={`absolute righ-23 top-3 bg-[#0D0628] rounded-full cursor-pointer text-4xl text-white   ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
        </div>
        <ul className="pt-6 ">
          {Menus.map((Menu, index) => (
            <li key={index} className=" p-4  text-white  hover:text-[#0D0628] flex rounded-l-lg items-center gap-x-4 cursor-pointer hover:bg-[#DFDCE6]">
                <Menu.icon className={`${!open && "hidden"} `} />
                <Link to={Menu.path}>
                    <span className={`${!open && "hidden"} origin-left duration-200 `}>
                        {Menu.title}
                    </span>
                </Link>
            </li>
                ))}
        </ul> 
    </nav>
  )
}
