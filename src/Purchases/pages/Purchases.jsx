import React from 'react'
import { useEffect, useState } from "react";
import { Navigation } from "../../components/globalComponents/Navigation";
import { Title } from "../../components/globalComponents/Title";
import { usePurchases } from '../context/purchaseContext';
import { PurchaseRegister } from '../components/PurchaseRegister';
import { useVehicles } from '../../Vehicles/context/vehiclesContext';
import { useClients } from '../../Clients/context/clientsContext';
import { CardPurchase } from '../components/CardPurchase';

export  function Purchases() {
    const {getPurchases } = usePurchases();
    const {getClients} = useClients();
    const {getVehicles} = useVehicles();

    useEffect(() => {
        getPurchases();
        getVehicles();
        getClients(); 
    },[]);

  return (
    <div className=' flex'>
        <div>
            <Navigation/>
        </div>
        <div>
            {<Title Title='Compras'/>}
            <PurchaseRegister/>


            <div>
                <CardPurchase/>
            </div>
        </div>
    </div>
  )
}
