import React from 'react'
import { useEffect } from "react";
import { Navigation } from "../../components/globalComponents/Navigation";
import { Title } from "../../components/globalComponents/Title";
import { DashboardSales } from '../components/DashboardSales';
import { DashboardPurchases } from '../components/DashboardPurchases';


export function DashBoard() {


  return (
    <div className=' flex'>
        <div>
            {<Title Title='DashBoard'/>}
        <DashboardSales/>
        <DashboardPurchases/>
        </div>
    </div>
  )
}