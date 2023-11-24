import React from 'react'
import { useEffect, useState } from "react";
import { Title } from "../../components/globalComponents/Title";
import { usePurchases } from '../context/purchaseContext';
import { useVehicles } from '../../Vehicles/context/vehiclesContext';
import { useClients } from '../../Clients/context/clientsContext';
import { TablePurchase } from '../components/TablePurchase';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../Login/context/AuthContext";


export  function Purchases() {
    const {getPurchases } = usePurchases();
    const {getClients} = useClients();
    const {getVehicles} = useVehicles();
    const {user} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      async function verificate(){
        if(!user.Licenses.includes('Compras')){
          navigate('/DashBoard');
        }
      }
      verificate();
    },[])
    
    useEffect(() => {
        getPurchases();
        getVehicles();
        getClients(); 
    },[]);

  return (
    <div className=' flex'>
        <div>
            {<Title Title='Compras'/>}
            <div>
                <TablePurchase/>
            </div>
        </div>
    </div>
  )
}
