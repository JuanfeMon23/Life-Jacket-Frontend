import React, { useEffect, useState } from "react";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { getDashboardSalesRequest } from "../api/dashboard";
import { SelectItem, Select } from "@nextui-org/select";

export function DashboardSales() {
    const [data, setData] = useState([]);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [years, setYears] = useState([]);
    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    useEffect(() => {
        const fetchSales = async () => {
            const result = await getDashboardSalesRequest();
            setData(result.data);
            const uniqueYears = [...new Set(result.data.map(item => item.year))];
            setYears(uniqueYears);
        }
        fetchSales();
    }, []);

    const prepareChartData = () => {
        const filteredData = data.filter(item => item.year === selectedYear);
        const monthlySales = months.map(month => {
            const salesData = filteredData.find(item => monthNames[item.month] === month);
            return salesData ? salesData.totalAmount : 0;
        });

        return monthlySales;
    };

    ChartJS.register(
        LineElement,
        CategoryScale,
        LinearScale,
        PointElement,
        Title,
        Tooltip,
        Legend
    );

    const chartData = {
        labels: months,
        datasets: [{
            label: `Ventas en ${selectedYear}`,
            data: prepareChartData(),
            fill: false,
            borderColor: '#73b4ff',
            borderWidth: 2,
            pointRadius: 4,
            pointBackgroundColor: '#73b4ff',
            type: 'line'
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
        <div className="flex-grow">
          <div className="bg-white rounded-lg m-3 p-3">
            <div className="m-3 p-2 flex justify-between">
              <label className="font-bold text-sm md:text-lg lg:text-xl">
                Dinero generado en ventas
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
            <Line data={chartData} options={options} />
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
