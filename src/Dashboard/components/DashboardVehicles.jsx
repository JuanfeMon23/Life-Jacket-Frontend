import React, { useEffect, useState } from 'react';
import { getDashboardVehiclesRequest } from '../api/dashboard';

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
  }, []); // La función se ejecuta una vez al cargar el componente (debido al segundo argumento como array vacío [])

  return (
    <div className="w-[300px] h-[150px] bg-white rounded-lg p-4 m-3 shadow-md">
      <h2 className="text-xl font-bold mb-4">Total de Vehículos Activos</h2>
      <div className="text-3xl font-bold">{totalVehicles}</div>
    </div>
  );
}