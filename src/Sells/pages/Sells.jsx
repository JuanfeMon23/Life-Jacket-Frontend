import React from 'react'
import { useEffect, useState } from "react";
import { Navigation } from "../../components/globalComponents/Navigation";
import { Title } from "../../components/globalComponents/Title";
import { useSells } from '../context/sellsContext';
import { useVehicles } from '../../Vehicles/context/vehiclesContext';
import { useClients } from '../../Clients/context/clientsContext';
import { TableSale } from '../components/TableSale';
import { useAuth } from '../../Login/context/AuthContext';
import { useNavigate } from 'react-router-dom';

export  function Sells() {
    const {getSells } = useSells();
    const {getVehicles} = useVehicles();
    const {getClients} = useClients();
    const navigate = useNavigate();
    const {user} = useAuth();


    useEffect(() => {
        async function verificate(){
          if(!user.Licenses.includes('Usuarios')){
            navigate('/DashBoard');
          }
        }
        verificate();
      },[])

    useEffect(() => {
        getSells();
        getVehicles();
        getClients();
    },[]);

  return (
    <div className=' flex'>
        <div>
            {<Title Title='Ventas'/>}
            <div>
                <TableSale/>
            </div>
        </div>
    </div>
  )
}