import React, { useEffect, useState } from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { getDashboardPurchasesRequest } from "../api/dashboard";

export function DashboardPurchases() {
    const [data, setData] = useState([]);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [years, setYears] = useState([]);
    const months = [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];

    useEffect(() => {
        const fetchPurchases = async () => {
            const result = await getDashboardPurchasesRequest();
            setData(result.data);
            const uniqueYears = [...new Set(result.data.map(item => item.year))];
            setYears(uniqueYears);
        }
        fetchPurchases();
    }, []);

    const prepareChartData = () => {
      const filteredData = data.filter(item => item.year === selectedYear);
      const monthlyPurchases = months.map(month => {
          const purchasesData = filteredData.find(item => monthNames[item.month] === month);
          return purchasesData ? purchasesData.totalAmount : 0;
      });

      return monthlyPurchases;
    };

    const chartData = {
      labels: months,
      datasets: [{
          label: `Compras en ${selectedYear}`,
          data: prepareChartData(),
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }],
    };

    const options = {
        plugins: {
            legend: {
                display: true,
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Meses',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Compras',
                },
                min: 0,
            },
        },
    };

    const handleYearChange = (event) => {
      setSelectedYear(parseInt(event.target.value));
    };
    
    return (
      <div className="w-[50vh] h-[27vh] bg-white rounded-lg m-3">
          <div className="mb-3">
              <label>Selecciona un año:</label>
              <select value={selectedYear} onChange={handleYearChange}>
                  {years.map(year => (
                      <option key={year} value={year}>
                          {year}
                      </option>
                  ))}
              </select>
          </div>
          <Bar data={chartData} options={options} />
      </div>
  );   
}

const monthNames = {
    1: 'enero',
    2: 'febrero',
    3: 'marzo',
    4: 'abril',
    5: 'mayo',
    6: 'junio',
    7: 'julio',
    8: 'agosto',
    9: 'septiembre',
    10: 'octubre',
    11: 'noviembre',
    12: 'diciembre'
  };
