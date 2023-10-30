import React from 'react'
import { useEffect } from "react";
import { Navigation } from "../../components/globalComponents/Navigation";
import { Title } from "../../components/globalComponents/Title";
import { DashboardVehicles } from '../components/SalesGraphic';



export function DashBoard() {


  return (
    <div className=' flex'>
        <div>
            {<Title Title='DashBoard'/>}
        <DashboardVehicles/>

        </div>
    </div>
  )
}