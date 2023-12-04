import React from 'react'
import { Title } from "../../components/globalComponents/Title";
import {Card, CardBody, Button} from "@nextui-org/react";
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
import {PiGearSix} from 'react-icons/pi';
import {BiSolidUser} from 'react-icons/bi'
import { useNavigate } from "react-router-dom";



export  function Manuals() {
  const navigate = useNavigate();

  function handleAcces(){
    navigate('/Manuals/Login')
  }

  function handleDashboard(){
    navigate('/Manuals/Dashboard')
  }

  function handleRoles(){
    navigate('/Manuals/Roles')
  }

  function handleUsers(){
    navigate('/Manuals/Users')
  }

  function handleVehicles(){
    navigate('/Manuals/Vehicles')
  }

  function handleClients(){
    navigate('/Manuals/Clients')
  }

  function handlePurchases(){
    navigate('/Manuals/Purchases')
  }

  function handleSales(){
    navigate('/Manuals/Sales')
  }

  function handleExchanges(){
    navigate('/Manuals/Exchanges')
  }

  function handleImprovements(){
    navigate('/Manuals/Improvements')
  }

  return (
    <div className=''>        
      <div>
        {<Title Title='Manuales'/>}
      </div>
      <div className=' grid gap-4 grid-cols-1 md:grid-cols-3 md:ml-24 xl:grid-cols-5 xl:ml-12 ml-3 '>
      <Card className=' w-[350px]'>
            <CardBody>
                <div className=' flex flex-col justify-center items-center p-5'>
                  <BiSolidUser size={'30px'}/>
                  <p className=' mt-3'>Manual de acceso</p>
                </div>
             <Button title='Ver manual de acceso' onClick={handleAcces} color='primary'>ir</Button>
          </CardBody>
        </Card>

        <Card className=' w-[350px]'>
            <CardBody>
                <div className=' flex flex-col justify-center items-center p-5'>
                  <IoBarChart size={'30px'}/>
                  <p className=' mt-3'>Manual de dashboard</p>
                </div>
             <Button title='Ver manual de dashboard' onClick={handleDashboard} color='primary'>ir</Button>
          </CardBody>
        </Card>

        <Card className=' w-[350px]'>
            <CardBody>
                <div className=' flex flex-col justify-center items-center p-5'>
                  <PiGearSix size={'30px'}/>
                  <p className=' mt-3'>Manual de roles</p>
                </div>
             <Button title='Ver manual de roles' onClick={handleRoles} color='primary'>ir</Button>
          </CardBody>
        </Card>
        <Card className=' w-[350px]'>
            <CardBody>
                <div className=' flex flex-col justify-center items-center p-5'>
                  <FaIdBadge size={'30px'}/>
                  <p className=' mt-3'>Manual de usuarios</p>
                </div>
             <Button title='Ver manual de usuarios' onClick={handleUsers} color='primary'>ir</Button>
          </CardBody>
        </Card>
        <Card className=' w-[350px]'>
            <CardBody>
                <div className=' flex flex-col justify-center items-center p-5'>
                  <FaCar size={'30px'}/>
                  <p className=' mt-3'>Manual de vehiculos</p>
                </div>
             <Button title='Ver manual de vehículos' onClick={handleVehicles} color='primary'>ir</Button>
          </CardBody>
        </Card>
        <Card className=' w-[350px]'>
            <CardBody>
                <div className=' flex flex-col justify-center items-center p-5'>
                  <FaUserPlus size={'30px'}/>
                  <p className=' mt-3'>Manual de clientes</p>
                </div>
             <Button title='Ver manual de clientes' onClick={handleClients}  color='primary'>ir</Button>
          </CardBody>
        </Card>
        <Card className=' w-[350px]'>
            <CardBody>
                <div className=' flex flex-col justify-center items-center p-5'>
                  <FaCartPlus size={'30px'}/>
                  <p className=' mt-3'>Manual de compras</p>
                </div>
             <Button title='Ver manual de compras' onClick={handlePurchases} color='primary'>ir</Button>
          </CardBody>
        </Card>

        <Card className=' w-[350px]'>
            <CardBody>
                <div className=' flex flex-col justify-center items-center p-5'>
                  <FaMoneyBillWave size={'30px'}/>
                  <p className=' mt-3'>Manual de ventas</p>
                </div>
             <Button title='Ver manual de ventas' onClick={handleSales} color='primary'>ir</Button>
          </CardBody>
        </Card>

        <Card className=' w-[350px]'>
            <CardBody>
                <div className=' flex flex-col justify-center items-center p-5'>
                  <FaExchangeAlt size={'30px'}/>
                  <p className=' mt-3'>Manual de intercambios</p>
                </div>
             <Button title='Ver manual de intercambios' onClick={handleExchanges} color='primary'>ir</Button>
          </CardBody>
        </Card>

        <Card className=' w-[350px]'>
            <CardBody>
                <div className=' flex flex-col justify-center items-center p-5'>
                  <FaTools size={'30px'}/>
                  <p className=' mt-3'>Manual de mejoras</p>
                </div>
             <Button title='Ver manual de mejoras' onClick={handleImprovements} color='primary'>ir</Button>
          </CardBody>
        </Card>

      </div>
       
  </div>
  )
}
