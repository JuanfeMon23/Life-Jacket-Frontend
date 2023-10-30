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
import { useLocation } from 'react-router-dom';

export function NewNavigation() {
    const [open, setOpen] = useState(true);
    const location = useLocation();

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
    <div className=' '>
          <nav className={`${open ? "w-72" : "w-20 "}  bg-[#0D0628] h-[98vh]   p-5  rounded-xl m-2 duration-300 ease-in-out`}>
            <div className="flex gap-x-4 items-center">
              <FiArrowLeftCircle 
                className={`absolute righ-23 top-3 bg-[#0D0628] rounded-full cursor-pointer text-4xl text-white   ${!open && "rotate-180"}`}
                onClick={() => setOpen(!open)}
              />
            </div>
            <ul className="pt-6 ">
              {Menus.map((Menu) => (
                <Link to={Menu.path}>
                <li key={Menu.title} className={` p-4  text-white  flex rounded-lg items-center gap-x-4 cursor-pointer 
                  ${location.pathname === Menu.path ? 'bg-gradient-to-r from-cyan-500 to-blue-800 text-white' : ' hover:bg-slate-200/20'}`}>
                        <Menu.icon  size={15}/>
                        <span className={`${!open && "hidden"} origin-left duration-200 `}>
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
