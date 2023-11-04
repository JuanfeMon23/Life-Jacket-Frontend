import React, { useEffect, useState } from 'react';
import { getDashboardPurchasesCardRequest } from "../api/dashboard";

export function DashboardPurchasesCard() {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchTotalAmount = async () => {
      try {
        const response = await getDashboardPurchasesCardRequest();
        const data = response.data;
        if (data.length > 0) {
          const formattedTotalAmount = formatCurrency(data[0].totalAmount);
          setTotalAmount(formattedTotalAmount);
        } else {
          setTotalAmount('0');
        }
      } catch (error) {
        console.error('Error al obtener datos de compras por cantidad de dinero:', error);
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
    <div className="w-[270px] h-[120px] bg-blue-200 bg-opacity-40 rounded-lg p-4 m-3 shadow-md">
      <h2 className="text-xl font-bold mb-4">Compras del mes</h2>
      <div className="text-3xl font-bold">{totalAmount}</div>
    </div>
  );
  
}
