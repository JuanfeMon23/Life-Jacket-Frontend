import React, { useEffect, useState } from 'react';
import { getDashboardExchangesCardRequest } from "../api/dashboard";
import { FaExchangeAlt } from 'react-icons/fa'


export function DashboardExchangesCard() {
  const [totalExchanges, setTotalExchanges] = useState(0);

  useEffect(() => {
    const fetchTotalExchanges = async () => {
      try {
        const response = await getDashboardExchangesCardRequest();
        const data = response.data;
        if (data.length > 0) {
          setTotalExchanges(data[0].totalExchanges);
        } else {
          setTotalExchanges(0);
        }
      } catch (error) {
        console.error('Error al obtener datos de intercambios por cantidad de dinero:', error);
        setTotalExchanges(0);
      }
    };

    fetchTotalExchanges();
  }, []);

  return (
    <div className="w-[270px] h-[120px] bg-gradient-to-br from-purple-800 to-purple-600 rounded-lg flex justify-between items-center p-4 text-white shadow-md m-3">
      <div>
        <div className="text-2xl font-bold">{totalExchanges}</div>
        <div className="text-1x1">Intercambios del mes actual</div>
      </div>
      <div className="text-2xl">
        <FaExchangeAlt />
      </div>
    </div>
  );
  
}
