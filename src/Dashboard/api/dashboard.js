import axios from '../../api/axios.js';

export const getDashboardSalesRequest = async () => await axios.get(`/Dashboard/Sales/withMonth`);

export const getDashboardPurchasesRequest = () => axios.get(`/Dashboard/Purchases/withMonth`);

export const getDashboardImprovementsRequest = () => axios.get(`/Dashboard/Improvements/withMonth`);

export const getDashboardVehiclesRequest = () => axios.get(`/Dashboard/Vehicles/totalVehicles`);