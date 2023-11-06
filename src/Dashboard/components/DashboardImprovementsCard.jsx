import React, { useEffect, useState } from 'react';
import { getDashboardImprovementsCardRequest } from "../api/dashboard";
import {FaTools} from 'react-icons/fa';

const cardStyles = {
  width: '270px',
  height: '120px',
  background: 'linear-gradient(45deg, #2ed8b6, #59e0c5)',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px',
  color: 'white',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const totalStyles = {
  fontSize: '24px',
  fontWeight: 'bold',
};

const titleStyles = {
  fontSize: '16px',
};

const iconStyles = {
  fontSize: '32px',
};

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
    <div style={cardStyles} className="rounded-lg p-4 m-3">
      <div>
        <div style={totalStyles}>{totalAmount}</div>
        <div style={titleStyles}>Mejoras del mes actual</div>
      </div>
      <div style={iconStyles}>
        <FaTools />
      </div>
    </div>
  );
}
