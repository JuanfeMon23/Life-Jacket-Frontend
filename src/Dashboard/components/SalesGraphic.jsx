import React, { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import {  Bar  } from 'react-chartjs-2';
import { getDashboardSalesRequest } from "../api/dashboard";

export  function DashboardVehicles() {
    const [data, setData] = useState([]);
    const [selectedYear, setSelectedYear] = useState(null);
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        const fetchSales = async () => {
            const result = await getDashboardSalesRequest();
            setData(result.data);
            const monthsInText = result.data.map(item => monthNames[item.month]);
            setLabels(monthsInText);
        }
        fetchSales();
    }, []);

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
      };
    
      const years = [...new Set(data.map(item => item.year))];
      const months = data.map(item => `${item.month}`);
      const sales = data.map(item => item.totalSales);
      const monthsInText = months.map(month => monthNames[parseInt(month)]);
      const filteredData = selectedYear ? data.filter(item => item.year === selectedYear) : data;


    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        BarElement, 
        Filler
    );
    


    const midata = {
        labels: labels.map((month, index) => `${month} ${selectedYear || years[index]}`),
        datasets: [{
                label: `Ventas en ${selectedYear || "todos los años"}`,
                data : sales,
                fill : true,
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
            },
        ],
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
              text: 'Ventas',
            },
            min: 0,
          },
        },
      };

    return(
        <div className=" w-[50vh] h-[27vh] bg-white rounded-lg m-3 ">  
                 <Bar data={midata} options={options}/> 
        </div>
    )    
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
