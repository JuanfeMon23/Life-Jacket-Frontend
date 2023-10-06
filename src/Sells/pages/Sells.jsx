import React from 'react'
import { useEffect, useState } from "react";
import { Navigation } from "../../components/globalComponents/Navigation";
import { Title } from "../../components/globalComponents/Title";
import { useSells } from '../context/sellsContext';
import { SaleRegister } from '../components/SaleRegister';
import { useVehicles } from '../../Vehicles/context/vehiclesContext';
import { useClients } from '../../Clients/context/clientsContext';
import { TableSale } from '../components/TableSale';

export  function Sells() {
    const {getSells } = useSells();
    const {getVehicles} = useVehicles();
    const {getClients} = useClients();

    useEffect(() => {
        getSells();
        getVehicles();
        getClients();
    },[]);

  return (
    <div className=' flex'>
        <div>
            <Navigation/>
        </div>
        <div>
            {<Title Title='Ventas'/>}
            <SaleRegister/>

            <div>
                <TableSale/>
            </div>
        </div>
    </div>
  )
}