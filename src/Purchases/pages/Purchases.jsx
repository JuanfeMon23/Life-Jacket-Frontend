import React from 'react'
import { useEffect, useState } from "react";
import { Navigation } from "../../components/globalComponents/Navigation";
import { Title } from "../../components/globalComponents/Title";
import { usePurchases } from '../context/purchaseContext';
import { PurchaseRegister } from '../components/PurchaseRegister';
import { useVehicles } from '../../Vehicles/context/vehiclesContext';
import { useClients } from '../../Clients/context/clientsContext';
import { TablePurchase } from '../components/TablePurchase';
import { ReportPurchase } from '../components/ReportPurchase';


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
            {<Title Title='Compras'/>}
            <div>
                <TablePurchase/>
            </div>
        </div>
    </div>
  )
}
