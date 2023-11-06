import React, { useEffect, useState } from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { getDashboardImprovementsRequest } from "../api/dashboard";
import { SelectItem, Select } from "@nextui-org/select";

export function DashboardImprovements() {
    const [data, setData] = useState([]);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [years, setYears] = useState([]);
    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    useEffect(() => {
        const fetchImprovements = async () => {
            const result = await getDashboardImprovementsRequest();
            setData(result.data);
            const uniqueYears = [...new Set(result.data.map(item => item.year))];
            setYears(uniqueYears);
        }
        fetchImprovements();
    }, []);

    const prepareChartData = () => {
        const filteredData = data.filter(item => item.year === selectedYear);
        const monthlyImprovements = months.map(month => {
            const improvementsData = filteredData.find(item => monthNames[item.month] === month);
            return improvementsData ? improvementsData.totalAmount : 0;
        });

        return monthlyImprovements;
    };

    ChartJS.register(
        BarElement,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        Filler
    );

    const chartData = {
        labels: months,
        datasets: [{
            label: `Ventas en ${selectedYear}`,
            data: prepareChartData(),
            fill: true,
            backgroundColor: '#59e0c5',
            type : 'bar',
        }],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
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
                    text: 'Dinero',
                },
                min: 0,
            },
        },
    };

    const handleYearChange = (event) => {
        setSelectedYear(parseInt(event.target.value));
    };

    return (
        <div className="w-full md:w-1/3 lg:w-2/5 p-2">
          <div className="bg-white rounded-lg m-3 p-3">
            <div className="m-3 p-2 flex justify-between">
              <label className="font-bold text-sm md:text-lg lg:text-xl">
                Dinero invertido en mejoras
              </label>
              <Select
                className="w-[140px] h-[32px]"
                label="Seleccionar año"
                value={selectedYear}
                onChange={handleYearChange}
              >
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <Bar data={chartData} options={options} />
          </div>
        </div>
      );
}

const monthNames = {
    1: 'Enero',
    2: 'Febrero',
    3: 'Marzo',
    4: 'Abril',
    5: 'Mayo',
    6: 'Junio',
    7: 'Julio',
    8: 'Agosto',
    9: 'Septiembre',
    10: 'Octubre',
    11: 'Noviembre',
    12: 'Diciembre'
};
