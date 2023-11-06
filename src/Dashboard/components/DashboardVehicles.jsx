import React, { useEffect, useState } from 'react';
import { getDashboardVehiclesRequest } from '../api/dashboard';
import { FaCar } from 'react-icons/fa';

const cardStyles = {
  width: '270px',
  height: '120px',
  background: 'linear-gradient(45deg, #FF5370, #ff869a)',
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
    <div style={cardStyles} className="rounded-lg p-4 m-3">
      <div>
        <div style={totalStyles}>{totalVehicles}</div>
        <div style={titleStyles}>Vehículos activos</div>
      </div>
      <div style={iconStyles}>
        <FaCar />
      </div>
    </div>
  );
}