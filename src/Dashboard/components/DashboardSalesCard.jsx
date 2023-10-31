
import React, { useEffect, useState } from 'react';
import { getDashboardSalesCardRequest } from "../api/dashboard";

export function DashboardSalesCard() {
  const [totalSales, setTotalSales] = useState(0);

  useEffect(() => {
    const fetchTotalSales = async () => {
      try {
        const response = await getDashboardSalesCardRequest();
        setTotalSales(response.data.totalSales);
      } catch (error) {
        console.error('Error al obtener datos de ventas por cantidad de dinero:', error);
      }
    };

    fetchTotalSales();
  }, []); // La función se ejecuta una vez al cargar el componente (debido al segundo argumento como array vacío [])

  return (
    <div className="w-[300px] h-[150px] bg-white rounded-lg p-4 m-3 shadow-md">
      <h2 className="text-xl font-bold mb-4">Ventas del Mes Actual</h2>
      <div className="text-3xl font-bold">{totalSales}</div>
    </div>
  );
}
