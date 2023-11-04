import axios from '../../api/axios.js';

export const getDashboardSalesRequest = async () => await axios.get(`/Dashboard/Sales/withMonth`);

export const getDashboardPurchasesRequest = () => axios.get(`/Dashboard/Purchases/withMonth`);

export const getDashboardImprovementsRequest = () => axios.get(`/Dashboard/Improvements/withMonth`);

export const getDashboardVehiclesRequest = () => axios.get(`/Dashboard/Vehicles/totalVehicles`);

export const getDashboardSalesCardRequest = () => axios.get(`/Dashboard/Sales/withMonth/Card`);

export const getDashboardPurchasesCardRequest = () => axios.get(`/Dashboard/Purchases/withMonth/Card`);