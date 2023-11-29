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
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiBookmark } from "react-icons/fi";
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
import { useNavigate } from 'react-router-dom';



export  function Navigation() {
    const [open, setOpen] = useState(false);
    const {logout, user} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    function handleLogout(e) {
        e.preventDefault();
        logout();
        navigate('/')
        
    }
        
    const Menus = [
        {title: 'Dashboard', path:'/Dashboard', icon : IoBarChart},
        {title: 'Roles', path:'/Roles', icon : PiGearSix},
        {title : 'Usuarios', path:'/Users', icon : FaIdBadge },
        {
            title: 'Vehiculos', 
            icon: FaCar,
            subMenu: [
              { title: 'Gestión de vehículos', path: '/Vehicles' },
              { title: 'Gestión de marcas', path: '/Brands' }
            ]
          },
        {title: 'Compras', path:'/Purchases', icon : FaCartPlus},
        {title : 'Ventas', path:'/Sells', icon: FaMoneyBillWave },
        {title: 'Clientes', path:'/Clients' , icon : FaUserPlus},
        {title : 'Intercambios', path:'/Exchangues', icon : FaExchangeAlt},
        {title : 'Mejoras', path:'/Improvements', icon : FaTools},
        {title : 'Manuales', path:'/Manuals', icon : FiBookmark }
    ];

    const [showVehicleSubMenu, setShowVehicleSubMenu] = useState(false);

    const toggleVehicleSubMenu = () => {
      setShowVehicleSubMenu(!showVehicleSubMenu);
    };
  
    const closeVehicleSubMenu = () => {
      setShowVehicleSubMenu(false);
    };

  return (
    <div className=' bg-white py-3 fixed top-0  left-0 right-0 shadow-md z-50'>     
            <div className=' flex justify-between'>
                <div>
                    <button className=' ml-4' onClick={() => setOpen(true)}>
                        <FaBars className=' text-sky-600 '/>
                    </button>
                    <span className=' ml-3 font-bold  text-sky-600'> LifeJacket</span>
                </div>
                <div className=' mr-3'>   
                    <Dropdown >
                        <DropdownTrigger>
                            <Button isIconOnly> <BiSolidUser className=' text-2xl text-sky-600'/></Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-labelledby='logout'>
                            <DropdownItem   className="text-danger" color="danger" onClick={handleLogout} > Cerrar sesión</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>

            <div className={`${!open && "hidden"} bg-gray-600/40 min-h-screen w-full fixed top-0 left-0 right-0 `} onClick={() => setOpen(false)}></div>

            <div className={`${open ? "w-80" : "w-0"} bg-[#0D0628] min-h-screen fixed top-0 left-0 transition-all duration-300   `}>
            <div className={`${!open && "hidden"} pt-3`}>
                <button className='ml-4 text-white mb-14' onClick={() => setOpen(false)}>
                    <HiX className=' w-5 h-5'/>
                </button>
                <ul className='pt-6'>
                        {Menus.map((Menu, i) => (
                            <React.Fragment key={i}>
                            {Menu.subMenu ? (
                                <li
                                className={`relative text-white p-4 flex rounded-lg items-center gap-x-6 cursor-pointer hover:bg-slate-200/20`}
                                onClick={Menu.title === 'Vehiculos' ? toggleVehicleSubMenu : null}
                                >
                                <div className='flex items-center'>
                                    <Menu.icon />
                                    <span className=' ml-5 origin-left duration-200'>{Menu.title}</span>
                                    <MdOutlineKeyboardArrowDown className=' text-white' />
                                </div>
                                {Menu.title === 'Vehiculos' && showVehicleSubMenu && (
                                    <ul className={`absolute border-2 border-slate-200 left-20 top-0 bg-[#0D0628]  rounded-lg overflow-hidden transition-all duration-300`}>
                                    {Menu.subMenu.map((subMenu, j) => (
                                        <Link key={j} to={subMenu.path}>
                                        <li className={`${location.pathname === subMenu.path ? ' text-[#0D0628] ' : 'text-white '} p-4 m-2 flex rounded-lg items-center gap-x-6 cursor-pointer ${location.pathname === subMenu.path ? 'bg-[#DFDCE6]' : 'hover:bg-slate-200/20'}`}>
                                            <span className='origin-left duration-200'>{subMenu.title}</span>
                                        </li>
                                        </Link>
                                    ))}
                                    </ul>
                                )}
                                </li>
                            ) : (
                                <Link to={Menu.path}>
                                <li className={`${location.pathname === Menu.path ? 'text-[#0D0628]' : 'text-white'} p-4 flex rounded-lg items-center gap-x-6 cursor-pointer ${location.pathname === Menu.path ? 'bg-[#DFDCE6]' : 'hover:bg-slate-200/20'}`}>
                                    {Menu.icon && <Menu.icon />}
                                    <span className='origin-left duration-200'>
                                        {Menu.title}
                                    </span>
                                </li>
                                </Link>
                            )}
                            </React.Fragment>
                        ))}
                        </ul>
                </div> 
            </div>

        
    </div>
  )
}
