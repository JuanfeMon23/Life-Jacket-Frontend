import React, { useEffect, useState } from 'react';
import { getDashboardVehiclesRequest } from '../api/dashboard';
import { FaCar } from 'react-icons/fa';

export function DashboardVehicles() {
  const [totalVehicles, setTotalVehicles] = useState(0);

  useEffect(() => {
    const fetchTotalVehicles = async () => {
      try {
        const response = await getDashboardVehiclesRequest();
        setTotalVehicles(response.data.totalVehicles);
      } catch (error) {
        console.error('Error al obtener el total de vehículos:', error);
      }
    };

    fetchTotalVehicles();
  }, []);

  return (
    <div className="w-[270px] h-[120px]  bg-gradient-to-br from-red-600 to-red-400 rounded-lg flex justify-between items-center p-4 text-white shadow-md m-3">
      <div>
        <div className="text-2xl font-bold">{totalVehicles}</div>
        <div className="text-1x1">Vehículos activos</div>
      </div>
      <div className="text-2xl">
        <FaCar />
      </div>
    </div>
  );

}