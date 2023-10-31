import React, { useEffect, useState } from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { getDashboardSalesRequest } from "../api/dashboard";
import { SelectItem, Select } from "@nextui-org/select";

export function DashboardSales() {
    const [data, setData] = useState([]);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [years, setYears] = useState([]);
    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Niciembre'
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

    const colors = ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)'];
   
    const chartData = {
        labels: months,
        datasets: [{
            label: `Ventas en ${selectedYear}`,
            data: prepareChartData(),
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
                    text: 'Ventas',
                },
                min: 0,
            },
        },
    };

    const handleYearChange = (event) => {
        setSelectedYear(parseInt(event.target.value));
    };

    return (
        <div className="w-[60vh] h-[37vh] bg-white rounded-lg m-3">
            <div className="m-3 p-2 flex justify-between">
                <label className="font-bold text-lg">Dinero en ventas por año</label>
                <Select
                    className="w-[150px] h-[32px]"
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
