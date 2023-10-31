import React from 'react'
import { useEffect } from "react";
import { Navigation } from "../../components/globalComponents/Navigation";
import { Title } from "../../components/globalComponents/Title";
import { DashboardSales } from '../components/DashboardSales';
import { DashboardPurchases } from '../components/DashboardPurchases';
import { DashboardImprovements } from '../components/DashboardImprovements';
import { DashboardVehicles } from '../components/DashboardVehicles';
import { DashboardSalesCard } from '../components/DashboardSalesCard';


export function DashBoard() {


  return (
    <div className=' flex'>
        <div>
            {<Title Title='DashBoard'/>}
        <DashboardSales/>
        <DashboardPurchases/>
        <DashboardImprovements/>
        <DashboardVehicles/>
        <DashboardSalesCard/>
        </div>
    </div>
  )
}