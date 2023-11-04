import React from 'react'
import { useEffect } from "react";
import { Navigation } from "../../components/globalComponents/Navigation";
import { Title } from "../../components/globalComponents/Title";
import { DashboardSales } from '../components/DashboardSales';
import { DashboardPurchases } from '../components/DashboardPurchases';
import { DashboardImprovements } from '../components/DashboardImprovements';
import { DashboardVehicles } from '../components/DashboardVehicles';
import { DashboardSalesCard } from '../components/DashboardSalesCard';
import { DashboardPurchasesCard } from '../components/DashboardPurchasesCard';
import { DashboardExchangesCard } from '../components/DashboardExchangesCard';

export function DashBoard() {


  return (
    <div className='flex'>
        <div>
            {<Title Title='DashBoard'/>}
        <div className="flex flex-row w-full">
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-2">
              <DashboardVehicles />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-2">
              <DashboardSalesCard />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-2">
              <DashboardPurchasesCard />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-2">
              <DashboardExchangesCard />
            </div>
          </div>
            <div className="flex flex-row flex-wrap w-full">
            <div className="w-full sm:w-1/2 flex-grow p-2">
              <DashboardSales />
            </div>
            <div className="w-full sm:w-1/2 flex-grow p-2">
              <DashboardPurchases />
            </div>
            <div className="w-full sm:w-1/2 flex-grow p-2">
              <DashboardImprovements />
            </div>
            <div className="w-full sm:w-1/2 flex-grow p-2">
              <DashboardImprovements />
            </div>
          </div>

        </div>
    </div>
  )
}