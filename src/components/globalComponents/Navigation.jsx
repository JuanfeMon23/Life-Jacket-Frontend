import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
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
import {HiX} from "react-icons/hi";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem,
    Button
  } from "@nextui-org/react";
import {BiSolidUser} from 'react-icons/bi'
import { useAuth } from '../../Login/context/AuthContext';

export  function Navigation() {
    const [open, setOpen] = useState(false);
    const {logout, user} = useAuth();
    console.log(user)
    const location = useLocation();

    function handleLogout(e) {
        e.preventDefault();
        logout();
    }
        
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
    <div className=' bg-white py-3 fixed top-0  left-0 right-0 shadow-md z-50'>     
            <div className=' justify-between'>
                <button className=' ml-4' onClick={() => setOpen(true)}>
                    <FaBars className=' text-sky-600 '/>
                </button>
                <span className=' ml-3 font-bold  text-sky-600'> LifeJacket</span>
                <Dropdown>
                    <DropdownTrigger>
                        <Button isIconOnly> <BiSolidUser className=' text-2xl text-sky-600'/></Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                        <DropdownItem   className="text-danger" color="danger" onClick={handleLogout} > Cerrar sesion</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>

            <div className={`${!open && "hidden"} bg-gray-600/40 min-h-screen w-full fixed top-0 left-0 right-0 `} onClick={() => setOpen(false)}></div>

            <div className={`${open ? "w-80" : "w-0"} bg-[#0D0628] min-h-screen fixed top-0 left-0 transition-all duration-300   `}>
            <div className={`${!open && "hidden"} pt-3`}>
                <button className='ml-4 text-white mb-14' onClick={() => setOpen(false)}>
                    <HiX className=' w-5 h-5'/>
                </button>
                <ul className="pt-6  ">
                    {Menus.map((Menu) => (
                        <Link to={Menu.path}>
                        <li key={Menu.title} className={` ${location.pathname === Menu.path ? ' text-[#0D0628]': ' text-white'}   p-4  flex  rounded-lg items-center gap-x-6 cursor-pointer 
                        ${location.pathname === Menu.path ? ' bg-[#DFDCE6]' : ' hover:bg-slate-200/20'}`}>
                                <Menu.icon  />
                                <span className="origin-left duration-200 ">
                                    {Menu.title}
                                </span>
                        </li>
                        </Link>
                            ))}
                    </ul> 
                </div> 
            </div>

        
    </div>
  )
}
