import React, { useEffect, useState } from 'react';
import { getDashboardImprovementsCardRequest } from "../api/dashboard";
import {FaTools} from 'react-icons/fa';

export function DashboardImprovementsCard() {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchTotalAmount = async () => {
      try {
        const response = await getDashboardImprovementsCardRequest();
        const data = response.data;
        if (data.length > 0) {
          const formattedTotalAmount = formatCurrency(data[0].totalAmount);
          setTotalAmount(formattedTotalAmount);
        } else {
          setTotalAmount('0');
        }
      } catch (error) {
        console.error('Error al obtener datos de mejoras por cantidad de dinero:', error);
        setTotalAmount('0');
      }
    };

    fetchTotalAmount();
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="w-[270px] h-[120px] bg-gradient-to-br from-teal-500 to-teal-400 rounded-lg flex justify-between items-center p-4 text-white shadow-md m-3">
      <div>
        <div className="text-2xl font-bold">{totalAmount}</div>
        <div className="text-1x1">Mejoras del mes actual</div>
      </div>
      <div className="text-2xl">
        <FaTools />
      </div>
    </div>
  );

}
