import React from 'react'
import { useEffect } from "react";
import { Navigation } from "../../components/globalComponents/Navigation";
import { Title } from "../../components/globalComponents/Title";
import { DashboardSales } from '../components/DashboardSales';
import { DashboardPurchases } from '../components/DashboardPurchases';
import { DashboardImprovements } from '../components/DashboardImprovements';


export function DashBoard() {


  return (
    <div className=' flex'>
        <div>
            {<Title Title='DashBoard'/>}
        <DashboardSales/>
        <DashboardPurchases/>
        <DashboardImprovements/>
        </div>
    </div>
  )
}