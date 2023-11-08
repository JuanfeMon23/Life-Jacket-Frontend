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
  <div className='min-h-screen w-full flex flex-col'>
    <div>
      <Title Title='Dashboard' />
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-col w-full md:w-1/2'>
          <DashboardSales />
          <DashboardPurchases />
        </div>
        <div className='flex flex-col w-full md:w-1/2'>
          <DashboardImprovements />
          <DashboardExchanges />
        </div>
        <div className='flex flex-col w-full md:w-1/2 lg:w-[30%] justify-center items-center'>
          <DashboardVehicles />
          <DashboardSalesCard />
          <DashboardPurchasesCard />
          <DashboardImprovementsCard />
          <DashboardExchangesCard />
        </div>
      </div>
    </div>
  </div>
  );

}