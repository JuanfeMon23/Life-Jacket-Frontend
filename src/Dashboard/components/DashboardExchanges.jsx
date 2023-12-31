import React, { useEffect, useState } from "react";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { getDashboardExchangesRequest } from "../api/dashboard";
import { SelectItem, Select } from "@nextui-org/select";

export function DashboardExchanges() {
  const [filterByStatus, setFilterByStatus] = useState("");
  const [data, setData] = useState({ trueExchanges: [], falseExchanges: [] });
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [years, setYears] = useState([]);
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const result = await getDashboardExchangesRequest();
        setData(result.data);
        const uniqueYears = [...new Set(result.data.trueExchanges.concat(result.data.falseExchanges).map(item => item.year))];
        setYears(uniqueYears);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchExchanges();
  }, []);

  const prepareChartData = () => {
    const filteredData = filterByStatus ? data[`${filterByStatus}Exchanges`] : [];
    const monthlyExchanges = months.map(month => {
      const exchangesData = filteredData.find(item => monthNames[item.month] === month);
      return exchangesData ? exchangesData.totalAmount : 0;
    });

    return monthlyExchanges;
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
            label: `Intercambios en ${selectedYear}`,
            data: prepareChartData(),
            fill: false,
            borderColor: '#9B59B6',
            borderWidth: 2,
            pointRadius: 4,
            pointBackgroundColor: '#9B59B6',
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

    const handleStatusChange = (event) => {
        setFilterByStatus(event.target.value);
    };

    return (
        <div className="flex-grow">
            <div className="bg-white rounded-lg m-3 p-3">
                <div className="m-3 p-2 flex justify-between">
                    <label className="font-bold text-sm md:text-lg lg:text-xl">
                        Dinero en intercambios
                    </label>
                    <Select
                        className="w-[140px] h-[32px]"
                        label="Estado"
                        value={filterByStatus}
                        onChange={handleStatusChange}
                    >
                        <SelectItem key={true} value={true}>
                            Entrante
                        </SelectItem>
                        <SelectItem key={false} value={false}>
                            Saliente
                        </SelectItem>
                    </Select>
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
