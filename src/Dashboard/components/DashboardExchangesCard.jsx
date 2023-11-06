import React, { useEffect, useState } from 'react';
import { getDashboardExchangesCardRequest } from "../api/dashboard";
import { FaExchangeAlt } from 'react-icons/fa'

const cardStyles = {
  width: '270px',
  height: '120px',
  background: 'linear-gradient(45deg, #8A2BE2, #9B59B6)',
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

export function DashboardExchangesCard() {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchTotalAmount = async () => {
      try {
        const response = await getDashboardExchangesCardRequest();
        const data = response.data;
        if (data.length > 0) {
          setTotalAmount(data[0].totalAmount);
        } else {
          setTotalAmount(0);
        }
      } catch (error) {
        console.error('Error al obtener datos de intercambios por cantidad de dinero:', error);
        setTotalAmount(0);
      }
    };

    fetchTotalAmount();
  }, []);

  return (
    <div style={cardStyles} className="rounded-lg p-4 m-3">
      <div>
        <div style={totalStyles}>{totalAmount}</div>
        <div style={titleStyles}>Intercambios del mes actual</div>
      </div>
      <div style={iconStyles}>
        <FaExchangeAlt />
      </div>
    </div>
  );
}
