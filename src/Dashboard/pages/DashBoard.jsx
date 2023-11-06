import React from 'react'
import { useEffect } from "react";
import { Navigation } from "../../components/globalComponents/Navigation";
import { Title } from "../../components/globalComponents/Title";
import { DashboardSales } from '../components/DashboardSales';
import { DashboardPurchases } from '../components/DashboardPurchases';
import { DashboardExchanges } from '../components/DashboardExchanges';
import { DashboardImprovements } from '../components/DashboardImprovements';
import { DashboardVehicles } from '../components/DashboardVehicles';
import { DashboardSalesCard } from '../components/DashboardSalesCard';
import { DashboardPurchasesCard } from '../components/DashboardPurchasesCard';
import { DashboardExchangesCard } from '../components/DashboardExchangesCard';
import { DashboardImprovementsCard } from '../components/DashboardImprovementsCard';

export function DashBoard() {


  return (
    <div className='flex'>
        <div>
            {<Title Title='Dashboard'/>}
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 p-2">
                <DashboardVehicles />
              </div>
              <div className="w-full sm:w-1/2 md-w-1/4 lg:w-1/5 p-2">
                <DashboardSalesCard />
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 p-2">
                <DashboardPurchasesCard />
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 p-2">
                <DashboardImprovementsCard />
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 p-2">
                <DashboardExchangesCard />
              </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center">
              <DashboardSales />
              <DashboardPurchases />
          </div>
          <div className="flex flex-col sm:flex-row justify-center">
              <DashboardImprovements />
              <DashboardExchanges />
          </div>
        </div>
    </div>
  )
}